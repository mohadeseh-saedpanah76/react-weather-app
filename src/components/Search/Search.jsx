import { response } from 'express'
import React, {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { GEO_API_URL , geoApiOptions } from '../../api'



const Search = ({onSearchChange}) => {
  const[search , setSearch] = useState(null)

  const loadOptions = ()=> async(inputValue)=>{
      // return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}` , geoApiOptions)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err))

      try {
        const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}` , geoApiOptions);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
  }

  const handleOnChange = (searchData)=>{
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
