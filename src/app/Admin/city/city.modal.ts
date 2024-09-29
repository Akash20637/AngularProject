
export interface Data{
    cityId : number,
    cityName : string,
    isEdit?: boolean;
}

export interface City{
    message : string,
    result : boolean,
    data : Data[]
}
