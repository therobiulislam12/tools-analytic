<?php

/**
 * Admin Class
 */
class Admin {
    public function __construct() {

        // require class file
        require_once TATP_PATH . '/includes/Admin/class-tatp-admin-menu.php';

        // generate instance
        new TATP_Menu();
    }
}