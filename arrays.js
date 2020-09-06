const citiesInitials = ['ES', 'MG', 'RJ', 'SP'];
const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

const computedCities = [];

for (let i = 0; i < cities.length; i++) {
    const city = cities[cities.length - (i + 1)];
    const initials = citiesInitials[i];
    computedCities.push({ [initials]: city })
}

Object.entries(computedCities).forEach(([i, v]) => console.log(i, '-', v))
