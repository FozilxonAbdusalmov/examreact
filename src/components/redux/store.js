import { configureStore } from '@reduxjs/toolkit'
import addToCart from './addtoCart'
import katalog from './katalog'
import addToHeart from './addtoHeart'

export const store = configureStore({
    reducer: {
        addToCart,
        katalog,
        addToHeart
    }
})
