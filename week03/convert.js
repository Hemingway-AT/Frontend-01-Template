/*
 * @Description: 
 * @Autor: Hemingway
 * @Date: 2020-04-29 23:55:23
 * @LastEditors: 
 * @LastEditTime: 2020-04-29 23:57:44
 * @FilePath: \Frontend-01-Template\week03\convert.js
 */
/**
 * @description: stringToNumber
 * @param {type}
 * @return:
 * @author: Hemingway
 * @example:
 */
function convertStringToNumber(str, type) {
  // default convert string to decimal
  if (arguments.length < 2) {
    type = 10;
  }
  var chars = str.split("");
  var number = 0;
  var i = 0;
  if (type <= 10) {
    while (i < chars.length && chars[i] != ".") {
      number *= type;
      number += chars[i].codePointAt(0) - "0".codePointAt(0);
      i++;
    }
    // jump the point
    if (chars[i] == ".") {
      i++;
    }
    var fraction = 1;
    while (i < chars.length) {
      fraction /= type;
      number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
      i++;
    }
  } else if (type <= 16) {
    var hexTable = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    };
    while (i < chars.length) {
      number *= type;
      number += hexTable[chars[i].toLowerCase()];
      i++;
    }
  }
  return number;
}

/**
 * @description: numberToString
 * @param {type}
 * @return:
 * @author: Hemingway
 * @example:
 */
function convertNumberToString(number, type) {
  if (arguments.length < 2) {
    type = 10;
  }
  var integer = Math.floor(number);
  var fractionPos = ("" + number).indexOf(".");
  var fractionLength = ("" + number).length - fractionPos - 1;
  var fraction = (number - integer).toFixed(fractionLength);
  var str = "";
  while (integer > 0) {
    str = (integer % type) + str;
    integer = Math.floor(integer / type);
  }
  if (fractionPos > -1) {
    str += ".";
    while (fractionLength > 0) {
      fraction *= type;
      str += Math.floor(fraction % type);
      fractionLength--;
    }
  }
  return str;
}
