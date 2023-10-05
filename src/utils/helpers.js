export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-IL', {
        style: 'currency',
        currency: 'ILS' 
    }).format(number / 100 * 3.7)
    return newNumber
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
   
    if(type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}
