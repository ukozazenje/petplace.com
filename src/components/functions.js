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
  console.log(filteredCategory)
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
  console.log(month)
  const day = date.substring(8,10)

  return `${month} ${day}, ${year}`
}