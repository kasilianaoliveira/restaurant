import { useContext } from "react";
import { CategoriaContext } from "../../context/CategoriaContext";
import { CartItem } from "../components/CartItem";
import "./styles.scss";

export const Cart = () => {
  const { cartList } = useContext(CategoriaContext);

  const total = cartList.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  const filterPrice = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="cart">
      <h2 className="cart-title">Seu pedido</h2>
      {cartList.map((cart) => (
        cart.name !== '' && <CartItem
          key={Math.random()}
          id={cart.id}
          name={cart.name}
          description={cart.description}
          price={cart.price}
          offer={cart.offer}
          image={cart.image}
          quantity={cart.quantity}
        />
      ))}

      {total > 0 &&
        <>
          <p className="total-price">Total <span>{filterPrice}</span></p>
          <button className="final-pedido">Finalizar Pedido</button>
        </>
      }

    </div>
  )
}
