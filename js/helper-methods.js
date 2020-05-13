function makeFocusable(classname, truecondition) {
  let elements = document.getElementsByClassName(classname);
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i];
    if (truecondition()) {
      e.setAttribute('tabIndex', 0);
    } else {
      e.setAttribute('tabIndex', -1);
    }
  }
}

function updateAriaHidden(classname, truecondition) {
  let elements = document.getElementsByClassName(classname);
  for (let i = 0; i < elements.length; i++) {
    let e = elements[i];
    if (truecondition()) {
      e.setAttribute('aria-hidden', false);
    } else {
      e.setAttribute('aria-hidden', true);
    }
  }
}

function enterWrapper(func) {
  return function(event) {
    if (event.key == "ENTER" || event.keyCode == 13) {
      func();
    }
  }
}