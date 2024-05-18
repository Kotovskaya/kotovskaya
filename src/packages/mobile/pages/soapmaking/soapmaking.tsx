import "./soapmaking.css"
import axios, { AxiosResponse } from "axios"
import { useState, useEffect } from "react"
import {
  API_URL,
  API_URL_CATEGORIES,
  API_URL_PRODUCTS,
} from "src/shared/api/config"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductCardMobile } from "src/packages/mobile/entities/product-card-mobile"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { useQuery } from "@tanstack/react-query"
import { TCategory } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"

export type Category = {
  name: string
  id: string
  categoryChildren: Category[]
  categoryItems: ProductDTO[]
}

export type CategoryDTO = {
  name: string
  id: string
}

export type GetCategoryItemsResponse = {
  categoryId: string
  categoryName: string
  categoryItems: ProductDTO[]
  categoryChildren: CategoryDTO[]
}

export type GetCategoryRequest = {
  categoryId: string
}
const useCategories = () => {
  return useQuery<TCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<TCategory[]>(
        `${API_URL_CATEGORIES}/get_all_categories_tree`,
      )
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}
export function Soapmaking() {
  const { data: allCategories = [], isPending } = useCategories()
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [soapmakingSoapBases, setSoapmakingSoapBases] = useState<ProductDTO[]>(
    [],
  )
  const [colors, setColors] = useState<ProductDTO[]>([])
  const soapmakingM = [
    "Базовые масла",
    "Инcтрументы и приспособления",
    "Мыльная основа",
    "Щелочь",
    "Формы",
    "Красители",
    "Отдушки",
  ]

  useEffect(() => {
    axios
      .post<GetCategoryRequest, AxiosResponse<GetCategoryItemsResponse>>(
        `${API_URL_CATEGORIES}/get_category_items`,
        {
          categoryId: "19be723c-cd2b-4c6d-8947-d07f5c5cc7da",
        },
      )
      .then((res) => {
        setSoapmakingSoapBases(res.data.categoryItems)
      })
  }, [])

  return (
    <div>
      <div className="mobile__wrapper">
        <p className="category__name">Мыловарение</p>
        <div className="fff">
          {allCategories
            .filter((key) => soapmakingM.includes(key.name))
            .map((category) => (
              <CategoryPanel category={category} />
            ))}
        </div>
        <ProductsList
          productsArray={[...products, ...colors, ...soapmakingSoapBases]}
        />
      </div>
    </div>
  )
}
