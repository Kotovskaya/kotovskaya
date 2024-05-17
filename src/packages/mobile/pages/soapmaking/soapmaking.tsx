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

export type Category = {
  category_name: string
  category_id: string
  category_items: Category[]
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

export function Soapmaking() {
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
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, {
        withCredentials: true,
      })
      .then((response) => {
        setCategories(response.data)
      })
  }, [])
  // useEffect(() => {
  //   axios
  //     .post(`${API_URL}/categories/get_category`, {
  //       category_id: "0ce6b1e6-7205-4def-b499-6288cf4e7fde",
  //     })
  //     .then((res) => {
  //       setProducts(res.data)
  //     })
  // }, [])

  useEffect(() => {
    axios
      .post<GetCategoryRequest, AxiosResponse<GetCategoryItemsResponse>>(
        `${API_URL_CATEGORIES}/get_category`,
        {
          category_id: "19be723c-cd2b-4c6d-8947-d07f5c5cc7da",
        },
      )
      .then((res) => {
        setSoapmakingSoapBases(res.data.categoryItems)
      })
  }, [])
  console.log(soapmakingSoapBases)
  // useEffect(() => {
  //   axios
  //     .post(`${API_URL}/categories/get_category`, {
  //       category_id: "19be723c-cd2b-4c6d-8947-d07f5c5cc7da",
  //     })
  //     .then((res) => {
  //       setSoapmakingSoapBases(res.data)
  //     })
  // }, [])

  // useEffect(() => {
  //   axios
  //     .post(`${API_URL}/categories/get_category`, {
  //       category_id: "2f05dba0-6069-456f-8f68-f748eac4ca00",
  //     })
  //     .then((res) => {
  //       setColors(res.data)
  //     })
  // }, [])
  return (
    <div>
      <div className="mobile__wrapper">
        <p className="category__name">Мыловарение</p>
        <div className="fff">
          {categories
            .filter((key) => soapmakingM.includes(key.category_name))
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
