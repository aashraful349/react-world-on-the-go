import React from 'react';

const Country = ({country}) => {
    // countryData=country;
    // console.log(countryData);
    console.log(country.flags.flags);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>Name : {country.name.common}</h3>
        </div>
    );
};

export default Country;