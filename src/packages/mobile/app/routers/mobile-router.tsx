import { Route, Routes } from "react-router-dom"
import { DeliveryMobile } from "../../pages/delivery-mobile/delivery-mobile"
import { ContactsMobile } from "../../pages/contacts-mobile/contacts-mobile"
import { ProductPageMobile } from "../../pages/product-page-mobile/product-page-mobile"
import { CartPage } from "src/pages/cart-page/cart-page"
import { Ordered } from "src/pages/ordered/ordered"
import { Main } from "src/pages/main/ui/main"
import { TopCategoryPage } from "src/pages/top-category-page/top-category-page"
import {
  candlesMaking,
  cosmeticsMaking,
  soapmaking,
  soapmaking2,
  soapmaking3,
} from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"
import React from "react"
import { CategoryPage } from "src/pages/category-page/category-page"
import { ShowAllResults } from "src/pages/show-all-results/show-all-results"
import { DeliveryInformation } from "src/packages/desktop/pages/information-pages/delivery-information/ui/delivery-information"

export const MobileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/soapmaking"
        element={
          <TopCategoryPage
            categoriesArray={[...soapmaking2, ...soapmaking, ...soapmaking3]}
          />
        }
      />
      <Route
        path="/cosmetics"
        element={<TopCategoryPage categoriesArray={cosmeticsMaking} />}
      />
      <Route
        path="/candlesmaking"
        element={<TopCategoryPage categoriesArray={candlesMaking} />}
      />
      <Route path="/delivery" element={<DeliveryInformation />} />
      <Route path="/contacts" element={<ContactsMobile />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/searchresults" element={<ShowAllResults />} />
      <Route path="/product/:id" element={<ProductPageMobile />} />
      <Route path="/ordered" element={<Ordered />} />
    </Routes>
  )
}
