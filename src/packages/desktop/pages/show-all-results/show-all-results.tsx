import "./show-all-results.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useSearchStore } from "src/packages/mobile/widgets/search-mobile/ui/search-mobile"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductCard } from "../../entities/product-card/product-card"
import { ProductsList } from "../../widgets/products-list/ui/products-list"

export function ShowAllResults() {
  const [productsSearchResultAll, setProductsSearchResultAll] = useState<
    ProductDTO[]
  >([])
  const { searchRequest, setWord } = useSearchStore()
  console.log(searchRequest)
  useEffect(() => {
    axios
      .post(`${API_URL}/products/search_for_products`, {
        searchString: searchRequest,
        limit: 30,
      })
      .then((res) => {
        setProductsSearchResultAll(res.data)
      })
  }, [searchRequest])
  console.log(productsSearchResultAll)
  return (
    <>
      <div className="productspromo__main">
        <div>
          <div className="search__results__header">Результаты поиска</div>
          <ProductsList productsArray={productsSearchResultAll} />
        </div>
      </div>
    </>
  )
}
