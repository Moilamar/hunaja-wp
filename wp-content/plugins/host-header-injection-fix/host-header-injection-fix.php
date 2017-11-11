<?php 
/*
	Plugin Name: Host Header Injection Fix
	Plugin URI: https://perishablepress.com/host-header-injection-fix/
	Description: Sets custom email headers and fixes a security vulnerability in sending WP email notifications.
	Tags: headers, injection, security, fix, patch, email, notification, password
	Author: Jeff Starr
	Author URI: https://plugin-planet.com/
	Donate link: https://m0n.co/donate
	Contributors: specialk
	Requires at least: 4.0
	Tested up to: 4.9
	Stable tag: 1.1
	Version: 1.1
	Requires PHP: 5.2
	Text Domain: host-header-injection-fix
	Domain Path: /languages
	License: GPL v2 or later
*/

/*
	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 
	2 of the License, or (at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	with this program. If not, visit: https://www.gnu.org/licenses/
	
	Copyright 2017 Monzilla Media. All rights reserved.
*/

if (!defined('ABSPATH')) die();

if (!class_exists('HostHeaderInjectionFix')) {
	
	class HostHeaderInjectionFix {
		
		function __construct() {
			
			$this->constants();
			
			add_action('admin_menu',            array($this, 'add_menu'));
			add_filter('admin_init',            array($this, 'add_settings'));
			add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
			add_filter('plugin_action_links',   array($this, 'action_links'), 10, 2);
			add_filter('plugin_row_meta',       array($this, 'plugin_links'), 10, 2);
			add_action('plugins_loaded',        array($this, 'load_i18n'));
			add_action('admin_init',            array($this, 'check_version'));
			
			add_filter('wp_mail_from',      array($this, 'wp_mail_from'));
			add_filter('wp_mail_from_name', array($this, 'wp_mail_name'));
			add_action('phpmailer_init',    array($this, 'wp_return_path'));
			
		} 
		
		function constants() {
			
			if (!defined('HHIF_VERSION')) define('HHIF_VERSION', '1.1');
			if (!defined('HHIF_REQUIRE')) define('HHIF_REQUIRE', '4.0');
			if (!defined('HHIF_AUTHOR'))  define('HHIF_AUTHOR',  'Jeff Starr');
			if (!defined('HHIF_NAME'))    define('HHIF_NAME',    __('Host Header Injection Fix', 'host-header-injection-fix'));
			if (!defined('HHIF_HOME'))    define('HHIF_HOME',    esc_url('https://perishablepress.com/host-header-injection-fix/'));
			if (!defined('HHIF_URL'))     define('HHIF_URL',     plugin_dir_url(__FILE__));
			if (!defined('HHIF_DIR'))     define('HHIF_DIR',     plugin_dir_path(__FILE__));
			if (!defined('HHIF_FILE'))    define('HHIF_FILE',    plugin_basename(__FILE__));
			if (!defined('HHIF_SLUG'))    define('HHIF_SLUG',    basename(dirname(__FILE__)));
			
		}
		
		function add_menu() {
			
			$title_page = esc_html__('HHIF', 'host-header-injection-fix');
			$title_menu = esc_html__('HHIF', 'host-header-injection-fix');
			
			add_options_page($title_page, $title_menu, 'manage_options', 'hhif', array($this, 'display_settings'));
			
		}
		
		function add_settings() {
			
			register_setting('hhif_options', 'hhif_options', array($this, 'validate_settings'));
			
			add_settings_section('general', esc_html__('Gonna fix it up..', 'host-header-injection-fix'), array($this, 'section_general'), 'hhif_options');
			
			add_settings_field('fix_type',  esc_html__('WP Notifications',   'host-header-injection-fix'), array($this, 'callback_radio'),    'hhif_options', 'general', array('id' => 'fix_type',  'label' => esc_html__('For the "From" address:', 'host-header-injection-fix')));
			add_settings_field('mail_from', esc_html__('Email From Address', 'host-header-injection-fix'), array($this, 'callback_email'),    'hhif_options', 'general', array('id' => 'mail_from', 'label' => esc_html__('From address for WP notifications', 'host-header-injection-fix')));
			add_settings_field('mail_name', esc_html__('Email From Name',    'host-header-injection-fix'), array($this, 'callback_text'),     'hhif_options', 'general', array('id' => 'mail_name', 'label' => esc_html__('Name for WP notifications', 'host-header-injection-fix')));
			add_settings_field('mail_path', esc_html__('Email Return Path',  'host-header-injection-fix'), array($this, 'callback_checkbox'), 'hhif_options', 'general', array('id' => 'mail_path', 'label' => esc_html__('Use From address for Return-Path (applies to all email sent from this site)', 'host-header-injection-fix')));
			
		}
		
		function action_links($links, $file) {
			
			if ($file === HHIF_FILE) {
				
				$hhif_links = '<a href="'. admin_url('options-general.php?page=hhif') .'">'. esc_html__('Settings', 'host-header-injection-fix') .'</a>';
				
				array_unshift($links, $hhif_links);
				
			}
			
			return $links;
			
		}
		
		function plugin_links($links, $file) {
			
			if ($file === HHIF_FILE) {
				
				$rate_href  = 'https://wordpress.org/support/plugin/'. HHIF_SLUG .'/reviews/?rate=5#new-post';
				$rate_title = esc_attr__('Click here to rate and review this plugin on WordPress.org', 'host-header-injection-fix');
				$rate_text  = esc_html__('Rate this plugin', 'host-header-injection-fix') .'&nbsp;&raquo;';
				
				$links[]    = '<a target="_blank" href="'. $rate_href .'" title="'. $rate_title .'">'. $rate_text .'</a>';
				
			}
			
			return $links;
			
		}
		
		function check_version() {
			
			$wp_version = get_bloginfo('version');
			
			if (isset($_GET['activate']) && $_GET['activate'] == 'true') {
				
				if (version_compare($wp_version, HHIF_REQUIRE, '<')) {
					
					if (is_plugin_active(HHIF_FILE)) {
						
						deactivate_plugins(HHIF_FILE);
						
						$msg  = '<strong>'. HHIF_NAME .'</strong> '. esc_html__('requires WordPress ', 'host-header-injection-fix') . HHIF_REQUIRE;
						$msg .= esc_html__(' or higher, and has been deactivated! ', 'host-header-injection-fix');
						$msg .= esc_html__('Please return to the', 'host-header-injection-fix') .' <a href="'. admin_url() .'">';
						$msg .= esc_html__('WP Admin Area', 'host-header-injection-fix') .'</a> '. esc_html__('to upgrade WordPress and try again.', 'host-header-injection-fix');
						
						wp_die($msg);
						
					}
					
				}
				
			}
			
		}
		
		function load_i18n() {
			
			load_plugin_textdomain('host-header-injection-fix', false, HHIF_DIR .'languages/');
			
		}
		
		function __clone() {
			
			_doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&rsquo; huh?', 'host-header-injection-fix'), HHIF_VERSION);
			
		}
		
		function __wakeup() {
			
			_doing_it_wrong(__FUNCTION__, esc_html__('Cheatin&rsquo; huh?', 'host-header-injection-fix'), HHIF_VERSION);
			
		}
		
		function default_options() {
			
			$options = array(
				
				'fix_type'  => 'default',
				'mail_from' => get_bloginfo('admin_email'),
				'mail_name' => get_bloginfo('name'),
				'mail_path' => false,
				
			);
			
			return apply_filters('hhif_default_options', $options);
			
		}
		
		function validate_settings($input) {
			
			$fix_type = $this->fix_type_options();
			
			if (!isset($input['fix_type'])) $input['fix_type'] = null;
			if (!array_key_exists($input['fix_type'], $fix_type)) $input['fix_type'] = null;
			
			if (isset($input['mail_from'])) $input['mail_from'] = sanitize_email($input['mail_from']);
			else $input['mail_from'] = null;
			
			if (isset($input['mail_name'])) $input['mail_name'] = esc_attr($input['mail_name']);
			else $input['mail_name'] = null;
			
			if (isset($input['mail_path'])) $input['mail_path'] = ($input['mail_path'] == 1) ? 1 : 0;
			else $input['mail_path'] = null;
			
			return $input;
			
		}
		
		function fix_type_options() {
			
			return array(
				
				'disable' => array(
					'value' => 'disable',
					'label' => esc_html__('Disable fix and let WordPress decide (insecure)', 'host-header-injection-fix'),
				),
				'default' => array(
					'value' => 'default',
					'label' => esc_html__('Use Email Address from General Settings (default)', 'host-header-injection-fix'),
				),
				'custom' => array(
					'value' => 'custom',
					'label' => esc_html__('Use custom address (toggle settings)', 'host-header-injection-fix'),
				)
			);
			
		}
		
		function section_general() {
			
			echo '<p>'. esc_html__('This plugin fixes a security vulnerability in WordPress. Learn more in the plugin documentation.', 'host-header-injection-fix') .'</p>';
			
		}
		
		function display_settings() {
			
			?>
			
			<div class="wrap">
				<h1><?php esc_html_e('Host Header Injection Fix', 'host-header-injection-fix'); ?></h1>
				<form method="post" action="options.php">
					
					<?php settings_fields('hhif_options'); ?>
					<?php do_settings_sections('hhif_options'); ?>
					<?php submit_button(); ?>
					
				</form>
			</div>
			
			<?php
			
		}
		
		function callback_radio($args) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$id    = isset($args['id'])    ? $args['id']    : '';
			$label = isset($args['label']) ? $args['label'] : '';
			
			$option = isset($options[$id]) ? $options[$id] : '';
			
			$options_array = array();
			
			if ($id === 'fix_type') $options_array = $this->fix_type_options();
			
			echo '<p>'. esc_html($label) .'</p>';
			echo '<ul>';
			
			foreach ($options_array as $key => $val) {
				
				$v = isset($val['value']) ? $val['value'] : '';
				$l = isset($val['label']) ? $val['label'] : '';
				
				$selected = checked($v, $option, false);
				
				echo '<li><label><input '. $selected .' type="radio" name="hhif_options['. esc_attr($id) .']" value="'. esc_attr($v) .'" /> '. esc_html($l) .'</label></li>';
				
			}
			
			echo '</ul>';
			
		}
		
		function callback_email($args) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$id    = isset($args['id'])    ? $args['id']    : '';
			$label = isset($args['label']) ? $args['label'] : '';
			
			$option = isset($options[$id]) ? $options[$id] : '';
			
			echo '<label><input name="hhif_options['. esc_attr($id) .']" type="email" class="regular-text" value="'. sanitize_email($option) .'"><br>'. esc_html($label) .'</label>';
			
		}
		
		function callback_text($args) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$id    = isset($args['id'])    ? $args['id']    : '';
			$label = isset($args['label']) ? $args['label'] : '';
			
			$option = isset($options[$id]) ? $options[$id] : '';
			
			echo '<label><input name="hhif_options['. esc_attr($id) .']" type="text" class="regular-text" value="'. esc_attr($option) .'"><br>'. esc_html($label) .'</label>';
			
		}
		
		function callback_checkbox($args) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$id    = isset($args['id'])    ? $args['id']    : '';
			$label = isset($args['label']) ? $args['label'] : '';
			
			$option = isset($options[$id]) ? $options[$id] : '';
			
			$checked = checked($option, 1, false);
			
			echo '<label><input '. $checked .' name="hhif_options['. esc_attr($id) .']" type="checkbox" value="1"> '. esc_html($label) .'</label>';
			
		}
		
		function admin_scripts($hook) {
			
			if ($hook === 'settings_page_hhif') {
				
				$src = plugins_url(basename(dirname(__FILE__))) . '/js/jquery.hiff.settings.js';
				
				wp_enqueue_script('hiff-settings', $src, array('jquery'), null, true);
				
			}
			
		}
		
		function wp_mail_from($email) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$fix = isset($options['fix_type']) ? $options['fix_type'] : 'default';
			
			$admin_email = get_bloginfo('admin_email');
			
			$admin_email = (!empty($admin_email)) ? $admin_email : $email;
			
			$custom_email = (isset($options['mail_from']) && !empty($options['mail_from'])) ? $options['mail_from'] : $admin_email;
			
			if ($fix === 'default') $email = $admin_email;
				
			elseif ($fix === 'custom') $email = $custom_email;
			
			return apply_filters('hhif_mail_from', $email);
			
		}
		
		function wp_mail_name($name) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$fix = isset($options['fix_type']) ? $options['fix_type'] : 'default';
			
			$name = (!empty($name)) ? $name : __('WordPress', 'host-header-injection-fix');
			
			$admin_name = get_bloginfo('name');
			
			$admin_name = (!empty($admin_name)) ? $admin_name : $name;
			
			$custom_name = (isset($options['mail_name']) && !empty($options['mail_name'])) ? $options['mail_name'] : $admin_name;
			
			if ($fix === 'default') $name = $admin_name;
				
			elseif ($fix === 'custom') $name = $custom_name;
			
			return apply_filters('hhif_mail_name', $name);
			
		}
		
		function wp_return_path($phpmailer) {
			
			$default = $this->default_options();
			
			$options = get_option('hhif_options', $default);
			
			$path = isset($options['mail_path']) ? $options['mail_path'] : 0;
			
			$email = sanitize_email($phpmailer->From);
			
			$from = $this->wp_mail_from($email);
			
			$from = apply_filters('hhif_mail_path', $from);
			
			if ($path) $phpmailer->Sender = $from;
			
		}
		
	}
	
	$host_header_injection_fix = new HostHeaderInjectionFix(); 
	
}
