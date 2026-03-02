import React from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    // countryData=country;
    // console.log(countryData);
    // console.log(country.flags.flags);
    // console.log(country.area.area);
    const [visited, setVisited] = React.useState(false);

    const handleVisited=()=>{
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area>300? "Large Country":"Small Country"}</p>
            <button onClick={handleVisited}>
                {visited? "Visited":"Not Visited"}
            </button>
        </div>
    );
};

export default Country;