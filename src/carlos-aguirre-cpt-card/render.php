<?php
/**
 * Server-side rendering for the Featured Post Card block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content.
 * @var WP_Block $block      Block instance.
 */

$post_id    = isset( $attributes['postId'] ) ? absint( $attributes['postId'] ) : 0;
$subtitle   = isset( $attributes['subtitle'] ) ? sanitize_text_field( $attributes['subtitle'] ) : '';

if ( ! $post_id ) {
	return;
}

$post_obj = get_post( $post_id );

if ( ! $post_obj || 'publish' !== $post_obj->post_status ) {
	return;
}

$title     = get_the_title( $post_obj );
$permalink = get_permalink( $post_obj );
$image_id  = get_post_thumbnail_id( $post_obj );
$image_url = '';
$image_alt = '';

if ( $image_id ) {
	$image_src = wp_get_attachment_image_src( $image_id, 'large' );
	if ( $image_src ) {
		$image_url = $image_src[0];
	}
	$image_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
}

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<a class="wp-block-capblocks-featured-post-card__link" href="<?php echo esc_url( $permalink ); ?>">
		<div class="wp-block-capblocks-featured-post-card__image-wrapper">
			<?php if ( $image_url ) : ?>
				<img
					class="wp-block-capblocks-featured-post-card__image"
					src="<?php echo esc_url( $image_url ); ?>"
					alt="<?php echo esc_attr( $image_alt ); ?>"
					loading="lazy"
				/>
			<?php else : ?>
				<div class="wp-block-capblocks-featured-post-card__image-placeholder">
					<span><?php esc_html_e( 'No featured image', 'capblocks-featured-post-card' ); ?></span>
				</div>
			<?php endif; ?>
		</div>
		<div class="wp-block-capblocks-featured-post-card__content">
			<div class="wp-block-capblocks-featured-post-card__text">
				<h3 class="wp-block-capblocks-featured-post-card__title"><?php echo esc_html( $title ); ?></h3>
				<?php if ( $subtitle ) : ?>
					<p class="wp-block-capblocks-featured-post-card__subtitle"><?php echo esc_html( $subtitle ); ?></p>
				<?php endif; ?>
			</div>
			<span class="wp-block-capblocks-featured-post-card__arrow" aria-hidden="true">&#8594;</span>
		</div>
	</a>
</div>
