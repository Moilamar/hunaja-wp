<?php
/*
Template Name: Redirect
*
* @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Theme Palace
 * @subpackage Yummy
 * @since Yummy 0.1/
 */
?>
<?php
$link = "http://$_SERVER[HTTP_HOST]"."/hunajawp/wordpress/";
header("Location: ".$link."mesiainen");
die(); 
get_header("header"); ?>

<div class="wrapper page-section">
    <!-- <div id="primary" class="content-area"> -->
        <!-- <main  class="site-main" role="main">
            <div id="main" class="main-archive-wrapper clear"> -->
                

                <div class="bigbox"></div>
                <div class="bigbox"></div>
                <div class="bigbox"></div>




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
