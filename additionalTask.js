const test = [1, 2, 3, 4, 5]

function max (arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? max = arr[i] : 0
  }
  return max
}

function min (arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    min > arr[i] ? min = arr[i] : 0
  }
  return min
}

function sum (arr) {
  let result = 0
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}
