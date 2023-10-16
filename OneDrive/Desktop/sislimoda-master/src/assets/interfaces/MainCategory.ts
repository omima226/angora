export interface MainCategory {
    id: string
    mainCategoryId: any
    mainCategory: any
    name: string
    nameEn: string
    description: string
    descriptionEn: string
    categoryPhotoId: string
    categoryPhoto: CategoryPhoto
    order: number
}

export interface CategoryPhoto {
    id: string
    imageId: string
    name: string
    fullLink: string
}
