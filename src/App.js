import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path='/' element={<AllMeal searchValue={searchValue} />} />
      </Routes>
    </div>
  )
}

export default App
