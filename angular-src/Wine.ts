export class Wine{
    name: string;
    priceMax: number;
    priceMin: number;
    priceRetail: number;
    ratings: Ratings;
    labels: Array<Label>;
    appellation: Appellation;
    description: string;
    id: number;
    varietal: Varietal;
}
export interface Ratings {
    highestScore: number;
}
export interface Label {
    name: string;
    url: string;
}
export interface Appellation {
    region: Region;
}
export interface Region {
    name: string;
}
export interface Varietal {
    name: string;
}