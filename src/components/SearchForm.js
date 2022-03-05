import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }
  useEffect(()=>{
    searchValue.current.focus();
  },[])
  return (
    <div>
      <section className="section search">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            {/* There are two ways of fetching data from api after change in input value both are working fine we can use any of them  */}
            {/* <input onChange={(e)=>setSearchTerm(e.target.value)} ref={searchValue} type="text" name="name" id="name"/> */}
            <input onChange={searchCocktail} ref={searchValue} type="text" name="name" id="name"/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SearchForm
