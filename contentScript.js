$('head').find('script').each(function() {
  console.log($(this))
  var sadarjanie = $(this).innerHTML();
  if (sadarjanie.indexOf('metrilo') > -1) {
    console.log(sadarjanie)
  }
});
console.log('sad')
