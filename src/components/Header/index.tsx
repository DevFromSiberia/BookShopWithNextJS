'use client'
import styles from './Header.module.scss'
import userIcon from '../../../public/img/userIcon.png'
import cartIcon from '../../../public/img/cartIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LoginForm from './LoginFrom'

export default function Header() {
  const [userFormActive, setLoginFormActive] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Bookshop</Link>
        </h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">books</a>
            </li>
            <li>
              <a href="#">audiobooks</a>
            </li>
            <li>
              <a href="#">stationery & gifts</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <ul>
            <li>
              <Image
                onClick={() => setLoginFormActive(!userFormActive)}
                src={userIcon}
                alt="user"
              />
              {userFormActive && <LoginForm />}
            </li>
            <li>
              <Link href="/cart" className={styles.cartBtn}>
                <Image src={cartIcon} alt="cart" />
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.5" cy="6.5" r="6.5" fill="#FF353A" />
                  <text id="cartCounter" y="10" x="3.25" fill="#ffffff">
                    0
                  </text>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
