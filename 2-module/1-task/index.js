/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

let obj = {
  test: 1
};


function clone(obj) {

  let copy = {

  };

  for (let key in obj) {
    copy[key] = obj[key];
  }

  return copy;

}

