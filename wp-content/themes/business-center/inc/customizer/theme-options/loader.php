<?php
/**
* Loader options
*
* @package business_center
* @since Business Center 1.0.0
*/

$wp_customize->add_section( 'business_center_loader', array(
	'title'               => esc_html__( 'Loader','business-center' ),
	'description'         => esc_html__( 'Loader section options.', 'business-center' ),
	'panel'               => 'business_center_theme_options_panel'
) );

// Loader enable setting and control.
$wp_customize->add_setting( 'business_center_theme_options[loader_enable]', array(
	'sanitize_callback'   => 'business_center_sanitize_checkbox',
	'default'             => $options['loader_enable']
) );

$wp_customize->add_control( 'business_center_theme_options[loader_enable]', array(
	'label'               => esc_html__( 'Enable loader', 'business-center' ),
	'section'             => 'business_center_loader',
	'type'                => 'checkbox',
) );

// Loader icons setting and control.
$wp_customize->add_setting( 'business_center_theme_options[loader_icon]', array(
	'sanitize_callback' => 'sanitize_text_field',
	'default'			=> $options['loader_icon'],
) );

$wp_customize->add_control( 'business_center_theme_options[loader_icon]', array(
	'label'           => esc_html__( 'Icon', 'business-center' ),
	'description'       => sprintf( esc_html__( 'Example fa-refresh see more at %1$s Font awesome %2$s.', 'business-center' ), '<a target="_blank" href="http://fontawesome.io/icons/">', '</a>' ),
	'section'         => 'business_center_loader',
	'active_callback' => 'business_center_is_loader_enable',
) );