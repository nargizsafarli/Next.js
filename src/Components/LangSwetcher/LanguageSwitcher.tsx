'use client';

import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const locales = ['az', 'en']; // dəstəklədiyin dillər

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
if(!pathname) return null
  // Hal-hazırda hansı dil olduğunu tap
  const currentLocale = pathname.split('/')[1]; // məsələn: /az/about → az

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {locales.map((locale) => {
        // Yeni URL yarat
        const newPath = '/' + locale + pathname.substring(currentLocale.length + 1);

        return (
          <Link key={locale} href={newPath}>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: currentLocale === locale ? 'black' : 'lightgray',
                color: currentLocale === locale ? 'white' : 'black',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {locale.toUpperCase()}
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
