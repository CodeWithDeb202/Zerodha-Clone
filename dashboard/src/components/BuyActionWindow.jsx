import { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import GeneralContext from './GeneralContext';
import './BuyActionWindow.css';

import axios from 'axios';




function BuyActionWindow({uid, mode = 'BUY', initialPrice = 0}) {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(Number(initialPrice) || 0.0);

    const handleOrderClick = async () => {
        try {
            await axios.post('http://localhost:5000/newOrder', {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode,
            });

            closeBuyWindow();
        } catch (err) {
            console.log('Error placing order:', err);
        }

    }


    const { closeBuyWindow } = useContext(GeneralContext);

    const handleCancelClick = () =>{
        closeBuyWindow();
    }
  return (
    <div className='container' id='buy-window' draggable="true">
        <div className="regular-order">
            <div className="inputs">
                <fieldset>
                    <legend>Qty.</legend>
                    <input type="number" name='qty' id='qty' value={stockQuantity} onChange={(e) => setStockQuantity(parseInt(e.target.value))}/>
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input type="number" name='price' id='price' step={0.05} value={stockPrice} onChange={(e) => setStockPrice(parseFloat(e.target.value))}/>
                </fieldset>
            </div>
            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link
                        to={''}
                        className={mode === 'BUY' ? 'btn btn-blue' : 'btn btn-sell'}
                        onClick={handleOrderClick}
                    >
                        {mode === 'BUY' ? 'Buy' : 'Sell'}
                    </Link>
                    <Link to={''} className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BuyActionWindow;
