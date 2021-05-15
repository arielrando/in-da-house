import React,{useState,useEffect} from 'react'

export const CartContext = React.createContext([]);

export const Carrito = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const addItemRapido = (col) => {
        if (isInCart(col)) {
            let data = [...cart];
            let index = data.findIndex(obj => obj.id === col);
            data[index].cantidad++;
            setCart(data);
        } else {
            setCart([...cart, { id: col, cantidad: 1 }]);
        }
    };

    const addItem = (col,cant) => {
        if (isInCart(col)) {
            let data = [...cart];
            let index = data.findIndex(obj => obj.id === col);
            data[index].cantidad+=cant;
            setCart(data);
        } else {
            setCart([...cart, { id: col, cantidad: cant }]);
        }
    };

    const removeItemRapido = (col) => {
        if (isInCart(col)) {
            let data = [...cart];
            let index = data.findIndex(obj => obj.id === col);
            if (data[index].cantidad > 1) {
                data[index].cantidad--;
            } else {
                data.splice(index, 1);
            }
            setCart(data);
        }
    };

    const removeItem = (col) => {
        if (isInCart(col)) {
            let data = [...cart];
            let index = data.findIndex(obj => obj.id === col);
            data.splice(index, 1);
            
            setCart(data);
        }
    };

    const isInCart = (col) => {
        return cart.some(item => col === item.id);
    };

    const clear = () => {
        setCart([]);
    };
  
    return (
      <CartContext.Provider value={{cart,addItem,addItemRapido,removeItem,removeItemRapido, clear,isInCart}}>
        {children}
      </ CartContext.Provider>
    )
  }

export default Carrito