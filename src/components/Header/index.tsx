'use client'
import styles from './Header.module.scss'
import userIcon from '../../../public/img/userIcon.png'
import cartIcon from '../../../public/img/cartIcon.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <a href="#">Bookshop</a>
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
              <button>
                <Image src={userIcon} alt="user" />
              </button>
            </li>
            <li>
              <button className={styles.cartBtn}>
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
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
