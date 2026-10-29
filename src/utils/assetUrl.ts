/**
 * Resolves static asset paths so they load reliably across all deployment environments
 * (local development, production builds, and subpath deployments).
 *
 * Automatically removes accidental `/public/` prefixes and applies Vite's base URL.
 */
export function getAssetUrl(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Strip leading '/public/' or 'public/'
  const cleaned = path.replace(/^\/?public\//, '').replace(/^\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${base}${cleaned}`;
}
