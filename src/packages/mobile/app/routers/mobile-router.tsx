import { Route, Routes } from "react-router-dom"
import { MainPageMobile } from "../../pages/main-page-mobile"
import { Soapmaking } from "../../pages/soapmaking/soapmaking"
import { DeliveryMobile } from "../../pages/delivery-mobile/delivery-mobile"
import { ContactsMobile } from "../../pages/contacts-mobile/contacts-mobile"
import { CartMobile } from "../../pages/cart-mobile/cart-mobile"
import { CategoryPageMobile } from "../../pages/category-page/category-page"
import { ShowAllResultsMobile } from "../../pages/show-all-results/show-all-results-mobile"
import { SliderFirst } from "../../pages/slider-first/slider-first"
import { ProductPageMobile } from "../../pages/product-page-mobile/product-page-mobile"

export const MobileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageMobile />} />
      <Route path="/soapmaking" element={<Soapmaking />} />
      <Route path="/delivery" element={<DeliveryMobile />} />
      <Route path="/contacts" element={<ContactsMobile />} />
      <Route path="/cartmobile" element={<CartMobile />} />
      <Route path="/categorypage/:id" element={<CategoryPageMobile />} />
      <Route path="/showallresults" element={<ShowAllResultsMobile />} />
      <Route path="/slider/:id" element={<SliderFirst />} />
      <Route path="/product/:id" element={<ProductPageMobile id={123} />} />
    </Routes>
  )
}
