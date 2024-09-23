import './MarketProducts.css';

export function MarketProducts({ productsData, basketProducts, setBasketProducts}) {

    const handleAddBasketProduct = (Id) => {
        const productIndex = basketProducts.findIndex(product => product.id === Id);

        if (productIndex >= 0) {
            const updatedBasket = [...basketProducts];
            updatedBasket[productIndex].count += 1;
            setBasketProducts(updatedBasket);
        } else {      
            const newProduct = productsData.find((product) => product.id === Id);
            setBasketProducts([...basketProducts, {...newProduct, count: 1}])
        }
        
    }

    return (
        <div className='market__products'>
            {productsData.map((product => {
                return (
                    <div key={product.id} className='market__product'>
                        <p>{product.title}</p>
                        <img src={product.images[0]} alt={product.title} width={200} />
                        <div>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}$</p>
                        </div>
                        <button onClick={() => handleAddBasketProduct(product.id)}>+ Add</button>
                    </div>
                )
            }))}
        </div>
    )
}