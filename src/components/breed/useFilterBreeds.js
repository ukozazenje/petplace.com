import React, { useEffect } from 'react'

const useFilterBreeds = (isInitialMount, breeds, setDisplayBreeds, setCurrentPage, handlePageChange, types) => {
  return (
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
     } else { 
       setDisplayBreeds(breeds.filter( ({node:breed}) => {
         return types.includes( breed.acf.type )
       } ))
       setCurrentPage(1)
       handlePageChange(1)
     }
    }, [types.join(",")])
  )
}

export default useFilterBreeds
