/**
 * Frontend view script for the Featured Post Card block.
 * Adds keyboard accessibility and interaction enhancements.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.addEventListener( 'DOMContentLoaded', () => {
	const blocks = document.querySelectorAll( '.wp-block-telex-block-telex-featured-post-card' );

	blocks.forEach( ( block ) => {
		const link = block.querySelector( '.wp-block-telex-block-telex-featured-post-card__link' );

		if ( ! link ) {
			return;
		}

		// Add focus-visible class for keyboard navigation styling.
		link.addEventListener( 'focus', () => {
			block.classList.add( 'is-focused' );
		} );

		link.addEventListener( 'blur', () => {
			block.classList.remove( 'is-focused' );
		} );
	} );
} );
