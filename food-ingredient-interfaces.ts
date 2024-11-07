export interface Food{
    id: number
    name: string
    imgName: string
    ingredientNeeded : Array<string>
}

export interface Ingredient{
    id: number
    name: string
    imgName: string
}
