const convertToCelsius = function(fah) {
  let cels = (fah - 32) * (5/9);
  cels = Math.round(cels * 10) / 10;
  return cels;
};

const convertToFahrenheit = function(cel) { 
    let fahren = (cel * (9/5))+ 32 ;
    fahren = Math.round(fahren * 10) / 10;
    return fahren
};


console.log(convertToFahrenheit(12.32321));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
