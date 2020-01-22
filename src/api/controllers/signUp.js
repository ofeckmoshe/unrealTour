import fetcher from '../fetcher';

export const newUserSignUp = async ({...user}) => {
    try {
        console.log({...user})
        const {post} = await fetcher.post(`/users`, {...user});
        console.log("post ",post)
    }catch(error){
        console.log(error);
    }
}; 