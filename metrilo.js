observer = new MutationObserver(function(m) {
  console.log(m[0].addedNodes[0]);
})
observer.observe(document.head, {
  childList: true
});
