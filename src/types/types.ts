export interface Photo {
    id: string
    title: string
    thumbnailUrl: string
    url: string
    visible?: boolean
}

export interface Pagination {
    page: number
    limit: number
}
