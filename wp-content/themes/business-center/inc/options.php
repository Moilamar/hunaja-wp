<?php
/**
 * Business Center options
 *
 * @package business_center
 * @since Business Center 1.0.0
 */

/**
 * Header image options
 * @return array Header image options
 */
function business_center_header_image() {
  $business_center_header_image = array(
    'enable' => esc_html__( 'Enable( Featured Image )', 'business-center' ),
    '' => esc_html__( 'Default ( Customizer Header Image )', 'business-center' ),
    'disable'  => esc_html__( 'Disable', 'business-center' ),
  );

  $output = apply_filters( 'business_center_header_image', $business_center_header_image );

  return $output;
}

/**
 * Pagination
 * @return array site pagination options
 */
function business_center_pagination_options() {
  $business_center_pagination_options = array(
    'numeric'=> esc_html__( 'Numeric', 'business-center' ),
    'default'=> esc_html__( 'Default(Older/Newer)', 'business-center' ),
  );

  $output = apply_filters( 'business_center_pagination_options', $business_center_pagination_options );

  return $output;
}


/**
 * Slider
 * @return array slider options
 */
function business_center_enable_disable_options() {
  $business_center_enable_disable_options = array(
    'static-frontpage'  => esc_html__( 'Static Frontpage', 'business-center' ),
    'disabled'          => esc_html__( 'Disabled', 'business-center' ),
  );

  $output = apply_filters( 'business_center_enable_disable_options', $business_center_enable_disable_options );

  return $output;
}

/**
 * Default content type options
 * @return array Content type options
 */
function business_center_default_content_type_options() {
  $business_center_default_content_type_options = array(
    'page' => esc_html__( 'Pages', 'business-center' ),
  );

  $output = apply_filters( 'business_center_default_content_type_options', $business_center_default_content_type_options );

  return $output;
}

/**
 * Transition effects
 * @return array Transition effects
 */
function business_center_transition_effects_options() {
    $business_center_transition_effects_options = array(
    'fade'                                        => esc_html__( 'Fade', 'business-center' ),
    'cubic-bezier(0.250, 0.250, 0.750, 0.750)'    => esc_html__( 'Linear', 'business-center' ),
  );

  $output = apply_filters( 'business_center_transition_effects_options', $business_center_transition_effects_options );

  return $output;
}


/**
 * Feature content type options
 * @return array Content type options
 */
function business_center_feature_content_type_options() {
  $business_center_feature_content_type_options = array(
    'category' => esc_html__( 'Category', 'business-center' ),
  );

  $output = apply_filters( 'business_center_feature_content_type_options', $business_center_feature_content_type_options );

  return $output;
}

/**
 * Call To Action content type options
 * @return array Content type options
 */
function business_center_call_to_action_content_type_options() {
  $business_center_call_to_action_content_type_options = array(
    'post'   => esc_html__( 'Post', 'business-center' ),
  );

  $output = apply_filters( 'business_center_call_to_action_content_type_options', $business_center_call_to_action_content_type_options );

  return $output;
}

/**
 * Front Page Blog content type options
 * @return array Content type options
 */
function business_center_front_page_blog_content_type_options() {
  $business_center_front_page_blog_content_type_options = array(
    'category' => esc_html__( 'Category', 'business-center' ),
  );

  $output = apply_filters( 'business_center_front_page_blog_content_type_options', $business_center_front_page_blog_content_type_options );

  return $output;
}

/**
 * Team content type options
 * @return array Content type options
 */
function business_center_team_content_type_options() {
  $business_center_team_content_type_options = array(
    'category' => esc_html__( 'Category', 'business-center' ),
  );

  $output = apply_filters( 'business_center_team_content_type_options', $business_center_team_content_type_options );

  return $output;
}