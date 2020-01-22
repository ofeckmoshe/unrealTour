import fetcher from '../fetcher';


const getQuery = (query) => {
    let result = "";
    for(var q in query){
        result += `${q}=${query[q]}&`
    }
    console.log(result)
    return result;
}

export const getApartmentsFromServer = async (onSuccess,query) => {
    try {
        const {data} = await fetcher.get(`/apartments/?${getQuery(query)}`);
        
        onSuccess(data.apartments);
    }catch(error){
        console.log(error);
    }
}; 

export const getSingleApartment = async (id) =>{
    try{
        const apartment = await fetcher.get(`/apartments/${id}`);
        return apartment.data
    }catch(error){
        console.log(error);
    }
}

export const addApartment = async (form_data) =>{
    console.log('data1',form_data)
    try{
        const apartment = await fetcher.post(`/apartments/`, form_data);
        console.log('data2', apartment.data)
        return apartment.data
    }catch(error){
        console.log(error);
    }
}