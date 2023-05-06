'use client'
import styles from './Books.module.scss'
import Book from './Book'
export default function Books() {
  return (
    <ul className={styles.books}>
      <Book
        imageUrl={''}
        authors={['Her Pupkin_1']}
        title={'Kavabanga'}
        averageRating={3.7}
        ratingCount={10}
        description={
          'as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd as;ldfjas;jf  kasdjg; kl ads;gj  agjfjkhgd'
        }
        price={{ amount: 4356.24, currencyCode: 'RUB' }}
      />
    </ul>
  )
}