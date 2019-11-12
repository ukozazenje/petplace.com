export const categoryColor = ( category ) => {
  const terms = ['dog Care', 'small pet care', 'cat care', 'pet care', 'health', 'pet behavior', 'breeds', 'pet insurance']
  let filteredCategory = terms.filter((term) => category.toLowerCase().indexOf(term) >= 0 )
  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'dog care':
        return 'purple'
      case 'cat care':
        return 'orange'
      case 'pet care':
        return 'lime'
      case 'health':
        return 'red'
      case 'pet behavior':
        return 'magenta'
      case 'pet insurance':
        return 'emerald'
      case 'small pet care':
        return 'blue'
      case 'breeds':
        return 'gold'
      default:
        return 'purple'
    }
  
  } else {
    return 'purple'
  }
  
}
