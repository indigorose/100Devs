const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL

console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)

// Host name - does not provide the port information. 
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)
// Params object
console.log(myUrl.searchParams)
// add params
myUrl.searchParams.append('abc', '123')

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))