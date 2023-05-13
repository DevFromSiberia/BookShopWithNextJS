import { Price } from '@/components/Books/types'

interface CartBook {
  imageUrl: string
  authors: string[]
  title: string
  averageRating: number
  ratingCount: number
  price: Price
}

interface CartItem {
  id: string
  book: CartBook
  qantity: number
  delivery: string
}

interface Cart {
  items: CartItem[]
  total: {
    amount: number
    currencyCode: string
  }
}
export { Cart, CartItem, CartBook }
