import { useContext } from "react";
import { CategoriaContext } from "../../context/CategoriaContext";
import { CartItem } from "../components/CartItem";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartList } = useContext(CategoriaContext);

  const total = cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const filterPrice = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const hasNoItem = total <= 0

  return (
    <div className="cart">
      <Link to='/' className="cart-go-back">←️ Voltar</Link>
      <h2 className="cart-title">Seu pedido ⭐️</h2>
      {hasNoItem && <p>Seu carrinho ainda está vazinho :(</p>}
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

      {!hasNoItem &&
        <>
          <p className="total-price">Total <span>{filterPrice}</span></p>
          <button className="final-pedido">Finalizar Pedido</button>
        </>
      }

    </div>
  )
}
