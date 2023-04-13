const Product = ({ product }) => {
    const {id, title, description, price, img} = product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={`/img/products/${img}`} alt="" />
            </div>
            <div className="product-info-block">
                <h3 className="product-title">{title}</h3>
                <p className="product-descr">{description}</p>
                <div className="product-price-block">
                    <span className="product-price">{price}</span>
                    <button className="product-add-cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Product;