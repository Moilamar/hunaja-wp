=== Host Header Injection Fix ===

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

Sets custom headers for email notifications. Fixes a security vulnerability in WordPress.



== Description ==

> Brand new plugin with all-new shiny code fresh from the WP API!

This plugin enables you to choose the "From", "Name", and "Return-Path" headers for all WP notification emails. In doing so, it fixes a long-standing security vulnerability.



== "Set it and forget it" security fix ==

This simple plugin does three things:

1. Sets custom From, Name, and Return-Path for WP notifications
2. Fixes a security vulnerability in sending WP notifications
3. Fixes a bug where invalid email addresses may be generated

Choose from the following options:

* Disable fix and let WordPress decide
* Use "Email Address" from WP General Settings
* Use a custom name and address

Plus there is an option to use the specified From address as the Return-Path header.



**Why?**

The security issue fixed by this plugin has been known about since way back in WordPress version 2.3. There has been some talk about fixing, but nothing has been implemented. While the issue does not affect all sites, it does affect a good percentage of them, including some of my own projects. So, not wanting to get hacked, I decided to write my own solution. Hopefully this issue gets fixed in a future version of WordPress, and this plugin will become unnecessary.

As a bonus, setting an explicit From address resolves a long-standing bug whereby an invalid email address is generated under the following conditions:

* A "From" address is not set, 
* And the `$_SERVER['SERVER_NAME']` is empty

So by explicitly setting a "From" address, we prevent this bug from happening.



**Security Issue**

What is the security issue addressed by this plugin? Follows is a quick summary. To learn more in-depth, check out the resources linked in the next section.

* WordPress uses `$_SERVER['SERVER_NAME']` to set the "From" header in email notifications
* This includes sensitive email notifications like password resets and user registration
* In some cases, an attacker could modify the "From" header and intercept the email
* Using the intercepted email, an attacker could gain access to your site and wreak havoc



**More Infos**

This security vulnerability is well-known and has been around for a looong time. To learn more, check out these articles:

* [WP Core Trac Ticket](https://core.trac.wordpress.org/ticket/25239)
* [WP Vulnerability Database](https://wpvulndb.com/vulnerabilities/8807)
* [Exploit Box Info](https://exploitbox.io/vuln/WordPress-Exploit-4-7-Unauth-Password-Reset-0day-CVE-2017-8295.html)
* [Even more infos](http://blog.dewhurstsecurity.com/2017/05/04/exploitbox-wordpress-security-advisories.html)



== Screenshots ==

1. Host Header Injection Fix: Default Plugin Settings

More screenshots available at the [HHIF Plugin Homepage](https://perishablepress.com/host-header-injection-fix/).



== Installation ==

**Installing HHIF**

1. Upload the plugin to your blog and activate
2. Visit the plugin settings to configure options

[More info on installing WP plugins](http://codex.wordpress.org/Managing_Plugins#Installing_Plugins)



**Uninstalling**

HHIF cleans up after itself. All plugin settings will be removed from your database when the plugin is uninstalled via the Plugins screen.



**Restore Default Options**

To restore default options, uninstall the plugin via the WP Plugins screen, and then reinstall.



== Upgrade Notice ==

To upgrade HHIF, remove the old version and replace with the new version. Or just click "Update" from the Plugins screen and let WordPress do it for you automatically.

__Note:__ uninstalling the plugin from the WP Plugins screen results in the removal of all settings from the WP database. 



== Frequently Asked Questions ==

**Does this work for WP Multisite?**

Yes, this plugin works great on Multisite.


**Does the plugin provide any hooks?**

Yes, there are numerous hooks available for advanced customization. Refer to the source code for details.


**Do you offer any other security plugins?**

Yes, check out [BBQ: Block Bad Queries](https://wordpress.org/plugins/block-bad-queries/) for super-fast WordPress firewall security, and [Blackhole for Bad Bots](https://wordpress.org/plugins/blackhole-bad-bots/) to protect your site against bad bots. I also have a [video course on WordPress security](https://m0n.co/securewp), for more plugin recommendations and lots of tips and tricks.


**Got a question?**

Send any questions or feedback via my [contact form](https://perishablepress.com/contact/)



== Support development of this plugin ==

I develop and maintain this free plugin with love for the WordPress community. To show support, you can [make a cash donation](https://m0n.co/donate), [bitcoin donation](https://m0n.co/bitcoin), or purchase one of my books:

* [The Tao of WordPress](https://wp-tao.com/)
* [Digging into WordPress](https://digwp.com/)
* [.htaccess made easy](https://htaccessbook.com/)
* [WordPress Themes In Depth](https://wp-tao.com/wordpress-themes-book/)

And/or purchase one of my premium WordPress plugins:

* [BBQ Pro](https://plugin-planet.com/bbq-pro/) - Pro version of Block Bad Queries
* [Blackhole Pro](https://plugin-planet.com/blackhole-pro/) - Pro version of Blackhole for Bad Bots
* [SES Pro](https://plugin-planet.com/ses-pro/) - Super-simple &amp; flexible email signup forms
* [USP Pro](https://plugin-planet.com/usp-pro/) - Pro version of User Submitted Posts

Links, tweets and likes also appreciated. Thank you! :)



== Changelog ==

**1.1 (2017/11/06)**

* Preps plugin and adds to WP Repo

**1.0 (2017/11/05)**

* Initial release
