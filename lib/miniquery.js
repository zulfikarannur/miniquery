/*!
 * miniquery
 */
class miniquery {
  constructor(element) {
    this.element = document.querySelectorAll(element)
  }

  static hide(){
    for (var i = 0; i < this.element.length; i++) {
      this.element[i].style.display = 'none';
    }
  }

  static show(){
    for (var i = 0; i < this.element.length; i++) {
      this.element[i].style.display = 'block';
    }
  }
}
/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
  static select(selection) {
    return document.querySelectorAll(selection);
  }
}
/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
  static hide(selection){
    for (var i = 0; i < SweetSelector.select(selection).length; i++) {
      SweetSelector.select(selection)[i].style.display = 'none';
    }
  }

  static show(selection){
    for (var i = 0; i < SweetSelector.select(selection).length; i++) {
    SweetSelector.select(selection)[i].style.display = 'block';
    }
  }

  static addClass(selection,added){
    for (var i = 0; i < SweetSelector.select(selection).length; i++) {
      SweetSelector.select(selection)[i].className += 'added';
    }
  }

  static removeClass(selection,removed){
    for (var i = 0; i < SweetSelector.select(selection).length; i++) {
      SweetSelector.select(selection)[i].className -= 'removed';
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {
  static on(element, fire, callback){
    for (var i = 0; i < SweetSelector.select(element).length; i++) {
      SweetSelector.select(element)[i].addEventListener(fire,callback)
    }
  }

  static trigger(element, fire){
    var event = new Event(fire)
    for (var i = 0; i < SweetSelector.select(element).length; i++) {
      SweetSelector.select(element)[i].dispatchEvent(event)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(obj){
    var ajaxReq = new XMLHttpRequest()
    ajaxReq.addEventListener('load',obj.success)
    ajaxReq.addEventListener('error',obj.fail)
    ajaxReq.open(obj.type, obj.url)
    ajaxReq.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
