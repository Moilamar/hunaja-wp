<?php
/*
Template Name: No Banner
*/
global $post;
get_header();
if ( true === apply_filters( 'yummy_filter_frontpage_content_enable', true ) ) : 
?>
	<div class="wrapper page-section">
		<div id="primary" class="content-area">
			<main id="main" class="site-main front-page-posts" role="main">

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'page' );

					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- #primary -->
		<?php
		if ( yummy_is_sidebar_enable() ) {
			get_sidebar();
		} ?>
	</div><!-- .wrapper/.page-section-->
<?php endif;

get_footer();
