import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'product1',
      description: 'Prod1 desc',
      price: 16.00
    },
    {
      id: 'p2',
      title: 'product2',
      description: 'Prod2 desc',
      price: 4.43
    },
    {
      id: 'p3',
      title: 'product3',
      description: 'Prod3 desc',
      price: 11.11
    },
  ],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer;