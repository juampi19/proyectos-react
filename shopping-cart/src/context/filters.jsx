import {createContext, useState} from 'react';

//1. Crear el contexto, el que queremos consumir
export const FiltersContext = createContext();

//2. Crear el provider, para proveer el acceso al contexto
export const FiltersProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })


  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}