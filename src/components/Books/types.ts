type Price = {
  amount: number
  currencyCode: string
}

interface BookType {
  id: string
  imageUrl: string
  authors: string[]
  title: string
  averageRating: number
  ratingCount: number
  description: string
  price: Price
  buyNowHandler: Function
}

export type { BookType, Price }
