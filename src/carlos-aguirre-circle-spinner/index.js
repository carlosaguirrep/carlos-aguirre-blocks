
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';


import './editor.scss';
import './style.scss';

registerBlockType('capblocks/carlos-aguirre-circle-spinner', {
    edit: Edit,
    save: () => null,
});
