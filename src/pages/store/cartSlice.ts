import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Cart, CartItem, CartBook } from '../types'

const initialState: Cart = {
  items: [],
  total: {
    amount: 0,
    currencyCode: '',
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems(state, action: PayloadAction<any>) {
      state.items = action.payload
    },
    addCartItem(state, action: PayloadAction<any>) {
      const LSstate = localStorage.getItem('persist:root')
      const parsedLSstate = LSstate ? JSON.parse(LSstate) : {}
      const curCart = JSON.parse(parsedLSstate.cart)
      const itemInCart = curCart.items.find(
        (item: CartItem) => item.id === action.payload.id
      )

      if (!itemInCart) {
        const item: CartItem = {
          id: action.payload.id,
          book: {
            imageUrl: action.payload.volumeInfo.imageLinks.thumbnail,
            authors: action.payload.volumeInfo.authors,
            title: action.payload.volumeInfo.title,
            averageRating: action.payload.volumeInfo.averageRating,
            ratingCount: action.payload.volumeInfo.ratingsCount,
            price: action.payload.saleInfo.listPrice
              ? action.payload.saleInfo.listPrice
              : 0,
          },
          qantity: 1,
          delivery: 'delivery',
        }
        curCart.items.push(item)
      } else {
        itemInCart.qantity++
      }
      const newCart = JSON.stringify(curCart)
      parsedLSstate.cart = newCart
      localStorage.setItem('persist:root', JSON.stringify(parsedLSstate))
    },
  },
})

export default cartSlice.reducer
