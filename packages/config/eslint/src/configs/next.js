import { compat, defineConfig } from '../utils.js';
import { react } from './react.js';

export const next = defineConfig(...react, ...compat.extends('next/core-web-vitals', 'next/typescript'));
