<?php
if ( ! function_exists( 'starter_wp_footer_widgets' ) ) :
function starter_wp_footer_widgets() {
    if ( is_active_sidebar( 'footer-4' ) ) {
		$widget_columns = apply_filters( 'starter_wp_footer_widget_regions', 4 );
	} elseif ( is_active_sidebar( 'footer-3' ) ) {
		$widget_columns = apply_filters( 'starter_wp_footer_widget_regions', 3 );
	} elseif ( is_active_sidebar( 'footer-2' ) ) {
		$widget_columns = apply_filters( 'starter_wp_footer_widget_regions', 2 );
	} elseif ( is_active_sidebar( 'footer-1' ) ) {
		$widget_columns = apply_filters( 'starter_wp_footer_widget_regions', 1 );
	} else {
		$widget_columns = apply_filters( 'starter_wp_footer_widget_regions', 0 );
	}

	$classes = apply_filters( 'starter_wp_footer_widgets_classes', array( 'footer-widgets', 'columns-' . intval( $widget_columns ) ), $widget_columns );

	if ( $widget_columns > 0 ) : ?>

		<?php do_action( 'starter_wp_footer_widgets_before' ); ?>

		<?php if ( apply_filters( 'starter_wp_widgets_show', true ) ) : ?>
		<section class="<?php echo implode( ' ', $classes ); ?>">
			<div class="col-container">
			<?php do_action( 'starter_wp_footer_widgets_start' ); ?>

			<?php
			$i = 0;
			while ( $i < $widget_columns ) : $i++;

				if ( is_active_sidebar( 'footer-' . $i ) ) :
					$widget_column_classes = apply_filters( 'starter_wp_footer_widget_classes', array( starter_wp_footer_widget_column_classes( $widget_columns ), 'footer-widget', 'widget-column', 'footer-widget-' . intval( $i ) ) );
				?>
				<div class="<?php echo implode( ' ', array_filter( $widget_column_classes ) ); ?>">
					<?php dynamic_sidebar( 'footer-' . intval( $i ) ); ?>
				</div>
				<?php endif;
			endwhile; ?>

			<?php do_action( 'starter_wp_footer_widgets_end' ); ?>
			</div>
		</section>
		<?php endif; ?>

		<?php do_action( 'starter_wp_footer_widgets_after' ); ?>

	<?php endif;

}
endif;
add_action( 'starter_wp_footer', 'starter_wp_footer_widgets' );

function starter_wp_footer_widget_column_classes( $widget_columns ) {

	switch ( $widget_columns ) {
            
        case 4:
			$classes = 'col-four-cycle';
			break;

		case 3:
			$classes = 'col-three-cycle';
			break;

		case 2:
		case 1:
			$classes = 'col-two-cycle';
			break;

	}

	return apply_filters( 'starter_wp_footer_widget_column_classes', $classes, $widget_columns );

}
/*-----------------------------------------------------------------
 * FOOTER MENU
-----------------------------------------------------------------*/
function starter_wp_footer_menu() {
    wp_nav_menu( array( 'theme_location' => 'footer', 'menu_id' => 'menu-footer', 'menu_class' => 'footer-nav', 'depth'  => 1, 'link_after'  => ' / ', 'fallback_cb' => false ) );
    }
add_action( 'starter_wp_footer', 'starter_wp_footer_menu' );
/*-----------------------------------------------------------------
 * COPYRIGHT
-----------------------------------------------------------------*/
function starter_wp_copyright() {
    echo '<div class="credits">';
	echo apply_filters( 'starter_wp_copyright', '<p>' . sprintf( __( 'Theme Starter WP by <a href="https://www.iograficathemes.con" target="_blank">Iografica Themes</a> - Copyright &copy; %s %s', 'starter-wp' ), date( 'Y' ), get_bloginfo( 'name' ) ) . '</p>' );
    echo '</div>';
}
add_action( 'starter_wp_footer', 'starter_wp_copyright' );
/*-----------------------------------------------------------------
 * SOCIAL
-----------------------------------------------------------------*/
function starter_wp_footer_social() {
    if (get_theme_mod('social_footer_enable', '1')) {
        starter_wp_social();
    }
}
add_action( 'starter_wp_footer', 'starter_wp_footer_social' );
