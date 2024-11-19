<?php

/**
 * Admin Class
 */
class Admin {
    public function __construct() {

        // require class file
        require_once TATP_PATH . '/includes/Admin/class-tatp-admin-menu.php';
        require_once TATP_PATH . '/includes/Admin/class-ajax-call.php';

        // generate instance
        new TATP_Menu();
        new Ajax();
    }
}