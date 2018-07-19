

function fizzbuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
};

function listener() {
  $('button').click(function(event){
    $('.js-results').empty();
    event.preventDefault();
    const numToCount = $('input').val();
    $('input').val('')
    changeData(numToCount)
  });
}

function changeData(num) {
  const arraytoCount = [];
  for (let i = 0; i <= num; i++) {
    arraytoCount.push(i);
  }
  addDataToDOM(arraytoCount.map(element => fizzbuzz(element)));
}

function addDataToDOM(array) {

  array.forEach(element => {
    let classToAdd = '';
    if (element !== "String") classToAdd = element;

    $('.js-results').append(`<div class="fizz-buzz-item ${classToAdd}">
  <span>${element}</span>
    </div>`)
  })
}



$(listener)// your code here