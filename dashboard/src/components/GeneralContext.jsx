import React, {useState}from"react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid, mode, price) => {},
    closeBuyWindow: () => {}
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUid, setSelectedStockUid] = useState('');
    const [selectedOrderMode, setSelectedOrderMode] = useState('BUY');
    const [selectedStockPrice, setSelectedStockPrice] = useState(0);

    const handleOpenBuyWindow = (uid, mode = 'BUY', price = 0) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUid(uid);
        setSelectedOrderMode(mode);
        setSelectedStockPrice(price);
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUid('');
        setSelectedOrderMode('BUY');
        setSelectedStockPrice(0);
    }

    return(
        <GeneralContext.Provider value={{
            openBuyWindow: handleOpenBuyWindow,
            closeBuyWindow: handleCloseBuyWindow
        }}>
            {props.children}
            {isBuyWindowOpen && (
                <BuyActionWindow
                    uid={selectedStockUid}
                    mode={selectedOrderMode}
                    initialPrice={selectedStockPrice}
                />
            )}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;


