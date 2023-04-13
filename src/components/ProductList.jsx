import { useContext } from "react";
import Product from "./Product"
import Context from "../Context";

const ProductList = () => {
    const { products } = useContext(Context);
    const prodsEl = products.map(prod =>
        <li key={ prod.id } className="productItem">
            {<Product product={ prod }/>}
        </li>);

    return (
        <>
            <h2>Product list</h2>
            <ul className="product-list">
                { prodsEl }
            </ul>
        </>
        
    )
}

export default ProductList;