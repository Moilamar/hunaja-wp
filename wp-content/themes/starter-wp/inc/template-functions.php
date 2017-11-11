<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Starter_WP
 */

/*-------------------------------------------------------------------------------------------
 * Add a pingback url auto-discovery header for singularly identifiable articles.
------------------------------------------------------------------------------------------*/
function starter_wp_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'starter_wp_pingback_header' );

/*-------------------------------------------------------------------------------------------
 * Wrapper for get_sidebar()
 ------------------------------------------------------------------------------------------*/
function starter_wp_get_sidebar( $sidebar = '' ) {
	// disable sidebar
	if ( ! apply_filters( 'starter_wp_show_sidebar', true ) ) {
		return false;
	} 

	return get_sidebar( apply_filters( 'starter_wp_get_sidebar', $sidebar ) );
}

/*-------------------------------------------------------------------------------------------
 * Remove sidebar
 ------------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_remove_sidebar' ) ):
    function starter_wp_remove_sidebar() {
        
        if ( in_array( 'no-sidebar', get_body_class() )  ) {
            // Remove the sidebar.
            add_filter( 'starter_wp_show_sidebar', '__return_false' );

        }

    }
endif;
add_action( 'template_redirect', 'starter_wp_remove_sidebar',1 );

/*-------------------------------------------------------------------------------------------
 * Display post thumbnial
 ------------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_post_thumbnail' ) ) :

    function starter_wp_post_thumbnail() {

        if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
            return;
        }

        // Allow developers to remove the post thumbnail
        if ( ! apply_filters( 'starter_wp_post_thumbnail', true ) ) {
            return;
        }

        if ( is_singular() ) : ?>
    
        <?php 
                if (!has_post_format()) {
                    echo '<div class="post-thumbnail">';
                        the_post_thumbnail();
                    echo '</div>';
                }
            //gallery
            $images = get_post_meta( get_the_ID(), '_starter_wp_gallery', 1 );
            if ( !empty( $images ) && has_post_format( 'gallery' ) ) :
                echo '<div class="flexslider"><ul class="slides">';
                    foreach ( (array) $images as $attachment_id => $attachment_url ) {
                        echo '<li>' . wp_get_attachment_image( $attachment_id, 'full' ) . '</li>';
                    }
                echo '</ul></div>';
            endif; 
            //video
            $video = esc_url( get_post_meta( get_the_ID(), '_starter_wp_video', 1 ) );
            if ( !empty( $video ) && has_post_format( 'video' ) ) : 
                echo '<div class="video">';
                    echo wp_oembed_get( $video );
                echo '</div>';
             endif;
         
        else : ?>

        <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true">
            <?php the_post_thumbnail( 'post-thumbnail', array( 'alt' => get_the_title() ) ); ?>
        </a>

        <?php endif; // End is_singular()
    }
endif;

/*-------------------------------------------------------------------------------------------
 * Display post/page header
 ------------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_page_header' ) ) :
    
    add_action('starter_wp_masthead_after', 'starter_wp_page_header');

	function starter_wp_page_header( $args = array() ) {
        
        add_filter('woocommerce_show_page_title', create_function('$result', 'return false;'), 20);
	    remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );

		do_action( 'starter_wp_page_header_before' );
        
		// Process any classes passed in.
		if ( ! empty( $args['classes'] ) ) {
			if ( is_array( $args['classes'] ) ) {
				// array of classes
				$classes = $args['classes'];
			} else {
				// must be string, explode it into an array
				$classes = explode( ' ', $args['classes'] );
			}
		} else {
			$classes = array();
		}

		?>
        <?php if (!is_front_page() && !is_home() && !is_singular('product')) : ?>
    
		<header class="page-header">
			<div class="<?php echo starter_wp_page_header_classes( $classes ); ?>">
				<?php do_action( 'starter_wp_page_header_wrapper_start' ); ?>
				
                    <?php 
                        if (is_singular()) {
                            the_title('<h1 class="entry-title">','</h1>');
                        } 
                        if (is_archive()) {
                            if (is_archive('product-category')) {
                               echo '<h1 class="entry-title">'. single_cat_title('',false) . '</h1>';
                            } else{
                                the_archive_title('<h1 class="entry-title">','</h1>');
                            }
                            the_archive_description('<div class="taxonomy-description">','</div>');
                         }
                   
                        if (is_search()) {
					       /* translators: %s: search query. */
                           echo '<h1 class="entry-title">'; 
					           printf( esc_html__( 'Search Results for: %s', 'starter-wp' ), '<span>' . get_search_query() . '</span>' );
                           echo '</h1>';
                        }
                        if (is_404()) {
                            echo '<h1 class="entry-title">';
                                esc_html_e( 'Oops! That page can&rsquo;t be found.', 'starter-wp' ); 
                            echo '</h1>';
                        }
                      ?>
                <?php do_action( 'starter_wp_page_header_wrapper_end' ); ?>
			</div>
            
		</header>
        <?php endif; ?>
	<?php
        	do_action( 'starter_wp_page_header_after' );

	}

endif;


/*-------------------------------------------------------------------------------------------
 * Post author snippet.
 *-------------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_author_info_box' ) ) :

	function starter_wp_author_info_box() {
		if ( get_the_author_meta('user_email') ) {
			$avatar = get_avatar( get_the_author_meta('ID'), 80 );
		} else {
			$avatar = '';
		}
		?>
		<div class="author-info entry-author">
			<?php
			if ( $avatar ) {
				echo '<div class="author-avatar round-images">' . $avatar . '</div>';
			}
			?>
			<div class="author-description">
				<h4><span class="author-heading"><?php _e( 'Author:', 'starter-wp' ); ?></span>&nbsp;<?php the_author_meta( 'display_name' ); ?></h4>
				<?php
				$user_url = get_the_author_meta('user_url');
				if ( $user_url ) {
					echo '<a class="author-link" href="' . esc_url( $user_url ) . '" rel="author">' . esc_html( $user_url ) . '</a>';
				}
				?>
				<p class="author-bio"><?php the_author_meta( 'description' ); ?></p>
			</div>
		</div>
	<?php
	}

endif; // presscore_display_post_author

/*-------------------------------------------------------------------------------------------
 * Post author snippet.
 *-------------------------------------------------------------------------------------------*/

if ( ! function_exists( 'starter_wp_related_posts' ) ) :
	function starter_wp_related_posts() {
        global $post;
        $current_post = $post->ID;
        $categories = get_the_category();
        
        foreach ($categories as $category) : ?>

        <h3 class="related-posts-title"><?php _e( 'Related Posts', 'starter-wp' ); ?></h3>
        <ul class="related-posts">
        <?php
            $posts = get_posts('numberposts=4&category='. $category->term_id . '&exclude=' . $current_post);
        foreach($posts as $post) :
            ?>
        <li class="related col-two-cycle">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
            </li>
            <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>
        <?php
            wp_reset_query();
		}

endif;
/*-------------------------------------------------------------------------------------------
 * Replaces the excerpt "Read More" text by a link
 ------------------------------------------------------------------------------------------*/
function starter_wp_excerpt_more($more) {
    global $post;
	return '...<a class="more-tag" href="'. get_permalink($post->ID) . '"> '. esc_attr("Read more", "starter-wp") .'</a>';
}
add_filter('excerpt_more', 'starter_wp_excerpt_more');

/*-------------------------------------------------------------------------------------------
 * Custom excerpt length
 ------------------------------------------------------------------------------------------*/
function starter_wp_custom_excerpt_length( $length ) {
	return 20;
}
add_filter( 'excerpt_length', 'starter_wp_custom_excerpt_length', 999 );