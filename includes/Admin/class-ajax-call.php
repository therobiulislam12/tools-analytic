<?php

/**
 * Ajax Call
 *
 */

class Ajax {
    //plugin constructor
    public function __construct() {

        // pagination ajax call
        add_action( 'wp_ajax_tatp-posts-request', array( $this, 'tatp_dashboard_post_request' ) );

        // totals tools page
        add_action( 'wp_ajax_tatp-total-posts', array( $this, 'tatp_total_posts_request' ) );

        
    }

    /**
     *
     * Admin post
     *
     * @return void
     */
    public function tatp_dashboard_post_request() {
        // Verify AJAX nonce
        check_ajax_referer( 'tatp-post-get', $_POST['security'], false );

        $all_tools = [];

        $number = isset( $_POST['number'] ) ? intval( $_POST['number'] ) : 0;
        $offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;

        // Fetch posts of 'ai-tools' post type
        $posts = get_posts( [
            'post_type'      => 'ai-tools',
            'posts_per_page' => $number,
            'orderby'        => 'date',
            'order'          => 'asc',
            'offset'         => $offset,
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
    

    /**
     * Total Post request
     * 
     * @return void
     */
    public function tatp_total_posts_request() {

        $total_tools = wp_count_posts('ai-tools')->publish;

        wp_send_json( ['success' => true, 'data' => $total_tools], 200 );
    }
}