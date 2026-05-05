<?php
/**
 * Plugin Name:       card
 * Plugin URI:        carlosaguirre.mx
 * Description:       Card with Icon Title and Text and Link Optional
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Carlos Alberto Aguirre Pacheco
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       carlos-aguirre-blocks
 *
 * @package Capblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function capblocks_carlos_aguirre_blocks_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'capblocks_carlos_aguirre_blocks_block_init' );


/**
 * Registers a REST API endpoint to retrieve public post types.
 */
if ( ! function_exists( 'telex_featured_post_card_register_rest_routes' ) ) {
	function telex_featured_post_card_register_rest_routes(): void {
		register_rest_route(
			'telex-featured-post-card/v1',
			'/post-types',
			array(
				'methods'             => 'GET',
				'callback'            => 'telex_featured_post_card_get_post_types',
				'permission_callback' => function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}
}
add_action( 'rest_api_init', 'telex_featured_post_card_register_rest_routes' );

/**
 * Returns a list of public post types for the REST API.
 *
 * @return WP_REST_Response
 */
if ( ! function_exists( 'telex_featured_post_card_get_post_types' ) ) {
	function telex_featured_post_card_get_post_types(): WP_REST_Response {
		$post_types = get_post_types(
			array(
				'public' => true,
			),
			'objects'
		);

		$result = array();
		foreach ( $post_types as $post_type ) {
			if ( 'attachment' === $post_type->name ) {
				continue;
			}
			$result[] = array(
				'slug'  => $post_type->name,
				'label' => $post_type->labels->singular_name,
			);
		}

		return new WP_REST_Response( $result, 200 );
	}
}
