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
 if ($pagename == "ota-yhteytta" || $pagename == "my-account" || $pagename == "checkout") {
    global $post;
    get_header("no-banner");
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
            if ( yummy_is_sidebar_enable() && $pagename != "yritys" ) {
                get_sidebar();
            } ?>
        </div><!-- .wrapper/.page-section-->
    <?php endif;
    
    get_footer();    
 }

 else if ($pagename == "harjoitustyodokumentaatio") {
    global $post;
    get_header(); 
    if ( true === apply_filters( 'yummy_filter_frontpage_content_enable', true ) ) : 
    ?>
        <div class="wrapper page-section">
            <div id="primary" class="content-area">
                <main id="main" class="site-main front-page-posts" role="main">
    
                    <?php
                    query_posts('category=Dokumentaatio&orderby=title&order=ASC');
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
