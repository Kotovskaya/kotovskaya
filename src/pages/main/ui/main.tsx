import styles from "./main.module.css"
import { Slider } from "src/widgets/slider/ui/slider"
import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"
import { Helmet } from "react-helmet"
import { MainPageNavigation } from "src/widgets/main-page-navigation/main-page-navigation"
import { CategoryInfo } from "src/widgets/category-info/category-info"

export function Main() {
  const { data: newProducts = [] } = useQueryGetNewProducts()
  const { data: popularProducts = [] } = useQueryGetPopularProducts()

  return (
    <div className={styles.main}>
      <Helmet title={"Мыловарня Мадам Котовской"} />
      <Slider />
      <MainPageNavigation />
      <CategoryInfo categoryName={"Новинки"} productsArray={newProducts} />
      <CategoryInfo
        categoryName={"Популярное"}
        productsArray={popularProducts}
      />
    </div>
  )
}
