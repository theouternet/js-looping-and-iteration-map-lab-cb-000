// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(e => e.toLowerCase())
}

function nameToAttributes(drivers) {

  return drivers.map(function(e) {
    let arr = e.split(" ");
    
    return { firstName: arr[0], lastName: arr[1] };
  })
}

function attributesToPhrase(array) {
  
}