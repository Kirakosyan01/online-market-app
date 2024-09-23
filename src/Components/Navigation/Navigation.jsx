import { useState } from 'react';
import { Basket } from '../Basket/Basket';
import './Navigation.css';

export function Navigation({ basketProducts, setBasketProducts }) {
    const [showBasket, setShowBasket] = useState(false);

    const handleShowBasket = () => {
        setShowBasket(true)
    }

    return (
        <nav className='navigation'>
            <h1><span>Online</span> Shopping</h1>
            {showBasket || <button onClick={handleShowBasket}>Basket</button>}
            {showBasket && <Basket basketProducts={basketProducts} setBasketProducts={setBasketProducts} setShowBasket={setShowBasket}/>}
        </nav>
    )
}