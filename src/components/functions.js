import PetCare from '../static/images/category-images/pet'
import CatCare from '../static/images/category-images/cat'
import DogCare from '../static/images/category-images/dog'
import SmallPetCare from '../static/images/category-images/smallPet'
import Insurance from '../static/images/category-images/insurance'
import Breeds from '../static/images/category-images/breed'
import Health from '../static/images/category-images/health'
import Behavior from '../static/images/category-images/behavior'
import BirdsSmallPetHealthHeroImage from "../static/images/category-images/birdsSmallPetHealth"
import DogHealthHeroImage from "../static/images/category-images/dogHealth"
import SmallPetHeroImage from "../static/images/category-images/smallPetHealth"
import FishSmallPetHealthHeroImage from "../static/images/category-images/fishSmallPetHealth"
import ReptileSmallPetHealthHeroImage from "../static/images/category-images/reptileSmallPetHealth"
import SmallMammalsSmallPetHealthHeroImage from "../static/images/category-images/smallMammalsSmallPetHealth"
import CatPetInsuranceHeroImage from "../static/images/category-images/catPetInsurance"
import BirdsHeroImage from "../static/images/category-images/birds"
import FishHeroImage from "../static/images/category-images/fish"
import ReptileHeroImage from "../static/images/category-images/reptile"
import SmallMammalsHeroImage from "../static/images/category-images/small-mammals"
import SmallPetBehaviorTrainingHeroImage from "../static/images/category-images/smallPetBehaviorTraining"
import BirdsSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/birdsSmallPetBehaviorTraining"
import FishSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/fishSmallPetBehaviorTraining"
import ReptileSmallPetBehaviorTrainingImage from "../static/images/category-images/reptileSmallPetBehaviorTraining"
import CatBreedsHeroImage from "../static/images/category-images/catBreeds"
import SmallPetBreedsHeroImage from "../static/images/category-images/smallPetBreeds"
import BirdsSmallPetBreedsHeroImage from "../static/images/category-images/birdsSmallPetBreeds"
import FishSmallPetBreadsHeroImage from "../static/images/category-images/fishSmallPetBreads"
import ReptileSmallPetBreedsHeroImage from "../static/images/category-images/reptileSmallPetBreeds"
import SmallMammalsSmallPetBreedsHeroImage from "../static/images/category-images/smallMammalsSmallPetBreeds"
import SmallMammalsSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/smallMammalsSmallPetBehaviorTraining"
import React from 'react'

const terms = [
  'fish behavior & training',
  'reptile behavior & training',
  'small mammals behavior & training',
  'small pet behavior & training',
  'bird behavior & training',
  'small mammals pet care',
  'reptile pet care',
  'bird pet care',
  'fish pet care',
  'small pet care',
  'small mammals breeds',
  'small pet breeds',
  'birds pet breeds',
  'small pet health',
  'small mammal health',
  'fish breeds',
  'reptiles breeds',
  'cat breeds',
  'cat insurance',
  'pet insurance',
  'pet behavior',
  'reptile health',
  'bird health',
  'dog health',
  'fish health',
  'dog care',
  'pet care',
  'cat care',
  'health',
  'breeds',
]
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

  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'bird behavior & training':
        return <BirdsSmallPetBehaviorTrainingHeroImage />
      case 'dog care':
        return <DogCare />
      case 'cat care':
        return <CatCare />
      case 'pet care':
        return <PetCare />
      case 'pet behavior':
        return <Behavior />
      case 'pet insurance':
        return <Insurance />
      case 'small pet care':
        return <SmallPetCare />
      case 'bird health':
        return <BirdsSmallPetHealthHeroImage />
      case 'dog health':
        return <DogHealthHeroImage />
      case 'small pet health':
        return <SmallPetHeroImage />
      case 'fish health':
        return <FishSmallPetHealthHeroImage />
      case 'reptile health':
        return <ReptileSmallPetHealthHeroImage />
      case 'small mammal health':
        return <SmallMammalsSmallPetHealthHeroImage />
      case 'cat insurance':
        return <CatPetInsuranceHeroImage />
      case 'bird pet care':
        return <BirdsHeroImage />
      case 'reptile pet care':
        return <ReptileHeroImage />
      case 'small mammals pet care':
        return <SmallMammalsHeroImage />
      case 'fish pet care':
        return <FishHeroImage />
      case 'small pet behavior & training':
        return <SmallPetBehaviorTrainingHeroImage />
      case 'fish behavior & training':
        return <FishSmallPetBehaviorTrainingHeroImage />
      case 'reptile behavior & training':
        return <ReptileSmallPetBehaviorTrainingImage />
      case 'small mammals behavior & training':
        return <SmallMammalsSmallPetBehaviorTrainingHeroImage/>
      case 'cat breeds':
        return <CatBreedsHeroImage />
      case 'small pet breeds':
        return <SmallPetBreedsHeroImage />
      case 'birds pet breeds':
        return <BirdsSmallPetBreedsHeroImage />
      case 'fish breeds':
        return <FishSmallPetBreadsHeroImage />
      case 'reptiles breeds':
        return <ReptileSmallPetBreedsHeroImage />
      case 'small mammals breeds':
        return <SmallMammalsSmallPetBreedsHeroImage />
      case 'health':
        return <Health />
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
  const day = date.substring(8,10)

  return `${month} ${day}, ${year}`
}