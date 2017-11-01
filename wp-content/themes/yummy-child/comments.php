<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Theme Palace
 * @subpackage Yummy
 * @since Yummy 0.1
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}

// You can start editing here -- including this comment!
if ( have_comments() ) : ?>

<?php endif; // Check for have_comments().

/*
 * Removes default comment form 
 *
 * @since Yummy 0.1
 */

function yummy_remove_default_comment_form( $fields ) {

    unset( $fields['comment'] );
    $fields['comment'] = '<p class="comment-form-comment clear">
                <textarea name="comment" placeholder="' . esc_attr__( 'Your Message *','yummy' ) . '" id="comment"></textarea>
              </p>';
    
    return $fields;
}
add_filter( 'comment_form_fields', 'yummy_remove_default_comment_form' );

if ( ! function_exists( 'yummy_alter_comment_form_fields' ) ) {
	/**
	* Alter the comment form fields
	* @param  array Array of fields to be customized
	* @return array Array of customized fields
	*/
	function yummy_alter_comment_form_fields( $fields ) {
		$fields['author'] = '<p class="comment-form-author">
            <input id="author" name="author" type="text" value="" placeholder="'.esc_attr__( 'Full Name *', 'yummy' ) .'" size="30" maxlength="245" aria-required="true" required="required">
          </p>';
		$fields['email'] 	= '<p class="comment-form-email">
	        <input id="email" name="email" type="email" value="" placeholder="'.esc_attr__( 'Email *', 'yummy' ) .'" size="30" maxlength="100" aria-describedby="email-notes" aria-required="true" required="required">
	      </p>';
	    unset( $fields['url'] );
		return $fields;
	}
	add_filter('comment_form_default_fields','yummy_alter_comment_form_fields');
}

$args = array(
	'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title entry-title">',
	'title_reply_after' => '</h2>',
	);
comment_form( $args );