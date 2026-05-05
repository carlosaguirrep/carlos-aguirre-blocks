#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Args
const args = process.argv.slice(2);
const name = args[0];

if (!name) {
    console.log('❌ Debes indicar el nombre del bloque');
    process.exit(1);
}

// Defaults configurables
let prefix = 'capblocks';
let textdomain = 'carlos-aguirre-blocks';
let isDynamic = false;

// Flags
args.forEach(arg => {
    if (arg === '--dynamic') isDynamic = true;
    if (arg === '--static') isDynamic = false;

    if (arg.startsWith('--prefix=')) {
        prefix = arg.split('=')[1];
    }

    if (arg.startsWith('--textdomain=')) {
        textdomain = arg.split('=')[1];
    }
});

const blockName = `${prefix}/${name}`;
const blockDir = path.join(process.cwd(), 'src', name);

// Crear carpeta
if (!fs.existsSync(blockDir)) {
    fs.mkdirSync(blockDir, { recursive: true });
}

// ==============================
// FILES
// ==============================

const blockJson = {
    apiVersion: 3,
    name: blockName,
    title: name.replace(/-/g, ' ').toUpperCase(),
    category: 'widgets',
    icon: 'smiley',
    description: `Bloque ${name}`,
    supports: {
        html: false
    },
    textdomain: textdomain,
    editorScript: `file:./index.js`,
    editorStyle: `file:./editor.css`,
    style: `file:./style.css`
};

if (isDynamic) {
    blockJson.render = `file:./render.php`;
}

fs.writeFileSync(
    path.join(blockDir, 'block.json'),
    JSON.stringify(blockJson, null, 2)
);

// ==============================
// EDIT
// ==============================

const editJs = `
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <p>${name} (Editor)</p>
        </div>
    );
}
`;

fs.writeFileSync(path.join(blockDir, 'edit.js'), editJs);

// ==============================
// SAVE (solo estático)
// ==============================

if (!isDynamic) {
    const saveJs = `
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
    return (
        <div {...useBlockProps()}>
            <p>${name}</p>
        </div>
    );
}
`;
    fs.writeFileSync(path.join(blockDir, 'save.js'), saveJs);
}

// ==============================
// RENDER (solo dinámico)
// ==============================

if (isDynamic) {
    const renderPhp = `
<?php
function render_${name.replace(/-/g, '_')}($attributes, $content) {
    ob_start();
    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <p>${name} (PHP Render)</p>
    </div>
    <?php
    return ob_get_clean();
}
`;
    fs.writeFileSync(path.join(blockDir, 'render.php'), renderPhp);
}

// ==============================
// INDEX
// ==============================

const indexJs = `
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
${!isDynamic ? "import save from './save';" : ""}

import './editor.scss';
import './style.scss';

registerBlockType('${blockName}', {
    edit: Edit,
    ${!isDynamic ? "save: save," : "save: () => null,"}
});
`;

fs.writeFileSync(path.join(blockDir, 'index.js'), indexJs);

// ==============================
// STYLES
// ==============================

fs.writeFileSync(path.join(blockDir, 'editor.scss'), `.wp-block-${prefix}-${name} {}`);
fs.writeFileSync(path.join(blockDir, 'style.scss'), `.wp-block-${prefix}-${name} {}`);

console.log(`✅ Bloque "${blockName}" creado en src/${name}`);