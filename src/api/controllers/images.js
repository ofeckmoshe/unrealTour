import fetcher from '../fetcher';


export const addImages = async (imagesArr) =>{
    try{
        const images = await fetcher.post(`/images/`, imagesArr);
        console.log('data', images.data)
        return images.data
    }catch(error){
        console.log(error);
    }
}