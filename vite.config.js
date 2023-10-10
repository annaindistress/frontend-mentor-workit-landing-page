import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ],
        },
    },
    base: '/frontend-mentor-workit-landing-page/',
    root: 'src',
});
