import { useContext } from "react";
import Context from "../Context";

const HeaderCart = () => {
    const { cart } = useContext(Context);

    return (
        <div className="cart">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="cart-prod-count">{ cart.length }</span>
        </div>
    )
}

export default HeaderCart;