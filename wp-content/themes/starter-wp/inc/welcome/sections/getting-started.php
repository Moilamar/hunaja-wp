<?php
/**
 * Welcome screen getting started template
 */
?>
<?php $theme_data = wp_get_theme(); ?>

<h1>
    <?php echo $theme_data->Name .' <sup style="font-size: 18px">' . esc_attr(  $theme_data->Version ) . '</sup>'; ?>
</h1>
<p class="about-text"><?php esc_html_e( 'Here you can read the documentation and know how to get the most out of your new theme.', 'starter-wp' ); ?></p>
<div class="three-col">  
     <div class="col">
        <h3><?php esc_html_e( 'Enjoying the theme?', 'starter-wp' ); ?></h3>
        <p class="about"><?php printf(esc_html__('If you like %s leave us a review on WordPress.org. We\'d really appreciate it!', 'starter-wp'), $theme_data->Name); ?></p>
        <p>
            <a href="<?php echo esc_url( 'https://wordpress.org/support/theme/starter-wp/reviews/#new-post' ); ?>" target="_blank" class="button button-secondary"><?php esc_html_e('Add Your Review', 'starter-wp'); ?></a>
        </p>
    </div>
    <div class="col">
        <h3><?php esc_html_e( 'Theme Documentation', 'starter-wp' ); ?></h3>
        <p class="about"><?php printf(esc_html__('Need any help to setup and configure %s? Please have a look at our documentation.', 'starter-wp'), $theme_data->Name); ?></p>
        <p>
            <a href="<?php echo esc_url( 'https://iograficathemes.com/documentation/')?>" target="_blank" class="button button-secondary"><?php esc_html_e('View Documentation', 'starter-wp'); ?></a>
        </p>
    </div>
    <div class="col">
        <h3><?php esc_html_e( 'Theme Customizer', 'starter-wp' ); ?></h3>
        <p class="about"><?php printf(esc_html__('%s supports the Theme Customizer for all theme settings.', 'starter-wp'), $theme_data->Name); ?></p>
        <p>
            <a href="<?php echo admin_url('customize.php'); ?>" class="button button-secondary"><?php esc_html_e('Start Customize', 'starter-wp'); ?></a>
        </p>
    </div>
 </div>
