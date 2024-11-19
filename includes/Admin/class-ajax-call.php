<?php

/**
 * Ajax Call
 *
 */

class Ajax {
    //plugin constructor
    public function __construct() {
        add_action( 'wp_ajax_tatp-posts-request', array( $this, 'tatp_dashboard_post_request' ) );
    }

    /**
     *
     * Admin post
     *
     * @return void
     */
    public function tatp_dashboard_post_request() {
        // Verify AJAX nonce
        check_ajax_referer('tatp-post-get', $_POST['security'], false);

        $all_tools = [];

        // Fetch posts of 'ai-tools' post type
        $posts = get_posts( [
            'post_type'      => 'ai-tools',
            'posts_per_page' => -1, 
            'orderby' => 'number',
            'order' => 'asc'
        ] );

        foreach ( $posts as $post ) {
            $all_tools[] = [
                'id'           => $post->ID,
                'title'        => get_the_title( $post->ID ),
                'total_clicks' => get_post_meta( $post->ID, '_tool_outbound_click', true ),
            ];
        }

        wp_send_json( ['success' => true, 'data' => $all_tools], 200 );
    }
}