<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Theme Palace
 * @subpackage Yummy
 * @since Yummy 0.1
 */
 if ($pagename == "etusivu") {
    global $post;
    get_header(); ?>
        <div class="wrapper page-section">
            <div id="primary" class="content-area">
                <main  class="site-main" role="main">
                    <div id="main" class="main-archive-wrapper clear">
                        <?php
                        query_posts('post_type=hunaja-info');
                        if ( have_posts() ) :
                            
                            $index = 1;
    
                            /* Start the Loop */
                            while ( have_posts() ) : the_post();
                                
                                /*
                                 * @hooked yummy_blog_posts -  10
                                */
                                do_action( 'yummy_blog_posts_action', $index );
                                $index++;
                            
                            endwhile;
                        /* else :
    
                            get_template_part( 'template-parts/content', 'none' ); */
    
                        endif; ?>
                    </div>
                    <?php
                    /**
                    * Hook - yummy_action_pagination.
                    */
                    do_action( 'yummy_action_pagination' ); 
                    ?>
    
                </main><!-- #main -->
            </div><!-- #primary -->
        </div><!-- .wrapper/.page-section-->
    
    <?php
    get_footer();

 } 
 
 else if ($pagename == "ota-yhteytta") {
    global $post;
    get_header();
    if ( true === apply_filters( 'yummy_filter_frontpage_content_enable', true ) ) : 
    ?>
        <div class="wrapper page-section">
            <div id="primary" class="content-area">
                <main id="main" class="site-main front-page-posts" role="main">
    
                    <?php
                    while ( have_posts() ) : the_post();
    
                        get_template_part( 'template-parts/content', 'page' );
    
                        // If comments are open or we have at least one comment, load up the comment template.
                        if ( comments_open() || get_comments_number() ) :
                            comments_template();
                        endif;
    
                    endwhile; // End of the loop.
                    ?>
    
                </main><!-- #main -->
            </div><!-- #primary -->
            <?php
            if ( yummy_is_sidebar_enable() ) {
                get_sidebar();
            } ?>
        </div><!-- .wrapper/.page-section-->
    <?php endif;
    
    get_footer();    
 }


else {
    global $post;
    get_header(); 
    if ( true === apply_filters( 'yummy_filter_frontpage_content_enable', true ) ) : 
    ?>
        <div class="wrapper page-section">
            <div id="primary" class="content-area">
                <main id="main" class="site-main front-page-posts" role="main">
    
                    <?php
                    while ( have_posts() ) : the_post();
    
                        get_template_part( 'template-parts/content', 'page' );
    
                        // If comments are open or we have at least one comment, load up the comment template.
                        if ( comments_open() || get_comments_number() ) :
                            comments_template();
                        endif;
    
                    endwhile; // End of the loop.
                    ?>
    
                </main><!-- #main -->
            </div><!-- #primary -->
            <?php
            if ( yummy_is_sidebar_enable() ) {
                get_sidebar();
            } ?>
        </div><!-- .wrapper/.page-section-->
    <?php endif;
    
    get_footer();
    
}
