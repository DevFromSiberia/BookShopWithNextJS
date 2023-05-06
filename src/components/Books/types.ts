import { StaticImageData } from 'next/image'
type Price = {
  amount: number
  currencyCode: string
}

interface Book {
  imageUrl: string
  authors: string[]
  title: string
  averageRating: number
  ratingCount: number
  description: string
  price: Price
}

export { Book }
