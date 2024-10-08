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
            <a href="#"><h1><span>Online</span> Shopping</h1></a>
            {showBasket || <button className='basket_open' onClick={handleShowBasket}>Basket</button>}
            {showBasket && <Basket basketProducts={basketProducts} setBasketProducts={setBasketProducts} setShowBasket={setShowBasket}/>}
        </nav>
    )
}