/**
 * Prefix a path with the base path if in production.
 * This is used for assets in the public/ folder.
 */
export const getAssetPath = (path: string) => {
    // basePath from next.config.mjs
    const basePath = '/canvas';

    if (typeof window === 'undefined') {
        // Basic prefixing for SSR/Build time
        if (path.startsWith('http')) return path;
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${basePath}${cleanPath}`;
    }

    // Client side: Only prefix if we're actually on GitHub Pages (hostname check)
    // or always if we want consistency.
    // Next.js static export usually needs the prefix for all assets.
    if (path.startsWith('http')) return path;
    if (path.startsWith(basePath)) return path;

    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};
