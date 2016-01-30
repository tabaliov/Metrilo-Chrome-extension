observer = new MutationObserver(function(m) {
  console.log(m);
})
observer.observe(document.head, {
  childList: true
});
