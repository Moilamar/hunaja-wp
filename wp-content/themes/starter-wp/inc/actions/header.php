<?php
/**
 * Set up the WordPress core custom header feature.
 *
 * @uses starter_wp_header_style()
 */
function starter_wp_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'starter_wp_custom_header_args', array(
		'default-image'          => get_template_directory_uri() . '/assets/images/header.jpeg',
		'default-text-color'     => '000000',
		'width'                  => 1440,
		'height'                 => 700,
		'flex-height'            => true,
		'video'					 => true,
		'video-active-callback'  => '',
		'wp-head-callback'       => 'starter_wp_header_style',
		'admin-head-callback'    => 'starter_wp_admin_header_style',
		'admin-preview-callback' => 'starter_wp_admin_header_image',
	) ) );
}
add_action( 'after_setup_theme', 'starter_wp_custom_header_setup' );

register_default_headers( array(
    'default-image' => array(
        'url'           => get_stylesheet_directory_uri() . '/assets/images/header.jpeg',
        'thumbnail_url' => get_stylesheet_directory_uri() . '/assets/images/header.jpeg',
        'description'   => __( 'Default Header Image', 'starter-wp' )
    ),
) );

/**
 * Video header settings
 */
function starter_wp_video_settings( $settings ) {
	$settings['minWidth'] 		= '100';
	$settings['minHeight'] 		= '100';	
	
	return $settings;
}
add_filter( 'header_video_settings', 'starter_wp_video_settings' );

if ( ! function_exists( 'starter_wp_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog.
 *
 * @see starter_wp_custom_header_setup().
 */
function starter_wp_header_style() {
	$header_text_color = get_header_textcolor();

	/*
	 * If no custom options for text are set, let's bail.
	 * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: add_theme_support( 'custom-header' ).
	 */
	if ( get_theme_support( 'custom-header', 'default-text-color' ) === $header_text_color ) {
		return;
	}

	// If we get this far, we have custom styles. Let's do this.
	?>
	<style type="text/css">
	<?php
		// Has the text been hidden?
		if ( ! display_header_text() ) :
	?>
		.site-title,
		.site-description {
			position: absolute;
			clip: rect(1px, 1px, 1px, 1px);
		}
	<?php
		// If the user has set a custom color for the text use that.
		else :
	?>
		.site-title a,
		.site-description {
			color: #<?php echo esc_attr( $header_text_color ); ?>;
		}
	<?php endif; ?>
	</style>
	<?php
}
endif;
/*------------------------------------------------------------------------------------*
 * Header image filter
 *------------------------------------------------------------------------------------*/
add_filter('starter_wp_header_image_filter', 'starter_wp_header_image' );
function starter_wp_header_image() {
    if ( has_header_image() && is_home() && !has_header_video() || has_header_image() && is_front_page() && !has_header_video() ) {
        echo 'style="background-image:url( '. get_header_image().');"';
    }
    if ( has_header_video() && is_home() || has_header_video() && is_front_page()  ) {
        echo 'data-vide-bg="mp4:' . get_header_video_url() . ',  poster:' . get_header_image() . '" data-vide-options="loop: true, muted: true, position: 0% 0%, posterType: jpeg"';
    }
}

function starter_wp_header() {
	$site_header_wrap_classes = apply_filters( 'starter_wp_header_site_header_wrap_classes', array( 'site-header-wrap', 'col-container' ) );
	?>

    <?php do_action( 'starter_wp_masthead_before' ); ?>

    <header id="masthead" class="<?php echo starter_wp_header_classes(); ?>" <?php apply_filters('starter_wp_header_image_filter', 'starter_wp_header_image' ); ?> role="banner">

        <?php do_action( 'starter_wp_masthead_start' ); ?>

        <div class="site-header-main">
            <div class="<?php echo implode( ' ', array_filter( $site_header_wrap_classes ) ); ?>">
                <?php do_action( 'starter_wp_site_header_main' ); ?>
            </div>
        </div>

        <?php do_action( 'starter_wp_masthead_end' ); ?>

    </header>

    <?php do_action( 'starter_wp_masthead_after' ); ?>

    <?php
}
add_action( 'starter_wp_header', 'starter_wp_header' );

/**
 * Load the skip link
 *
 * @since 1.0.0
 */
function starter_wp_skip_link() {
	?>
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'starter-wp' ); ?></a>
	<?php
}
add_action( 'starter_wp_masthead_before', 'starter_wp_skip_link' );

/**
 * Load the menu toggle
 *
 * @since 1.0.0
 */
function starter_wp_menu_toggle() {

    if ( ! ( has_nav_menu( 'primary' ) ) ) {
        return;
    }

    ?>
    <div id="menu-toggle-wrap">
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
            <?php esc_html_e( 'Menu', 'starter-wp' ); ?>
        </button>
    </div>
    <?php
}

/**
 * Load our site logo
 *
 * @since 1.0.0
 */
function starter_wp_custom_logo() {
	
	if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}

}
function starter_wp_site_branding() {
?>

	<div class="<?php echo implode( ' ', array_filter( apply_filters( 'starter_wp_site_branding_classes', array( 'site-branding', 'col-half' ) ) ) ); ?>">
        <?php 
            starter_wp_custom_logo();
                                     
            if ( is_front_page() && is_home() ) :
        ?>
            <h1 class="site-title">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                    <span><?php bloginfo( 'name' ); ?></span>
                </a>
            </h1>
        <?php else : ?>
            <p class="site-title">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                    <span><?php bloginfo( 'name' ); ?></span>
                </a>
            </p>
        <?php endif; ?>

        <?php
        /**
         * Description
         */
        $description = get_bloginfo( 'description', 'display' );
        if ( $description || is_customize_preview() ) : ?>
            <p class="site-description"><?php echo $description; ?></p>
        <?php endif; ?>
    </div>

	<?php
}
add_action( 'starter_wp_site_header_main', 'starter_wp_site_branding' );

