import "./style.scss";

interface PropsApi {
  id: number;
  key: number;
  name: string;
  description: string;
  price: number;
  offer: boolean;
}

export const Item = (item: PropsApi) => {
  const filterPrice = item.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const img = `/assets/images/${item.id}.png`;

  return (
    <li key={item.key} className="card-item">
      <div>
        {item.offer && <p className="tag">oferta</p>}
        <img src={img} alt={item.name} className="img" />
      </div>
      <h2 className="name">{item.name}</h2>
      <p className="description">{item.description}</p>
      <p className="price">{filterPrice}</p>
    </li>
  );
};
