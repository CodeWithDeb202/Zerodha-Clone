function RightImage({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 mt-4">
                    <h1 className="mt-5">{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-4">
                        <a  style={{textDecoration:"none"}} href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img style={{width:"80%"}} src={imageUrl} alt={productName} />
                </div>
                
            </div>
        </div>
    );
}

export default RightImage;