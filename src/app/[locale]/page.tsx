// src/app/[locale]/page.tsx
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import MainPage from '@/pages/MainPage';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div>
      <MainPage/>
    </div>
  );
}
