let cities = [];

const getCitiesFromServer = (onCitiesSuccess) =>{
    fetch(`http://localhost:5000/cities`, {
            method: 'GET',
        }
    ).then(response => response.json()
    ).then(success => {
        cities = success["cities"];
        onCitiesSuccess(cities)
        console.log(cities);
        }
    ).catch(error => console.log(error));
        return cities;
};


export {getCitiesFromServer, cities};
