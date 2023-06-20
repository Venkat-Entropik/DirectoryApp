import {configureStore} from '@reduxjs/toolkit'
import addPersonSlice from './addPersonSlice'

export const mystore=configureStore({
    reducer:{
        addperson:addPersonSlice,
    }
})