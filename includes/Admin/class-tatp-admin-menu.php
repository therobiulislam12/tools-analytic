<?php 

/**
 * Menu class
 */
class TATP_Menu{

    /**
     * Menu constructor
     * @version 1.0.0
     */
    public function __construct(){
        
        // create admin menu
        add_action('admin_menu', array($this, 'tatp_admin_menu_page'));

    }

    /**
     * Create admin menu page
     * @return void
     */
    public function tatp_admin_menu_page(){
        
        $capability = 'manage_options';
        $parent_slug = 'tools_analytic';

        add_menu_page(
            __('Tools Analytic', 'tools-analytic'),
            __('Tools Analytic', 'tools-analytic'),
            $capability,
            $parent_slug,
            array($this, 'tatp_main_menu_content'),
            'dashicons-buddicons-replies',
            '25'
        );

        add_submenu_page(
            $parent_slug,
            __('All Tools Analytic', 'tools-analytic'),
            __('Analytics', 'tools-analytic'),
            $capability,
            $parent_slug,
            array($this, 'tatp_main_menu_content')
        );

        add_submenu_page(
            $parent_slug,
            __('Paid Tools', 'tools-analytic'),
            __('Paid Tools', 'tools-analytic'),
            $capability,
            'paid_tools_analytic',
            array($this, 'tatp_paid_tools_menu_content')
        );
    }

    /**
     * Main Menu page content
     * @return void
     */
    public function tatp_main_menu_content(){
        echo '<div class="wrap"><h1>Tools Analytic</h1></div>';
    }
    
    /**
     * Paid tools page analytic
     * @return void
     */
    public function tatp_paid_tools_menu_content(){
        echo '<div class="wrap"><h1>Paid Tools Analytic</h1></div>';
    }
}