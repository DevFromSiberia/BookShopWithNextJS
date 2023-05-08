'use client'
import styles from './Categories.module.scss'
import { Categories } from './types'
export default function Categories({
  categories,
  active,
  setActiveCategory,
}: Categories) {
  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => (
        <li
          className={active === index ? styles.active : ''}
          id={index.toString()}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
