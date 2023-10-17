export interface Vendor {
    id: string
    isDeleted: boolean
    name: string
    nameEn: string
    description: string
    descriptionEn: string
    ownerName: string
    ownerPhoneNumber: string
    ownerPhoneNumber2: string
    isActive: boolean
    logoId: string
    logo: Logo
    banerId: string
    baner: Baner
    ownerId: string
    owner: any
    isApproved: boolean
}


export interface Logo {
    id: string
    imageId: string
    name: string
    fullLink: string
}

export interface Baner {
    id: string
    imageId: string
    name: string
    fullLink: string
}
