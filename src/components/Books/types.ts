type Price = {
  amount: number
  currencyCode: string
}

interface BookType {
  imageUrl: string
  authors: string[]
  title: string
  averageRating: number
  ratingCount: number
  description: string
  price: Price
}

export { BookType }
