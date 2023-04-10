function concat(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const concatenatedNames = concat(names);

const output = document.getElementById('output');
output.innerHTML = concatenatedNames;
