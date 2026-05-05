<?php

$number = isset( $attributes['number'] ) ? $attributes['number'] : '';
$label = isset( $attributes['label'] ) ? $attributes['label'] : '';

?>


<div <?php echo get_block_wrapper_attributes( array('class'=>'capblocks-circle-spinner')); ?>>
     <div class="capblocks-circle-spinner__score-circle">
        <div class="capblocks-circle-spinner__spinner"></div>

        <div class="capblocks-circle-spinner__content">
            <span class="capblocks-circle-spinner__number"><?= $number ?></span>
            <span class="capblocks-circle-spinner__label"><?= $label ?></span>
        </div>
    </div>
</div>
