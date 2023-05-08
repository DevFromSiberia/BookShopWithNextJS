'use client'
import styles from './Books.module.scss'
import Book from './Book'

export default function Books({ books }: any) {
  return (
    <ul className={styles.books}>
      {books.map((book: any, index: number) => (
        <Book
          key={index}
          imageUrl={book.volumeInfo.imageLinks.thumbnail}
          authors={book.volumeInfo.authors}
          title={book.volumeInfo.title}
          averageRating={book.volumeInfo.averageRating}
          ratingCount={book.volumeInfo.ratingsCount}
          description={book.volumeInfo.description}
          price={book.saleInfo.listPrice ? book.saleInfo.listPrice : ''}
        />
      ))}
    </ul>
  )
}
