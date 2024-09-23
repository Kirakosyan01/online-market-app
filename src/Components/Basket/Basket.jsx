import './Basket.css';

export function Basket({ basketProducts, setBasketProducts, setShowBasket }){

    const handleCountPlus = (Id) => {
        const productIndex = basketProducts.findIndex(product => product.id === Id);
        const updatedBasket = [...basketProducts];
            updatedBasket[productIndex].count += 1;
            setBasketProducts(updatedBasket);
    }
    const handleShowBasket = () => {
        setShowBasket(false)
    }
    const handleCountMinus = (Id) => {
        const productIndex = basketProducts.findIndex(product => product.id === Id);
        const updatedBasket = [...basketProducts];
            updatedBasket[productIndex].count -= 1;
            if (updatedBasket[productIndex].count === 0) {
                updatedBasket.splice(productIndex, 1);
            }
            setBasketProducts(updatedBasket);
    }

    return(
        <div className='basket'>
            <button className='close_basket' onClick={handleShowBasket}>X</button>
            <div>
                {basketProducts.map((product) => {
                    return (
                        <div key={product.id} className='basket__product'>
                            <p>{product.title}</p>
                            {<img src={product.images[0]} alt={product.title} width={100} />}
                            <div>
                            <p>Price: {product.price}</p>
                            <div className='basket__product_count'>
                                <button onClick={() => handleCountMinus(product.id)}>-</button>
                                <p>{product.count}</p>
                                <button onClick={() => handleCountPlus(product.id)}>+</button>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}