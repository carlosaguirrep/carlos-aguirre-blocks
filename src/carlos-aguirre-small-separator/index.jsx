import metadata from "./block"

import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from "../carlos-aguirre-bubble-block/save";

registerBlockType( metadata.name, {
    edit: Edit,
    save,
} );