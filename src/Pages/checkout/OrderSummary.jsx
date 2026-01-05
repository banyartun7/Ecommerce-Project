import DeliveryOptions from "./DeliveryOptions";
import CartItemDetail from "./CartItemDetail";
import DeliveryDate from "./DeliveryDate";
import axios from "axios";

const OrderSummary = ({ deliveryOptions, cart, loadCart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectDeliveryOption={selectDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetail
                  cartItem={cartItem}
                  deleteCartItem={deleteCartItem}
                  loadCart={loadCart}
                />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderSummary;
