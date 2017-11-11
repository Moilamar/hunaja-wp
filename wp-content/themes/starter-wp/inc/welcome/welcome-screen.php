<?php
/**
 * Welcome Screen Class
 */
class starter_wp_Welcome {

    /**
     * Constructor
     * Sets up the welcome screen
     */
    public function __construct() {

        add_action( 'admin_menu', array( $this, 'starter_wp_welcome_register_menu' ) );
        add_action( 'load-themes.php', array( $this, 'starter_wp_activation_admin_notice' ) );
        add_action( 'starter_wp_welcome', array( $this, 'starter_wp_welcome_getting_started' ), 10 );
    } // end constructor

    /**
     * Adds an admin notice upon successful activation.
     */
    public function starter_wp_activation_admin_notice() {
        global $pagenow;

        if ( is_admin() && 'themes.php' == $pagenow && isset( $_GET['activated'] ) ) { // input var okay
            add_action( 'admin_notices', array( $this, 'starter_wp_welcome_admin_notice' ), 99 );
        }
    }

    /**
     * Display an admin notice linking to the welcome screen
     */
   public function starter_wp_welcome_admin_notice() {
        ?>
    <div class="updated notice is-dismissible">
        <p>
            <?php echo esc_html__( 'Thanks for choosing ', 'starter-wp' ). wp_get_theme()->get( 'Name' );
            echo sprintf( esc_html__('! You can read documentation to how get the most out of your new theme on the %swelcome screen%s.', 'starter-wp' ), '<a href="' . esc_url( admin_url( 'themes.php?page=starter-wp-welcome' ) ) . '">', '</a>' ); ?>
        </p>
        <p>
            <a href="<?php echo esc_url( admin_url( 'themes.php?page=starter-wp-welcome' ) ); ?>" class="button button-primary" style="text-decoration: none;">
                <?php echo sprintf( esc_html__( 'Get started with %s', 'starter-wp' ), wp_get_theme()->get( "Name" ) ); ?>
            </a>
        </p>
    </div>
        <?php
    }

    /**
     * Creates the dashboard page
     */
    public function starter_wp_welcome_register_menu() {
        add_theme_page( wp_get_theme()->get( 'Name' ), wp_get_theme()->get( 'Name' ), 'read', 'starter-wp-welcome', array( $this, 'starter_wp_welcome_screen' ) );
    }

    /**
     * The welcome screen
     */
    public function starter_wp_welcome_screen() {
        ?>
        <div class="wrap about-wrap">
            <?php do_action( 'starter_wp_welcome' ); ?>
        </div>
        <?php
    }

    //Welcome screen getting-started
    public function starter_wp_welcome_getting_started() {
        require_once( get_template_directory() . '/inc/welcome/sections/getting-started.php' );
    }


}

$GLOBALS['starter_wp_Welcome'] = new starter_wp_Welcome();
