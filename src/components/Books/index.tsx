'use client'
import styles from './Books.module.scss'
import Book from './Book'
export default function Books() {
  return (
    <ul className={styles.books}>
      <Book
        imageUrl={'https://via.placeholder.com/500'}
        authors={'Her Pupkin'}
        title={'Kavabanga'}
        averageRating={5}
        ratingCount={5}
        description={'as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd'}
        price={100}
      />
      <Book
        imageUrl={''}
        authors={'Her Pupkin'}
        title={'Kavabanga'}
        averageRating={5}
        ratingCount={5}
        description={'as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd'}
        price={100}
      />
    </ul>
  )
}
