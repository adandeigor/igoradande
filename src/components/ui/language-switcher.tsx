'use client'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { locales } from '@/i18n.config';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('theme');

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 text-sm font-montserrat text-gray-700 hover:text-primary transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Changer de langue"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
      </motion.button>
      
      <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                locale === loc ? 'text-primary font-semibold' : 'text-gray-700'
              }`}
            >
              {loc === 'fr' ? 'Français' : 'English'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
