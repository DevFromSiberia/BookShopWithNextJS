'use client'
import styles from './Header.module.scss'

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
                <img src="./src/img/userIcon.png" alt="user" />
              </button>
            </li>
            <li>
              <button>
                <img src="./src/img/searchIcon.png" alt="search" />
              </button>
            </li>
            <li>
              <button className={styles.cartBtn}>
                <img src="./src/img/cartIcon.png" alt="cart" />
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
