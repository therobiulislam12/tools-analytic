<?php

/**
 * Plugin Name:       Tools Analytic
 * Description:       Get Out bound Link Summary
 * Plugin URI:        #
 * Version:           1.0.0
 * Author:            Robiul Islam
 * Author URI:        https://robiul.net/about
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path:       /languages
 * Text Domain:       tools-analytic
 */

// if direct access it
if ( !defined( 'ABSPATH' ) ) {
    exit( 'Do not do it again!' );
}

final class Tools_Analytic {

    /**
     * Plugin Version
     * @var string
     */
    const version = '1.0.0';

    /**
     * plugin init instance
     * @var bool
     */
    public static $_instance = null;

    /**
     * Plugin Main constructor
     */
    private function __construct() {

        // call constant
        $this->define_constants();

        // call require classes
        $this->require_classes();

        // after all plugins loaded
        add_action( 'plugins_loaded', array( $this, 'tatp_initialize_plugin' ) );
    }

    /**
     * After all plugins loaded call this method
     *
     * @return void
     */
    public function tatp_initialize_plugin() {

        // if admin class Admin() class
        if ( is_admin() ) {
            new Admin();
        }
    }

    /**
     * Get Plugin Instance
     *
     * @return bool
     * @since 1.0.0
     */
    public static function getInstance() {
        if ( !self::$_instance ) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    /**
     * declare all constant
     *
     * @return void
     */
    public function define_constants() {
        define( 'TATP_VERSION', self::version );
        define( 'TATP_FILE', __FILE__ );
        define( 'TATP_PATH', __DIR__ );
        define( 'TATP_URL', plugins_url( '', TATP_FILE ) );
        define( 'TATP_ASSETS', TATP_URL . '/assets' );
    }

    /**
     * Require all classes
     *
     * @return void
     */
    public function require_classes() {
        require_once TATP_PATH . '/includes/Admin.php';
        require_once TATP_PATH . '/includes/Frontend.php';
        require_once TATP_PATH . '/includes/functions.php';
    }

}

// Kick of the class
Tools_Analytic::getInstance();
