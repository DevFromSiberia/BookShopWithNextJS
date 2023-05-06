'use client'
import styles from './Book.module.scss'
import { Book } from '../types'
import formatAvRate from '@/utils/formatAvRate'
import formatDescr from '@/utils/formatDescr'
import formatAuthor from '@/utils/formatAuthor'
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
        <p className={styles.author}>{formatAuthor(authors)}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rate}>
          {formatAvRate(averageRating)}
          <span>{ratingCount} revies</span>
        </div>
        <p className={styles.text}>{formatDescr(description)}</p>
        <div className={styles.price}>
          {price.currencyCode === 'RUB' ? (
            <span>&#8381;</span>
          ) : (
            price.currencyCode
          )}{' '}
          {price.amount}
        </div>
        <button className={styles.buyBtn}>buy now</button>
      </div>
    </li>
  )
}
