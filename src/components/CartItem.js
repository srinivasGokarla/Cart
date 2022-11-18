import React from 'react'

const CartItem = ({product, changeQuantity,removeFromCart, el}) => {
    return (
        <div className="cart-item">
            <img src={product.url} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.title}</p>
                    <span className="cart-item-price">$ {product.price}</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                    <div>
                     <button className="quantity-btn" onClick={() => changeQuantity(product, '-')}>-</button>
                     <button className="quantity-btn" onClick={() => changeQuantity(product, '+')}>+</button>
                     <input type="submit" value="*" onClick={() => removeFromCart(el)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
