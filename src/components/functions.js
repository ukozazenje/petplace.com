import PetCare from '../static/images/category-images/pet'
import CatCare from '../static/images/category-images/cat'
import DogCare from '../static/images/category-images/dog'
import SmallPetCare from '../static/images/category-images/smallPet'
import Insurance from '../static/images/category-images/insurance'
import Breeds from '../static/images/category-images/breed'
import Health from '../static/images/category-images/health'
import Behavior from '../static/images/category-images/behavior'
import React from 'react'

const terms = ['dog Care', 'small pet care', 'cat care', 'pet care', 'health', 'pet behavior', 'breeds', 'pet insurance']
export const categoryColor = ( category ) => {
  let filteredCategory = terms.filter((term) => category.toLowerCase().indexOf(term) >= 0 )
  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'dog care':
        return 'mauve'
      case 'cat care':
        return 'orange'
      case 'pet care':
        return 'blue-dark'
      case 'health':
        return 'red'
      case 'pet behavior':
        return 'magenta'
      case 'pet insurance':
        return 'green'
      case 'small pet care':
        return 'purple-light'
      case 'breeds':
        return 'gold'
      default:
        return 'blue'
    }
  
  } else {
    return 'purple'
  }
  
}


export const categoryImage = ( category ) => {
  let filteredCategory = terms.filter((term) => category.toLowerCase().indexOf(term) >= 0 )
  // console.log(filteredCategory)
  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'dog care':
        return <DogCare />
      case 'cat care':
        return <CatCare />
      case 'pet care':
        return <PetCare />
      case 'health':
        return <Health />
      case 'pet behavior':
        return <Behavior />
      case 'pet insurance':
        return <Insurance />
      case 'small pet care':
        return <SmallPetCare />
      case 'breeds':
        return <Breeds />
      default:
        return <PetCare />
    }
  
  } else {
    return <PetCare />
  }
  
}

// returns author name
export const filterAuthors = (author) => {
  // console.log(author.slug)
  switch (author.slug) {
    case 'stephanie-silberstang-dvm-cva':
    case 'alett-mekler':
    case 'dr-debra-primovic-dvm':
    case 'carey-hemmelgarn':
    case 'kimmi-whitehead-vmd-dacvecc':
    case 'rebecca-mount-dvm-dacvd':
    case 'danika-sorensen-vmd':
    case 'lori-savka':
    case 'melissa-evans-lvt-vts-ecc':
      return author.display_name
    default:
      return false
  }
}

// returns slug for selected authors
export const filterAuthorsLink = (author) => {
  // console.log(author)
  switch (author) {
    case 'Stephanie Silberstang, DVM CVA':
      return 'stephanie-silberstang-dvm-cva'
    case 'Alett Mekler':
      return 'alett-mekler'
    case 'Dr. Debra Primovic - DVM':
      return 'dr-debra-primovic-dvm'
    case 'Carey Hemmelgarn':
      return 'carey-hemmelgarn'
    case 'KimMi Whitehead, VMD, DACVECC':
      return 'kimmi-whitehead-vmd-dacvecc'
    case 'Rebecca Mount, DVM DACVD':
      return 'rebecca-mount-dvm-dacvd'
    case 'Danika Sorensen, VMD':
      return 'danika-sorensen-vmd'
    case 'Lori Savka':
      return 'lori-savka'
    case 'Melissa Evans, LVT, VTS (ECC)': 
      return 'melissa-evans-lvt-vts-ecc'
    default:
      return false
  }
}

export const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
  const year = date.substring(0,4)
  const month = months[parseInt( date.substring(5,7))-1]
  // console.log(month)
  const day = date.substring(8,10)

  return `${month} ${day}, ${year}`
}