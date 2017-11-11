<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Starter_WP
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
     <?php 
        starter_wp_post_thumbnail();
        if ( has_post_thumbnail() ) { 
               echo '<div class="entry-date"><span class="month">' . get_the_date('M') . '</span><span class="day">' . get_the_date('d') . '</span><span class="year">' . get_the_date('y') . '</span></div>';
            }
            
        the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
    ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
            the_excerpt();

            wp_link_pages( array(
                'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'starter-wp' ),
                'after'  => '</div>',
            ));
        ?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
