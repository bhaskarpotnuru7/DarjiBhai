import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  removeAllCartItems : () => {},
  updateIncrementQuantity: () => {},
  updateDecrementQuantity: () => {},
})

export default CartContext
