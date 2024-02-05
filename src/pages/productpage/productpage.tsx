import './productpage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import mock from './../../assets/mock2.jpg'
import { requestProducts } from '../../shared/api/single-product/request'
import { useParams } from 'react-router-dom'

export function ProductPage(props: any) {
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<Record<string, any> | null>(
    null
  )
  useEffect(() => {
    if (id) {
      requestProducts(id).then((products) => setProductInfo(products))
    }
  }, [id])

  return (
    <div className="productpage">
      <div className="productpage__wrapper">
        <img src={mock} alt="" />
        <div className="productpage__rightinfo">
          <div className="productpage__name">{productInfo?.name}</div>
          <div className="productpage__description">
            Характеристики: <br />
            {productInfo?.description}
          </div>
          <div className="productpage__bottom">
            <div></div>
            <div className="productpage__bottom__button">
              <div className="productpage__price">
                {productInfo?.salePrices?.[0]?.value / 100 + '₽'}
              </div>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
