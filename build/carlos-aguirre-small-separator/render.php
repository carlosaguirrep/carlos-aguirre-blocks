<?php 

$width = isset( $attributes['width'] ) ? $attributes['width'] : 50;
$color = isset( $attributes['color'] ) ? $attributes['color'] : '#000000';
$height = isset( $attributes['height'] ) ? $attributes['height'] : '2px';

?>

<div style="background-color: <?php echo esc_attr( $color ); ?>;height: <?php echo esc_attr( $height ); ?>;width: <?php echo esc_attr( $width ); ?>%;"></div>