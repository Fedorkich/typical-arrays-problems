
exports.min = function min (array) {
  if( typeof array!="undefined" && array!= null && array.length>0) {
  let minimum=array[0];
  for(let i=1;i<array.length;i++){
    if(array[i]<minimum) minimum=array[i]
  }
  return minimum;
}
return 0;
}

exports.max = function max (array) {
  if( typeof array!="undefined" && array!= null && array.length>0) 
  {
  let maximum=array[0]
  for(let i=1;i<array.length;i++){
    if(array[i]>maximum) maximum=array[i]
  }
  return maximum;
}
return 0;
}

exports.avg = function avg (array) {
  if(typeof array!="undefined" && array!= null && array.length>0) 
  {
  let sum=0, average=0;
  for(let i=0;i<array.length;i++){
    sum+=array[i];
     }
  average=sum/array.length;
  return average;
}
return 0;
}
