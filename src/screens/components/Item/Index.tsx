import { useContext, useState } from 'react';
import { CategoriaContext } from "../../../context/CategoriaContext";
import { ItemProps } from "../../../types/Item";
import "./style.scss";



export const Item = (item: ItemProps) => {
  const { handleAddToCart } = useContext(CategoriaContext);


  const filterPrice = item.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="card-item" onClick={() => handleAddToCart(item)}>
      <div className="container-offer">
        {item.offer && <p className="tag">oferta</p>}
        <img src={item.image} alt={item.name} className="img" />
      </div>
      <div className="content-information">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <p className="price">{filterPrice}</p>
      </div>
    </div>
  );
};
