/**
 * Application configuration
 * Contains URLs and settings for external services
 */

export const config = {
  // App Store links (placeholders — update when apps are published)
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
