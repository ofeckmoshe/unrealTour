import fetcher from '../fetcher';


const getQuery = (query) => {
    let result = "";
    for(var q in query){
        result += `${q}=${query[q]}&`
    }
    console.log(result)
    return result;
}

export const getCitiesFromServer = async (onCitiesSuccess) => {
    try {
        const {data} = await fetcher.get(`/cities`);
        // console.log(data);
        onCitiesSuccess(data.cities)
        return data;
    }catch(error){
        console.log(error);
    }
}; 

export const getAllCitiesFromServer = async (onCitiesSuccess) => {
    try {
        const {data} = await fetcher.get(`/cities/allCities`);
        onCitiesSuccess(data)
        return data;
    }catch(error){
        console.log(error);
    }
}; 