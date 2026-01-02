import dayjs from "dayjs";
const DeliveryDate = ({ selectDeliveryOption }) => {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
};
export default DeliveryDate;
