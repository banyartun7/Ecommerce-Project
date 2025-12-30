import DeliveryOptions from "./DeliveryOptions";
import CartItemDetail from "./CartItemDetail";
import DeliveryDate from "./DeliveryDate";

const OrderSummary = ({ deliveryOptions, cart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectDeliveryOption={selectDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetail cartItem={cartItem} />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderSummary;
