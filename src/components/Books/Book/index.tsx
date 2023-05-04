'use client'
import styles from './Book.module.scss'
import { Book } from '../types'
export default function Book({
  imageUrl,
  authors,
  title,
  averageRating,
  ratingCount,
  description,
  price,
}: Book) {
  return (
    <li className={styles.book}>
      <div
        style={{
          backgroundImage: `url(${
            imageUrl !== '' ? imageUrl : '/img/placeholderImg.png'
          })`,
        }}
        className={styles.cover}
      ></div>
      <div className={styles.descr}>
        <p className={styles.author}>{authors}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rate}>
          {averageRating}
          <span>{ratingCount}</span>
        </div>
        <p className={styles.text}>{description}</p>
        <div className={styles.price}>{price}</div>
        <button className={styles.buyBtn}>buy now</button>
      </div>
    </li>
  )
}