/**
 * Loads the site navigation onto the starter_wp_masthead action hook
 *
 * @since 1.0.0
 */
function starter_wp_primary_menu() {
	?>

    <?php if ( has_nav_menu( 'primary' ) ) : ?>


		<div id="site-header-menu" class="<?php echo implode( ' ', array_filter( apply_filters( 'starter_wp_site_main_menu_classes', array( 'site-header-menu', 'col-half' ) ) ) ); ?>">
		          <?php do_action( 'starter_wp_primary_menu_start' ); ?>

        <nav id="site-navigation" class="main-navigation">
			<?php
                starter_wp_menu_toggle();
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'menu_id'        => 'primary-menu',
				) );
			?>
		</nav><!-- #site-navigation -->
                <?php do_action( 'starter_wp_primary_menu_end' ); ?>
	    </div>

    <?php endif; ?>

	<?php
}
add_action( 'starter_wp_site_header_main', 'starter_wp_primary_menu' );
/*-----------------------------------------------------------------
 * TOP HEADER
-----------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_top_header' ) ) :        
    function starter_wp_top_header() {
        if ( get_theme_mod( 'top_header_enable', '1' ) )  : ?>

        <div class="top-header">
            <div class="col-container">
                <?php
        
                    do_action( 'starter_wp_top_header_start' );
        
                    starter_wp_header_menu();
                    
                    echo '<div class="text col-half">' . do_shortcode( get_theme_mod( 'top_header_text', 'Build your awesome website' ) ). '</div>';
             
                    if (get_theme_mod('social_header_enable', '1')) {
                        starter_wp_social();
                    }
        
                    do_action( 'starter_wp_top_header_end' );

                ?>
            </div>
        </div>

    <?php 
            endif;
    }
add_action('starter_wp_masthead_start', 'starter_wp_top_header');  
endif;
/*-----------------------------------------------------------------
 * HEADER MENU
-----------------------------------------------------------------*/
function starter_wp_header_menu() {
    wp_nav_menu( array( 'theme_location' => 'secondary', 'menu_id' => 'menu-header', 'menu_class' => 'header-nav', 'depth'  => 1, 'link_after'  => '', 'fallback_cb' => false ) );
}
/*-----------------------------------------------------------------
 * HERO
-----------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_hero' ) ) :        
    function starter_wp_hero() {
        if ( is_home() && get_theme_mod( 'hero_enable', '1' ) || is_front_page() && get_theme_mod( 'hero_enable', '1' ) )  : ?>
        <div class="hero">
            <div class="col-container">
                <?php echo '<h2 class="title">' . get_theme_mod( 'hero_heading', 'Easy to use' ) . '</h2>' ?>
                <?php echo '<p class="text">' . get_theme_mod( 'hero_text', 'WordPress Theme' ) . '</p>' ?>
                <?php echo '<a class="button button-outline" href="'. esc_url(get_theme_mod( 'hero_button_link', 'www.iograficathemes.com' )) . '">' . get_theme_mod( 'hero_button_text', 'View Now' ) . '</a>' ?>
            </div>
        </div>

    <?php 
            endif;
    }
add_action('starter_wp_masthead_end', 'starter_wp_hero');  
endif; 
/*-----------------------------------------------------------------
 * Features
-----------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_features' ) ) :        
    function starter_wp_features() {
        if ( is_home() && get_theme_mod( 'features_enable', '1' ) || is_front_page() && get_theme_mod( 'features_enable', '1' ) )  : ?>

        <div class="features">
            <div class="col-container">
                <div class="<?php echo implode( ' ', array_filter( apply_filters( 'starter_wp_feature_classes', array( 'col-four' ) ) ) ); ?>">
                    <div class="feature one">
                        <?php if( get_theme_mod( 'feature_one_icon') != '' ) {
                           echo '<i class="' . esc_attr(get_theme_mod( 'feature_one_icon', '' )) . ' icons"></i>'; 
                         } ?>
                        <?php echo '<h3 class="title">' . get_theme_mod( 'feature_one_heading', 'Maecenas vel nulla' ) . '</h3>' ?>
                        <?php echo '<p class="text">' . get_theme_mod( 'feature_one_text', 'Lorem usce volutpat lectus justo, ut suscipit felis congue ut.' ) . '</p>' ?>
                    </div>
                    <div class="feature two">
                        <?php if( get_theme_mod( 'feature_two_icon') != '' ) {
                           echo '<i class="' . esc_attr(get_theme_mod( 'feature_two_icon', '' )) . ' icons"></i>'; 
                         } ?>
                        <?php echo '<h3 class="title">' . get_theme_mod( 'feature_two_heading', 'Maecenas vel nulla' ) . '</h3>' ?>
                        <?php echo '<p class="text">' . get_theme_mod( 'feature_two_text', 'Lorem usce volutpat lectus justo, ut suscipit felis congue ut.' ) . '</p>' ?>
                    </div>
                     <?php if( (get_theme_mod( 'feature_three_icon') != '')  ||  (get_theme_mod( 'feature_three_heading' )  != '' ) || (get_theme_mod( 'feature_three_text')  != '' ) ) : ?> 
                    <div class="feature three">
                        <?php if( get_theme_mod( 'feature_three_icon') != '' ) {
                           echo '<i class="' . esc_attr(get_theme_mod( 'feature_three_icon', '' )) . ' icons"></i>'; 
                         } ?>
                        <?php echo '<h3 class="title">' . get_theme_mod( 'feature_three_heading', 'Maecenas vel nulla' ) . '</h3>' ?>
                        <?php echo '<p class="text">' . get_theme_mod( 'feature_three_text', 'Lorem usce volutpat lectus justo, ut suscipit felis congue ut.' ) . '</p>' ?>
                    </div>
                    <?php endif;?>
                    <?php if( (get_theme_mod( 'feature_four_icon') != '') || (get_theme_mod( 'feature_four_heading' )  != '' ) || (get_theme_mod( 'feature_four_text')  != '' ) ) : ?> 
                    <div class="feature four">
                        <?php if( get_theme_mod( 'feature_four_icon') != '' ) {
                           echo '<i class="' . esc_attr(get_theme_mod( 'feature_four_icon', '' )) . ' icons"></i>'; 
                         } ?>                    <?php echo '<h3 class="title">' . get_theme_mod( 'feature_four_heading', 'Maecenas vel nulla' ) . '</h3>' ?>
                        <?php echo '<p class="text">' . get_theme_mod( 'feature_four_text', 'Lorem usce volutpat lectus justo, ut suscipit felis congue ut.' ) . '</p>' ?>
                    </div>
                    <?php endif;?>
                </div>
            </div>
        </div>

    <?php 
            endif;
    }
add_action('starter_wp_masthead_after', 'starter_wp_features');  
endif; 