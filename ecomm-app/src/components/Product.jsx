import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams("id");
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err.message));
  }, [id]);

  return (
    <div className="product__container">
      {product ? (
        <ul className="product__info">
          <li className="product__category">{product.category}</li>
          <li className="product__title">{product.title}</li>
          <li className="product__image">
            <img src={product.image} alt={product.title} />
          </li>
          <li>
            <span className="rating product__rating">
              {product.rating?.rate} ({product.rating?.count})
            </span>
            <span className="price product__price">{product.price}</span>
          </li>
          <li className="product__description">{product.description}</li>
        </ul>
      ) : (
        <div className="loader">🙏🙏🙏Loading...</div>
      )}
    </div>
  );
}
