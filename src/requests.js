const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get Puzzle')
    }
}

// Code using async/await - keeping to use as a reference

// const getCountry = async (countryCode) => {
//     const response = await fetch('//restcountries.eu/rest/v2/all')
//         if (response.status === 200) {
//             const data = await response.json()
//             const country = data.find(country => country.alpha2Code === countryCode)
//             return country.name
//         } else {
//             throw new Error('Unable to fetch countries') 
//         }
//     }
      
// const getLocation = async () => {
//     const response = await fetch('//ipinfo.io/json?token=be4b4d203c7054')
//         if (response.status === 200) {
//             return await response.json()
            
//         } else {
//             throw new Error('Unable to get the current location')
//         }
//     }

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountry(location.country)
//     return country
// }

export { getPuzzle as default }