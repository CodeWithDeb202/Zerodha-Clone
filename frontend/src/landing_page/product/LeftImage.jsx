function LeftImage({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img style={{width:"80%"}} src={imageUrl} alt={productName} />
                </div>
                <div className="col-6 mt-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-4 mb-4">
                        <a style={{textDecoration:"none"}} href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a className="mx-5"  style={{textDecoration:"none"}} href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div>
                        <a className="leftImage_store_link" href={googlePlay}><img src="\media\images\googlePlayBadge.svg" alt="googlePlay" /></a>
                        <a className="mx-4 leftImage_store_link" href={appStore}><img src="\media\images\appstoreBadge.svg" alt="appStore" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;