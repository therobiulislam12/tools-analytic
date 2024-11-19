<?php

/**
 * Menu class
 */
class TATP_Menu {

    /**
     * Menu constructor
     * @version 1.0.0
     */
    public function __construct() {

        // create admin menu
        add_action( 'admin_menu', array( $this, 'tatp_admin_menu_page' ) );

        // add meta data on database
        add_action( 'wp_ajax_tatp_request', array( $this, 'tatp_ajax_get_posts' ) );

        // a
        add_action( 'admin_enqueue_scripts', array( $this, 'tatp_admin_enqueue_scripts' ) );

    }

    /**
     * Create admin menu page
     * @return void
     */
    public function tatp_admin_menu_page() {

        $capability = 'manage_options';
        $parent_slug = 'tools_analytic';

        add_menu_page(
            __( 'Tools Analytic', 'tools-analytic' ),
            __( 'Tools Analytic', 'tools-analytic' ),
            $capability,
            $parent_slug,
            array( $this, 'tatp_main_menu_content' ),
            'dashicons-buddicons-replies',
            '25'
        );

        add_submenu_page(
            $parent_slug,
            __( 'All Tools Analytic', 'tools-analytic' ),
            __( 'Analytics', 'tools-analytic' ),
            $capability,
            $parent_slug,
            array( $this, 'tatp_main_menu_content' )
        );

        add_submenu_page(
            $parent_slug,
            __( 'Paid Tools', 'tools-analytic' ),
            __( 'Paid Tools', 'tools-analytic' ),
            $capability,
            'admin.php?page=tools_analytic#/paid-tools-analytic',

        );
    }

    /**
     * Main Menu page content
     * @return void
     */
    public function tatp_main_menu_content() {
        printf(
            '<div class="wrap" id="tools-analytic-dashboard">%s</div>',
            esc_html__( 'Loading…', 'tools-analytic' )
        );
    }

    /**
     * Paid tools page analytic
     * @return void
     */
    public function tatp_paid_tools_menu_content() {
        echo '<div class="wrap"><h1>Paid Tools Analytic</h1></div>';
    }

    /**
     *
     * Ajax Posts and update meta data here
     *
     * @return never
     */
    public function tatp_ajax_get_posts() {
        check_ajax_referer( 'tatp-toolspedia-outbound', $_POST['security'], false );

        $post_slug = isset( $_POST['postUrl'] ) ? sanitize_text_field( $_POST['postUrl'] ) : '';

        $post = get_posts( array(
            'name'        => $post_slug,
            'post_type'   => 'ai-tools',
            'post_status' => 'publish',
        ) );

        $post_id = $post[0]->ID;

        $tool_outbound_click = get_post_meta( $post_id, '_tool_outbound_click', true );
        if ( !$tool_outbound_click ) {
            update_post_meta( $post_id, '_tool_outbound_click', 1 );
        }{
            update_post_meta( $post_id, '_tool_outbound_click', absint( $tool_outbound_click ) + 1 );
        }
        // error_log(print_r(['get_post' => $post_id], true), 0);

        exit();
    }

    public function tatp_admin_enqueue_scripts( $admin_page ) {

        if ( 'toplevel_page_tools_analytic' !== $admin_page ) {
            return;
        }

        $asset_file = TATP_PATH . '/build/index.asset.php';

        if ( ! file_exists( $asset_file ) ) {
            return;
        }

        $asset = include $asset_file;

        wp_enqueue_script(
            'tatp-admin-dashboard',
            TATP_URL . '/build/index.js',
            $asset['dependencies'],
            $asset['version'],
            array(
                'in_footer' => true,
            )
        );

        wp_enqueue_style(
            'tatp-admin-dashboard',
            TATP_URL . '/build/index.css'
        );
    }
}