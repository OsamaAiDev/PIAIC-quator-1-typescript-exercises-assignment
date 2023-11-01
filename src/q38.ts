export {};
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"
function city_country(name: string, country: string): string{
    return `${name}, ${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.

console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Paris", "London"));
console.log(city_country("Mumbai", "India"));