<?php
/*-----------------------------------------------------------------
 * Social
-----------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_social' ) ) {
    function starter_wp_social() { ?>
    <div class="social-url">
        <?php if ( get_theme_mod('social_facebook') ) {
            $facebook_url = esc_url(get_theme_mod('social_facebook', 'https://www.facebook.com/iograficathemes'));
            echo "<a href='$facebook_url' title='Facebook' target='_blank' class='facebook-icon'><span class='icon-social-facebook'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_twitter') ) {
            $twitter_url = esc_url(get_theme_mod('twitter_url', 'https://twitter.com/iograficathemes'));
            echo "<a href='$twitter_url' title='Twitter' target='_blank' class='twitter-icon'><span class='icon-social-twitter'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_google') ) {
            $google_url = esc_url(get_theme_mod('social_google', 'https://plus.google.com/+Iograficathemes'));
            echo "<a href='$google_url' title='Google Plus' target='_blank' class='google-icon'><span class='icon-social-google'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_pinterest') ) {
            $pinterest_url = esc_url(get_theme_mod('social_pinterest', ''));
            echo "<a href='$pinterest_url' title='Pinterest' target='_blank' class='pinterest-icon'><span class='icon-social-pinterest'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_tumblr') ) {
            $tumblr_url = esc_url(get_theme_mod('social_tumblr', ''));
            echo "<a href='$tumblr_url' title='Tumblr' target='_blank' class='tumblr-icon'><span class='icon-social-tumblr'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_instagram') ) {
            $instagram_url = esc_url(get_theme_mod('social_instagram', ''));
            echo "<a href='$instagram_url' title='Instagram' target='_blank' class='instagram-icon'><span class='icon-social-instagram'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_linkedin') ) {
            $linkedin_url = esc_url(get_theme_mod('linkedin_url', ''));
            echo "<a href='$linkedin_url' title='Linkedin' target='_blank' class='linkedin-icon'><span class='icon-social-linkedin'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_dribbble') ) {
            $dribbble_url = esc_url(get_theme_mod('social_dribbble', ''));
            echo "<a href='$dribbble_url' title='Dribble' target='_blank' class='dribble-icon'><span class='icon-social-dribbble'></span></a>";
        }?>
        <?php if ( get_theme_mod('social_youtube') ) {
            $youtube_url = esc_url(get_theme_mod('social_youtube', ''));
            echo "<a href='$youtube_url' title='Youtube' target='_blank' class='youtube-icon'><span class='icon-social-youtube'></span></a>";
        }?>
    </div><!-- .social url -->
     <?php }
}

