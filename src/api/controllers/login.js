import fetcher from '../fetcher';

export const login = async (email, password) => {
    try{
        const {data} = await fetcher.post(`/login`, {email, password});
        
        return data ;
    }catch(error){
        throw new Error(error.message);
    }
} 