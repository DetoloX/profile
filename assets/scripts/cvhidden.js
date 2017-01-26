

function hiddenFunction(toHidden, toShow) {
    var x = document.getElementById(toHidden);
/*    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }*/
    x.style.display = 'none';
    var x = document.getElementById(toShow);
  /*  if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }*/
    x.style.display = 'block';
}
