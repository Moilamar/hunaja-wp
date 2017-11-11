<?php
/**
 * Template part for displaying post
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Starter_WP
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	
	 do_action( 'starter_wp_article_start' ); ?>

	<div class="entry-content">
        <?php 
        
            do_action( 'starter_wp_entry_content_start' );

            the_content();

            wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'starter-wp' ),
				'after'  => '</div>',
			) );
        
            do_action( 'starter_wp_entry_content_end' );
		?>
	</div><!-- .entry-content -->

    <?php
	
	 do_action( 'starter_wp_article_end' ); ?>
    
</article><!-- #post-<?php the_ID(); ?> -->
