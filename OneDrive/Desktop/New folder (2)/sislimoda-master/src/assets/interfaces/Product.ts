import { Brand } from "./Brand"
import { Photo } from "./Photo"
import { ProductDetail } from "./ProductDetail"

export interface Product {
    id: string
    name: string
    nameEn: string
    description: string
    descriptionEn: string
    defaultPrice: number
    oldPrice: number
    orderNUmber: number
    htmlDescriptions: string
    htmlOther: string
    isActive: boolean
    defaultPhotoId: string
    categoryId: string
    vendorId: string
    amount: number
    brandId: string
    brand: Brand
    paymentType: any
    noteForReturn: any
    productImages: Photo[]
    productOptions: any[]
    productDetails: ProductDetail[]
  }