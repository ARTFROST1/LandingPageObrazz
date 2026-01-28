/**
 * Application configuration
 * Contains URLs and settings for external services
 */

export const config = {
  // Rails Backend URLs (Dashboard / Личный кабинет)
  // Production: https://obrazz-rails.onrender.com
  // Local development: http://localhost:3000
  railsBackendUrl: import.meta.env.VITE_RAILS_BACKEND_URL || 'https://obrazz-rails.onrender.com',
  
  // Auth routes
  get loginUrl() {
    return `${this.railsBackendUrl}/login`;
  },
  
  get dashboardUrl() {
    return `${this.railsBackendUrl}/dashboard`;
  },
  
  // App Store links (placeholders - update when apps are published)
  appStoreUrl: '#',
  googlePlayUrl: '#',
  ruStoreUrl: '#',
  
  // Social links
  vkUrl: 'https://vk.com/obrazzapp',
  telegramUrl: 'https://t.me/MaykopTech',
  
  // Contact
  supportEmail: 'frostmoontech@gmail.com',
  developerSiteUrl: 'https://frostmoon-tech.vercel.app/',
} as const;

export type Config = typeof config;
