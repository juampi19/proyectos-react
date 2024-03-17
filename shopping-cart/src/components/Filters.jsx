import { useId } from 'react'
import './Filters.css'
// import { FiltersContext } from '../context/filters';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {

  const {setFilters, filters} = useFilters()

  const minPriceFilterId = useId();
  const categoryFilterId = useId();


  const handleChangeMinPrice = (event) => {
    setFilters( prevState => ({
      ...prevState,
      minPrice: event.target.value
    }) );
  }

  const handleChangeCategory = (event) => {
    setFilters( prevState => ({
      ...prevState,
      category: event.target.value
    }) )
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" 
          id="price"
          min={'0'}
          max={'1000'}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
