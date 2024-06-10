import { useCategories } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"
import { Navigate, useNavigate } from "react-router-dom"
import sharedStyles from "src/shared/styles/shared.module.css"
import React from "react"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"

export const TopCategoryPage = ({
  categoriesArray,
}: {
  categoriesArray: string[]
}) => {
  const { data = [], isPending } = useCategories()
  const categories = data.filter((product) =>
    categoriesArray.includes(product.name),
  )

  if (categories.length === 1) {
    return <Navigate to={`/categorypage/${categories[0].id}`} />
  }

  if (isPending) {
    return <p> loading...</p>
  }
  return (
    <section className={sharedStyles.contentWrapper}>
      <h1 style={{ padding: "20px 0px" }}>
        Выберите интересующую вас категорию
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {categories.map((cat) => (
          <CategoryPanel category={cat} key={cat.id} />
        ))}
      </div>
    </section>
  )
}
