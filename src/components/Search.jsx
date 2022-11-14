import React from 'react'

const Search = ({ handelChange }) => {
  return (
    <div >
      <input className='search-input' type="text" placeholder='Search title...' onChange={handelChange} />
    </div>
  )
}

export default Search