import React, { useState } from 'react'
import Header from './components/Header/Header'
import AllMeal from './components/Meal/AllMeal'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const getSearchValue = (search) => {
    setSearchValue(search)
  }
  return (
    <div>
      <Header getSearchValue={getSearchValue} />
      <AllMeal searchValue={searchValue} />
    </div>
  )
}

export default App
