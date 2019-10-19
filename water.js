let mountain_height = [7, 0, 2, 8, 3, 4, 7, 2,
  4, 8, 0, 11, 0, 0, 0, 3]
let result = 0

mountain_height = visualise(mountain_height)

mountain_height.forEach(el => {
  result += getAmountOfWater(el)
})

console.log(result)

function visualise (arr) {
  const max_height = Math.max.apply(null, arr)
  const visualised = []
  for (let i = max_height; i > 0; i--) {
    const height_arr = arr.map(el => {
      return el >= i ? 1 : 0
    })
    visualised.push(height_arr)
  }
  return visualised
}

function getAmountOfWater (arr) {
  let i = 0
  let result = 0
  const heights = []
  while (arr.indexOf(1, i) != -1) {
    heights.push(arr.indexOf(1, i))
    i = arr.indexOf(1, i) + 1
  }
  for (let i = 0; i < heights.length - 1; i++) {
    result += heights[i + 1] - (heights[i] + 1)
  }
  return result
}
