$('head').find('script').each(function() {
  console.log($(this));
  var sadarjanie = $(this);
  if (sadarjanie[0].innerHTML.indexOf("metrilo") > -1) {
    console.log(sadarjanie[0].innerHTML);
    ''
  }
})
