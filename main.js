// const inputCPU = document.querySelectorAll('[data-radio]')
const inputCPU = dataSearch('data-radio')
const inputHdd = dataSearch('data-radio-hdd')
const inputRam = dataSearch('data-radio-ram')
// const r = document.querySelectorAll('div[data-radio-ram]>input[type="radio"]');
const r = dataInpSearch('data-radio-ram')
console.log('inputCPU', inputCPU)
console.log('inputHdd', inputHdd)
console.log('inputRam', inputRam)


console.log('r = ', r)

addEventClick(inputCPU, 'data-radio')
addEventClick(inputHdd, 'data-radio-hdd')
addEventClick(inputRam, 'data-radio-ram')

function addEventClick(arr, searchAttr) {
  const r = dataInpSearch(`${searchAttr}`)
  console.log('!! из функции r = ', r)

  arr.forEach(item => {
    item.addEventListener('click', (e) => {
      clear(arr, 'active')
      item.classList.add('active')
      // console.log('data-radio', item.getAttributeNode('data-radio').value)
      let inpId = `radio${item.getAttributeNode('data-radio')}`
      console.log('inpId=', inpId)
      let rId = document.querySelector(`div>input#${inpId}`)

      // console.log('children', item.children)

      removeAttr(r, 'checked')
      rId.setAttribute('checked', 'true');


    })
  })
}

function dataSearch(searchAttr) {
  return document.querySelectorAll(`[${searchAttr}]`)
}

function dataInpSearch(searchAttr) {
  return document.querySelectorAll(`div[${searchAttr}]>input[type="radio"]`);
}

function clear(arr, attr) {
  // const inputCPUclear = document.querySelectorAll('.flex-item')
  for (item of arr) {
    item.classList.remove(attr)
  }
}

function removeAttr(arr, attr) {
  for (item of arr) {
    item.removeAttribute(attr)
  }
}
