import { useCartStore } from "src/entities/cart/model/cart-store"
import { ProductDTO } from "src/shared/types/productDTO"
import { Button } from "src/shared/ui/button/button"
import { CSSProperties, useContext } from "react"
import { IsMobileContext } from "src/app/app"

type Props = {
  product: ProductDTO
}

const accumulatorCounterStylesMobile: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  fontSize: "20px",
  width: "33px",
}

const accumulatorCounterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  fontSize: "20px",
  width: "50px",
}

export const ProductAccumulatorControls = ({ product }: Props) => {
  const { setNewProduct, incrementById, decrementById, deleteProduct, cart } =
    useCartStore()

  const currentProductInCart = cart[product.id]
  const { isMobile } = useContext(IsMobileContext)
  if (product.quantity <= 0 || !product.quantity) {
    return (
      <Button width={isMobile ? "99px" : "135px"} disabled>
        Нет в наличии
      </Button>
    )
  }

  if (currentProductInCart?.accumulator === 0 || !currentProductInCart) {
    return (
      <Button
        width={isMobile ? "99px" : "130px"}
        height={isMobile ? "30px" : "40px"}
        onClick={() => {
          setNewProduct({
            accumulator: 1,
            id: product.id,
            quantity: product.quantity,
            imageLink: product.imageLink,
            name: product.name,
            price: product.salePrice || 0,
          })
        }}
      >
        В корзину
      </Button>
    )
  }
  return (
    <div className={isMobile ? "card__quantity__mobile" : "card__quantity"}>
      <Button
        width={isMobile ? "33px" : "40px"}
        height={isMobile ? "30px" : "40px"}
        onClick={() => {
          if (currentProductInCart?.accumulator === 1) {
            deleteProduct(currentProductInCart?.id)
          } else {
            decrementById(currentProductInCart?.id)
          }
        }}
      >
        -
      </Button>
      <div
        style={
          isMobile ? accumulatorCounterStylesMobile : accumulatorCounterStyles
        }
      >
        {currentProductInCart?.accumulator}
      </div>
      <Button
        width={isMobile ? "33px" : "40px"}
        height={isMobile ? "30px" : "40px"}
        onClick={() => {
          incrementById(currentProductInCart?.id)
        }}
        disabled={currentProductInCart?.accumulator === product.quantity}
      >
        +
      </Button>
    </div>
  )
}
