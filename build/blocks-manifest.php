<?php
// This file is generated. Do not modify it manually.
return array(
	'carlos-aguirre-blocks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capblocks/carlos-aguirre-blocks',
		'version' => '0.1.0',
		'title' => 'card',
		'category' => 'theme',
		'icon' => 'category',
		'description' => 'Card with Icon Title and Text and Link Optional',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Diseño UI/UX'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Interfaces intuitivas centradas en el usuario que elevan el valor percibido de tu marca y mejoran la retención.'
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'faStar'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'carlos-aguirre-bubble-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'telex/block-telex-text-bubble',
		'version' => '0.1.0',
		'title' => 'Text Bubble Block',
		'category' => 'text',
		'icon' => 'format-status',
		'description' => 'A customizable inline text bubble block with adjustable border radius, font size, background color, and text color.',
		'example' => array(
			'attributes' => array(
				'content' => 'Hello, I\'m a bubble!',
				'borderRadius' => 20,
				'fontSize' => 16,
				'backgroundColor' => '#6c5ce7',
				'textColor' => '#ffffff'
			)
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => 'Text bubble'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#6c5ce7'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			)
		),
		'textdomain' => 'telex-text-bubble',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'carlos-aguirre-circle-spinner' => array(
		'apiVersion' => 3,
		'name' => 'capblocks/carlos-aguirre-circle-spinner',
		'title' => 'circle spinner',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Bloque carlos-aguirre-circle-spinner',
		'attributes' => array(
			'number' => array(
				'type' => 'number',
				'default' => 100
			),
			'label' => array(
				'type' => 'string',
				'default' => 'PAGESPEED SCORE'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'carlos-aguirre-cpt-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capblocks/featured-post-card',
		'version' => '0.1.0',
		'title' => 'Featured Post Card Block',
		'category' => 'media',
		'icon' => 'format-image',
		'description' => 'A featured post card that displays a large image, title, subtitle, and link from any post type.',
		'example' => array(
			'attributes' => array(
				'subtitle' => 'UI/UX & WEBAPP',
				'postTitle' => 'Nexus Platform',
				'imageUrl' => ''
			)
		),
		'attributes' => array(
			'postId' => array(
				'type' => 'number',
				'default' => 0
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'postTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'postLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'carlos-aguirre-list-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capblocks/list-item',
		'version' => '0.1.0',
		'title' => 'List Item Block',
		'category' => 'media',
		'icon' => 'editor-ul',
		'description' => 'A list item block for displaying content in a list format.',
		'example' => array(
			'attributes' => array(
				'content' => 'a list item'
			)
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => 'a list item'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'carlos-aguirre-modal-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capblocks/carlos-aguirre-blocks-modal-card',
		'version' => '0.1.0',
		'title' => 'Modal Card',
		'category' => 'theme',
		'icon' => 'category',
		'description' => 'Simple modal card block',
		'attributes' => array(
			'image' => array(
				'type' => 'string',
				'default' => 'https://via.placeholder.com/300x200'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Modal Card Title'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'This is a subtitle for the modal card.'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'This is the content of the modal card. You can add any information you want here.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Learn More'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => 'https://example.com'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'carlos-aguirre-small-separator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capblocks/carlos-aguirre-blocks-small-separator',
		'version' => '0.1.0',
		'title' => 'Separator Custom',
		'category' => 'theme',
		'icon' => 'category',
		'description' => 'Simple separator block',
		'attributes' => array(
			'width' => array(
				'type' => 'number',
				'default' => 100
			),
			'height' => array(
				'type' => 'string',
				'default' => '2px'
			),
			'color' => array(
				'type' => 'string',
				'default' => '#000000'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'carlos-aguirre-blocks',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	)
);
