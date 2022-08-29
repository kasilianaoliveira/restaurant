import { useContext, useEffect, useState } from "react";
import { CategoriaContext } from "../../context/CategoriaContext";
import api from "../../services/api";
import { Item } from "../components/Item/Index";
import { Loading } from "../components/Loading/Index";
import "./style.scss";
interface PropsApi {
  id: number;
  name: string;
  description: string;
  price: number;
  offer: boolean;
}

interface ApiServiceItems extends Array<PropsApi> {}

export const Card = () => {
  const { selectedItem } = useContext(CategoriaContext);

  const [itemsList, setItemsList] = useState<ApiServiceItems>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/${selectedItem}`)
      .then(({ data }) => {
        setItemsList(data);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(true));
  }, [selectedItem]);

  return !isLoading ? (
    <div className="item-list">
      {itemsList?.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          offer={item.offer}
        />
      ))}
    </div>
  ) : (
    <Loading />
  );
};
