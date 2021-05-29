function sort(){
  var inputs = document.getElementById('numbers-form').elements;
  const array = Array.from(inputs);
  const map1 = array.slice(0,3).map(x => x.value);
  const sorted = map1.sort()
  return sorted
}

function sort_and_display(){
  const sorted_numbers = sort();
  console.log(sorted_numbers)
  document.getElementById('placeholder').innerHTML = sorted_numbers;
}
