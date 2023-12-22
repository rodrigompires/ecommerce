import React from "react";

export const GlobalContext = React.createContext();



// eslint-disable-next-line react/prop-types
export const GlobalStorage = ( {children} ) => {

    const [deleteItem, setDeleteItem] = React.useState(false);

    const [cart, setCart] = React.useState(false)
    const [item, setItem] = React.useState(0);
    const itemPrice = '250.00';
    const discount = 0.50;
    

    function addItem () {
        setItem(item => item + 1);
    }

    function reduceItem () {
        setItem(item => item - 1);
        if (item <= 0) setItem(0);
    }

    function addCart () {
        if (item === 0) {
            return
        } else {
            setCart(true);

        }
    }

    function handleDeleteItem () {
        setDeleteItem(true);
        setItem(0);
        setCart(false);
      }



  return <GlobalContext.Provider value={{item, addItem, reduceItem, itemPrice, discount, addCart, cart, handleDeleteItem, deleteItem}}>{children}</GlobalContext.Provider>;
};
