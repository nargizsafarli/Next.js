'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import nav from './Navbar.module.css'
import LanguageSwitcher from '../LangSwetcher/LanguageSwitcher'
import { useTranslations } from 'use-intl'

function Navbar() {
  const pathname = usePathname()
  const currentPage = pathname?.split('/')[2] || ''
  const t=useTranslations("Home")

  return (
    <div className={nav.container}>
      {/* <div className={nav.text}>
        10% discount for registered users & free shipping for orders over $70 plus free returns
      </div> */}
      <div className={nav.text}> {t("inf")}</div>

      <div className={nav.item}>
        <div className={nav.link}>
          <Link
            href="/"
            className={`${nav.linkItem} ${currentPage === '' ? nav.active : ''}`}>
            {t("home")}
          </Link>
          <Link
            href="/products"
            className={`${nav.linkItem} ${currentPage === 'products' ? nav.active : ''}`}>
            {t("product")}
          </Link>
          <Link
            href="/about"
            className={`${nav.linkItem} ${currentPage === 'about' ? nav.active : ''}`}>
            {t("about")}
          </Link>
        </div>
        <img src="/assets/Dunker-logo-dark.png" className={nav.logo} />
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Navbar
