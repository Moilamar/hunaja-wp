<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Starter_WP
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="<?php echo starter_wp_secondary_classes(); ?>">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
