import { Product } from "./Product"

export interface ProductDetail {
    id: string
    productId: string
    product: Product
    isDeleted: boolean
    key: string
    keyEn: string
    value: string
    valueEn: string
    icon: string
    created: string
    createdBy: any
    lastModified: any
    lastModifiedBy: any
  }