export const getDisplayName = (products, item) => {
  return products.filter(
    product => product.stateFilingProductId === item.stateFilingProductId
  )[0].display
}
export const productsWithPrices = (products, monthlyPreviewResults) => {
  const getIdsOfProducts = products.map(item => item.stateFilingProductId)
  const upgradePrices = monthlyPreviewResults.filter(val =>
    getIdsOfProducts.includes(val.stateFilingProductId)
  )

  const productsOptionsWithPrices = upgradePrices.map(item => {
    return {
      stateFilingProductId: item.stateFilingProductId,
      monthlyInstallment: item.monthlyInstallment,
      display: getDisplayName(products, item),
    }
  })

  return productsOptionsWithPrices
}
export const roundToTwoDecimals = value => {
  return Number(Math.round(value + "e" + 2) + "e-" + 2)
}

export const calculateSumOfMonthlyInstallment = arr => {
  const sum =
    arr.length > 0
      ? arr.reduce(function(acc, obj) {
          return acc + obj.monthlyInstallment
        }, 0)
      : 0

  return Number(sum)
}

export const formatName = name_on_card => {
  const arr = name_on_card.split(" ")
  if (arr.length > 1) {
    return { firstName: arr.shift(), lastName: arr.join(" ") }
  } else {
    return {
      firstName: arr.shift(),
      lastName: " ",
    }
  }
}

export const setExamPlus = arr => {
  return arr.reduce((accumulator, currentValue) => {
    return currentValue.display === "ExamPlus"
      ? [currentValue, ...accumulator]
      : [...accumulator, currentValue]
  }, [])
}

export const formatCC = (expires_month, expires_year) => {
  const month = expires_month.replace(/\D+/g, "")
  const year = expires_year.replace(/\D+/g, "").substring(2)

  return `${month}${year}`
}
