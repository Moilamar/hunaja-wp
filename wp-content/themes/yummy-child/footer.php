<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Theme Palace
 * @subpackage Yummy
 * @since Yummy 0.1
 */

/**
 * yummy_content_end_action hook
 * @hooked yummy_content_end -  10
 *
 */
do_action( 'yummy_content_end_action' );

/**
 * yummy_footer_start hook
 *
 * @hooked yummy_footer_start -  10
 *
 */
do_action( 'yummy_footer_start' );

/**
 * yummy_footer hook
 *
 * @hooked yummy_footer_bottom_start - 11
 * @hooked yummy_footer_social_menu - 15
 * @hooked yummy_copyright -  20
 * @hooked yummy_footer_bottom_end - 25
 *
 */




 /* Custom footer */
 $link = "http://$_SERVER[HTTP_HOST]"."/hunajawp/wordpress/";
 ?>
 <footer id="colophon" class="site-footer col-1" role="contentinfo">
 <div class="bottom-footer page-section" style="background-image: url('<?php echo $link."wp-content/themes/yummy-child/assets/uploads/site-info.jpg"  ?>');">
 <div class="wrapper">
 <div class="social-links" style="margin-left:-25px;">
 <ul id="menu-footer" style="display:flex;list-style:none;width:100%;margin:0 auto;text-align:center;">
    <span style="display:table;margin:0px auto 0px auto;">
        <span id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48" >
            <a href="http://localhost/hunajawp/wordpress/ota-yhteytta/">
                <img style="width:70px;border-radius:35px;display:inline;" src="<?php echo $link."wp-content/themes/yummy-child/assets/uploads/mhh.png"  ?>" />
            </a>
        </span>
        <span id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
            <a href="">
                <img style="width:70px;border-radius:35px;display:inline;margin-left:25px;" src="<?php echo $link."wp-content/themes/yummy-child/assets/uploads/f.png"  ?>" />
            </a>
        </span>
        <span id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
            <a href="">
                <img style="width:70px;border-radius:35px;display:inline;margin-left:25px;" src="<?php echo $link."wp-content/themes/yummy-child/assets/uploads/index.png"  ?>" />
            </a>
        </span>
    </li>
</ul></div><div class="site-info"> 
 <span class="copyright">Copyright © 2017. All Rights Reserved</span> <span><a href="">Mesiäinen
 </a></span></div></div></div></footer>
<?php







/**
 * yummy_footer_end hook
 *
 * @hooked yummy_footer_end -  100
 * @hooked yummy_back_to_top -  110
 *
 */

do_action( 'yummy_footer_end' );
/**
 * yummy_page_end_action hook
 *
 * @hooked yummy_page_end -  10
 *
 */
do_action( 'yummy_page_end_action' ); 
?>

<?php wp_footer(); ?>

</body>
</html>
