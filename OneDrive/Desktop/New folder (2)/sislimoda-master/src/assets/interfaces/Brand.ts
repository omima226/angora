import { Photo } from "./Photo"

export interface Brand {
    id: string
    name: string
    nameEn: string
    description: string
    descriptionEn: string
    brandPhotoId: string
    brandPhoto: Photo
    order: number
}