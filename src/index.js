
exports.min = function min (array) {
  if ( array === undefined || array.length === 0) {
    return 0;
  }

  let min;
    for ( i = 0; i < array.length; i++) {
        if (min === undefined || array[i] < min) {
            min = array[i]
        }
    } 
    return min;
}

exports.max = function max (array) {
  if ( array === undefined || array.length === 0) {
    return 0;
  }
  
  let max;
    for ( i = 0; i < array.length; i++) {
        if (max === undefined || array[i] > max) {
            max = array[i]
        }
    } 
    return max;
}

exports.avg = function avg (array) {
  if ( array === undefined || array.length === 0) {
    return 0;
  }
  
  let summ = 0;

    for ( i = 0; i < array.length; i++) {
        summ += array[i];
    } 

    return summ / array.length;
}
