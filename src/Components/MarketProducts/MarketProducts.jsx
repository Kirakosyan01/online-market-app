import "./MarketProducts.css";

export function MarketProducts({
  productsData,
  basketProducts,
  setBasketProducts,
}) {
  const handleAddBasketProduct = (Id) => {
    const productIndex = basketProducts.findIndex(
      (product) => product.id === Id
    );

    if (productIndex >= 0) {
      const updatedBasket = [...basketProducts];
      updatedBasket[productIndex].count += 1;
      setBasketProducts(updatedBasket);
    } else {
      const newProduct = productsData.find((product) => product.id === Id);
      setBasketProducts([...basketProducts, { ...newProduct, count: 1 }]);
    }
    console.log(productsData);
  };

  return (
    <div className="market__products">
      {productsData.map((product) => {
        return (
          <div key={product.id} className="market__product">
            <div>
              <p>{product.title}</p>
              <p>
                <span>Brand:</span> {product.brand}
              </p>
              <p>
                <span>Return Policy:</span> {product.returnPolicy}
              </p>
            </div>
            <img src={product.images[0]} alt={product.title} width={200} />
            <div>
              <p>
                <span>Category:</span> {product.category}
              </p>
              <p>
                <span>Price:</span> {product.price}$
              </p>
              <p>
                <span>Rating:</span> {product.rating}
              </p>
              <p></p>
            </div>
            <button onClick={() => handleAddBasketProduct(product.id)}>
              + Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
