function tutorial () {
    alert("Tutorial");
}

function skip () {
    alert("Skip");
}

window.onload = function () {
    //Using the vars el1, el2 here to avoid a bug where it said document.getElementById('save') was null
    var el1 = document.getElementById('tutorial')
    if (el1) {
      el1.addEventListener('click', tutorial);
    }
    var el2 = document.getElementById('skip')
    if (el2) {
        el2.addEventListener('click', skip)
    }
}
