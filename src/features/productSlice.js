import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    title: "product 1",
    price: "123"
  },
  reducers: {
    // update untuk mengupdate state nya, memiliki 2 parameter, state dan action
    update:(state, action) => {
      // payload: data yg dikirimkan ke actionnya
      state.title = action.payload.title
      state.price = action.payload.price
    }
  }
});

export const { update } = productSlice.actions;
export default productSlice.reducer;