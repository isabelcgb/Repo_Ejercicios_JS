const times = [60, 75, 79, 80, 55, 59];
console.log ('times = ', times);  
const sumatoria = times.reduce ((acumulator, previousValue) => acumulator + previousValue, 0);
console.log ('Sumatoria = ',sumatoria);  
const longitud = times.length
console.log ('Longitud = ',longitud);  
const media = sumatoria / longitud
console.log ('Media = ',media); 