<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Starter_WP
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	
	 do_action( 'starter_wp_page_start' ); ?>

	<div class="entry-content">
      <?php 
        
            do_action( 'starter_wp_entry_content_start' );
        
			the_content();

            wp_link_pages( array(
                'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'starter-wp' ) . '</span>',
                'after'       => '</div>',
                'link_before' => '<span class="num">',
                'link_after'  => '</span>',
	        ) );
            
            do_action( 'starter_wp_entry_content_end' );

		?>
	</div><!-- .entry-content -->

    <?php
	
	 do_action( 'starter_wp_page_end' ); ?>
    
</article><!-- #post-<?php the_ID(); ?> -->
