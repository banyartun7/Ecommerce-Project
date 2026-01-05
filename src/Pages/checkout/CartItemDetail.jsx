import { useState } from "react";
import formatMoney from "../../utils/money";
import axios from "axios";

const CartItemDetail = ({ cartItem, deleteCartItem, loadCart }) => {
  const [textbox, setTextBox] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateCartItem = async () => {
    if (textbox) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity,
      });
      await loadCart();
      setTextBox(false);
    } else {
      setTextBox(true);
    }
  };

  const selectedQuantity = (event) => {
    const selectedValueInInputBox = Number(event.target.value);
    setQuantity(selectedValueInInputBox);
  };

  const updateQunatity = async (event) => {
    if (event.key === "Enter") {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity,
      });
      await loadCart();
      setTextBox(false);
    } else if (event.key === "Escape") {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: cartItem.quantity,
      });
      await loadCart();
      setTextBox(false);
    }
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            <input
              type="text"
              value={quantity}
              onKeyDown={updateQunatity}
              onChange={selectedQuantity}
              className={textbox ? "textbox" : "textbox-invisible"}
              style={{ width: "50px" }}
            />
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateCartItem}
          >
            Update
          </span>
          <span
            onClick={deleteCartItem}
            className="delete-quantity-link link-primary"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItemDetail;
