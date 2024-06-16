import "./category-page.css"
import { useParams } from "react-router-dom"
import { useQueryGetCategory } from "src/shared/api/use-query-get-category"
import { CategoryInfo } from "src/widgets/category-info/category-info"
import { Helmet } from "react-helmet"
import { Loader } from "src/widgets/loader/loader"

export function CategoryPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isPending } = useQueryGetCategory(id!)

  if (isPending) {
    return <Loader />
  }
  if (!data) {
    return (
      <div className={"productsListContainer"}>
        Произошла ошибка, перезагрузите страницу
      </div>
    )
  }
  return (
    <div style={{ margin: "50px 0" }}>
      <Helmet title={data.categoryName} />
      <CategoryInfo
        productsArray={data.categoryItems}
        subcategoryArray={data.categoryChildren}
        categoryName={data.categoryName}
      />
    </div>
  )
}
