/** @type {import('next').NextConfig} */

import path from 'path'
import { fileURLToPath } from 'url';

const nextConfig = {
    sassOptions: {
        includePaths: [
            path.join(fileURLToPath(import.meta.url), 'styles')
        ]
    }
};

export default nextConfig;
