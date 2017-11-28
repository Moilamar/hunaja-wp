<?php
/*
Template Name: Frontpage
*
* @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Theme Palace
 * @subpackage Yummy
 * @since Yummy 0.1/
 */
?>
<?php
/* header("Location: http://localhost/hunajawp/wordpress/shop");
die();  */ 
$link = "http://$_SERVER[HTTP_HOST]"."/hunajawp/wordpress/";
get_header(); ?>

<div class="wrapper page-section">
    <!-- <div id="primary" class="content-area"> -->
        <!-- <main  class="site-main" role="main">
            <div id="main" class="main-archive-wrapper clear"> -->
                
            <a href='<?php echo $link . "shop" ?>'><div class="bigbox" 
            style="background-image: url(<?php echo $link . 'wp-content/themes/yummy-child/assets/uploads/shop-banner.jpg' ?>);">
                <div class="bigbox-label-left">
                    <span>
                    <h2>Kodin hunajatuotteet</h2>
                    Tilaa hunajaa, karkkeja ja muita hunajatuotteita</span>
                </div>
            </div></a>
            <a href='<?php $link . "hunajasta" ?>'><div class="bigbox"
            style="background-image: url(<?php echo $link . 'wp-content/themes/yummy-child/assets/uploads/hunaja.jpg' ?>);">
                <div class="bigbox-label-right" style="float:right;">
                    <span>
                    <h2>Tietoa hunajasta</h2>    
                    Tutustu hunajan hyötyvaikutuksiin, valmistukseen ja muuhun.</span>
                </div>
            </div></a>
            <a href='<?php $link . "yritys" ?>'><div class="bigbox" 
            style="background-image: url(<?php echo $link . 'wp-content/themes/yummy-child/assets/uploads/honey-favors.001.jpg' ?>);
            background-size:'cover'">
                <div class="bigbox-label-full">
                    <span>
                    <h2>Suomalaista Hunajaa</h2>    
                    Tutustu yritykseemme</span>
                </div>
            </div></a>




                <?php
                /* query_posts('post_type=product');
                if ( have_posts() ) :
                    
                    $index = 1;

                    /* Start the Loop */
                    /* while ( have_posts() ) : the_post();
                        
                        /*
                         * @hooked yummy_blog_posts -  10
                        */
                        /* do_action( 'yummy_blog_posts_action', $index );
                        $index++;
                    
                    endwhile; */
                /* else :

                    get_template_part( 'template-parts/content', 'none' ); */

                /* endif; */ 
                ?>
            <!-- </div >-->
            <?php
            /**
            * Hook - yummy_action_pagination.
            */
            do_action( 'yummy_action_pagination' ); 
            ?>

       <!--  </main> -->
   <!--  </div> -->
</div><!-- .wrapper/.page-section-->

<?php
get_footer();
