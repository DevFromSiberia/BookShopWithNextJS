import { StaticImageData } from 'next/image'
interface Book {
  imageUrl: string
  authors: string
  title: string
  averageRating: number
  ratingCount: number
  description: string
  price: number
}

export { Book }
