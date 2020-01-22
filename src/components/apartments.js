// import {allApartments} from '../api/controllers/apartments';

// let apartments=[];
// const getQuery = (query) => {
//     let result = "";
//     for(var q in query){
//         result += `${q}=${query[q]}&`
//     }
//     console.log(result)
//     return result;
// }


// const getApartmentsFromServer = async (onSuccess, query) =>{
//     try{
//         const apartments = await allApartments(getQuery(query));
    
//         onSuccess(apartments);
//     }catch(error) {
//         console.log(error);
//     }
// };
// const getSingleApartment = async (id) =>{
//     const response = await fetch(`http://localhost:5000/apartments/${id}`, {
//         method: 'GET',
//     });
//     const apartment = await response.json();
//     return apartment;
// }

// export {getSingleApartment, getApartmentsFromServer, apartments};

