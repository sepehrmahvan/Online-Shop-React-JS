import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items') || '[]')
// const logedInFromLocalStorage = JSON.parse(localStorage.getItem('logedIn') || false)

export function CartProvider({ children }) {
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [logedIn, setLogedIn] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  
  const addToCart = (id, pic, name, price) => {
    setItems((prevState) => [...prevState, { id, pic, name, price }]);
  };

  console.log(logedIn);
  
  function logedInHandler(){
    setLogedIn(() => true);
  }

  function logOut(){
    setLogedIn(() => false);
  }
  
  // useEffect(() => {
  //   localStorage.setItem('logedIn', JSON.stringify(logedIn));
  // }, [logedIn]);

  const deleteObject = (objId) => {
    const updatedArray = items.filter(obj => obj.id !== objId);

    setItems(updatedArray)
  }

  const sum = items.reduce((accumulator, currentValue) => {
    const numberValue = parseFloat(currentValue.price);
    return accumulator + numberValue;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, deleteObject, sum, logedInHandler, logOut }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
