import { useDeliveryPrice } from "src/pages/cart-page/lib/use-delivery-price"
import { useCreateOrder } from "src/pages/cart-page/lib/use-create-order"
import { useFormContext } from "react-hook-form"
import { OrderForm } from "src/features/create-order/model/order-form"
import { DeliveryWay } from "src/shared/types/productDTO"

export function CartOrderDetails() {
  const { deliveryPriceInfo, totalPrice } = useDeliveryPrice()
  // сохранение заказа
  const { createOrder, isPending } = useCreateOrder()

  const { watch } = useFormContext<OrderForm>()
  const deliveryWay = watch("deliveryWay")

  return (
    <div className="toorder__wrapper">
      <div className="toorder">
        <p className="fz__22">Итого</p>
        <div className="toorder__element">
          <div>Товары</div>
          <div>{totalPrice + "₽"}</div>
        </div>
        <div className="toorder__element">
          <div>Доставка</div>
          <div>{deliveryPriceInfo}</div>
        </div>
        {/* <div className="toorder__element">
          <div>К оплате</div>
          <div>{totalPrice + "₽"}</div>
        </div> */}
        <div>
          {deliveryWay === DeliveryWay.Self && (
            <div
              className="toorder__element"
              style={{ color: "gray", fontSize: "12px", paddingBottom: "10px" }}
            >
              Оплата производится при получении заказа
            </div>
          )}
          <div onClick={createOrder} className="order__button">
            {isPending ? "Заказ создается..." : "Оформить заказ"}
          </div>
        </div>
      </div>
    </div>
  )
}
