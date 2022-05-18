nodarkreader = document.getElementById("nodarkreader")
setInterval(function() {
  if (document.getElementsByClassName('darkreader').length > 0) {
    nodarkreader.style.visibility = "visible";
  } else {
    nodarkreader.style.visibility = "hidden";
  }
}, 1000)