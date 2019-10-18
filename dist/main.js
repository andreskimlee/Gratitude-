/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var width = 1500;
  var height = 765;
  var svg = d3.select("body").append("svg");
  svg.attr("height", height).attr("width", width).append("g").attr("transform", "translate(0,0)");
  svg.append("defs").append("pattern").attr("id", "user-circle").attr("height", "100%").attr("width", "100%").attr("patternContentUnits", "objectBoundingBox").append("image").attr("height", 1).attr("width", 1).attr("preserveAspectRatio", "none").attr("xmlns:xlink", "http://www.w3.org/1999/xlink").attr("xlink:href", "./src/images/circle.gif");
  var simulation = d3.forceSimulation().force("x", d3.forceX(width / 2).strength(0.05)).force("y", d3.forceY(height / 2).strength(0.05)).force("collide", d3.forceCollide(function (d) {
    var formatted = d.Monthly.replace("$", "");
    formatted = Number(formatted.replace(",", ""));
    return radiusScale(formatted / 14);
  }));
  var radiusScale = d3.scaleSqrt().domain([3, 1500]).range([10, 90]); // domain refers to thousands (dollars) 

  d3.queue().defer(d3.csv, "./Income.csv").await(ready);

  function ready(error, datapoints) {
    svg.selectAll(".Country").data(datapoints).enter().append("circle").attr("class", "countries").attr("r", function (d) {
      var formatted = d.Monthly.replace("$", "");
      formatted = Number(formatted.replace(",", ""));
      return radiusScale(formatted / 20);
    }).attr("fill", "black").style("opacity", .3).on("mouseover", function (d) {
      d3.select("body").append("text").html("".concat(d.Country, " <br> $").concat(d.Monthly)).attr("class", "country-text");
    }).on("mouseout", function (d) {
      d3.select(".country-text").remove();
    });
    simulation.nodes(datapoints).on('tick', ticked);

    function ticked() {
      //magic boilerplate.... 
      svg.selectAll('.countries').attr("cx", function (d) {
        return d.x;
      }).attr("cy", function (d) {
        return d.y;
      });
    }

    var forceX = d3.forceX(function (d) {
      var formatted = d.Monthly.replace("$", "");
      formatted = Number(formatted.replace(",", ""));

      if (formatted < input[0].value) {
        return 1000;
      } else {
        return 500;
      }
    });
    d3.select(".combine-button").on("click", function (d) {
      simulation.force("x", d3.forceX(width / 2).strength(.05));
      simulation.force("y", d3.forceY(height / 2).strength(.05));
    });
    d3.select(".title").on("click", function (d) {
      simulation.force("x", d3.forceX(width / 2).strength(1));
      simulation.force("y", d3.forceY(height / 2).strength(1));
    });
    var input = document.getElementsByClassName("input-field");
    input[0].addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        datapoints.push({
          Country: "user",
          Monthly: "".concat(input[0].value)
        });
        svg.selectAll(".countries").data(datapoints).enter().append("circle").attr("class", "countries").attr("r", function (d) {
          var formatted = d.Monthly.replace("$", "");
          formatted = Number(formatted.replace(",", ""));
          return radiusScale(formatted / 20);
        }).attr("fill", function (d) {
          if (d.Country === "user") {
            return "url(#user-circle)";
          } else {
            return "black";
          }
        }).style("opacity", function (d) {
          if (d.Country === "user") {
            return .5;
          } else return .3;
        });
        simulation.nodes(datapoints).on('tick', ticked);
        simulation.restart();
        generateLessGreaterText(); //not important

        simulation.force("x", forceX).alphaTarget(0.6);
        input[0].value = "";
      }
    });

    function generateLessGreaterText() {
      d3.select("body").append("text").text("You're better off than ".concat(percentRank(Number(input[0].value)), "% of the world")).attr("class", "lesser");
      console.log(percentRank(Number(input[0].value)));
    }

    function percentRank(n) {
      var array = [];
      datapoints.forEach(function (country) {
        var formatted = country.Monthly.replace("$", "");
        formatted = Number(formatted.replace(",", ""));
        array.push(formatted);
      });
      var L = 0;
      var S = 0;
      var N = array.length;

      for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
          L += 1;
        } else if (array[i] === n) {
          S += 1;
        } else {}
      }

      var pct = (L + 0.5 * S) / N;
      return Math.floor(pct * 100);
    }
  }
})();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwiZm9yY2VDb2xsaWRlIiwiZCIsImZvcm1hdHRlZCIsIk1vbnRobHkiLCJyZXBsYWNlIiwiTnVtYmVyIiwicmFkaXVzU2NhbGUiLCJzY2FsZVNxcnQiLCJkb21haW4iLCJyYW5nZSIsInF1ZXVlIiwiZGVmZXIiLCJjc3YiLCJhd2FpdCIsInJlYWR5IiwiZXJyb3IiLCJkYXRhcG9pbnRzIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwic3R5bGUiLCJvbiIsImh0bWwiLCJDb3VudHJ5IiwicmVtb3ZlIiwibm9kZXMiLCJ0aWNrZWQiLCJ4IiwieSIsImlucHV0IiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwicmVzdGFydCIsImdlbmVyYXRlTGVzc0dyZWF0ZXJUZXh0IiwiYWxwaGFUYXJnZXQiLCJ0ZXh0IiwicGVyY2VudFJhbmsiLCJjb25zb2xlIiwibG9nIiwibiIsImFycmF5IiwiZm9yRWFjaCIsImNvdW50cnkiLCJMIiwiUyIsIk4iLCJsZW5ndGgiLCJpIiwicGN0IiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgd2lkdGggPSAxNTAwO1xuICB2YXIgaGVpZ2h0ID0gNzY1O1xuXG4gIHZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIHN2Z1xuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwwKVwiKVxuIFxuICAgIFxuICBzdmcuYXBwZW5kKFwiZGVmc1wiKVxuICAgIC5hcHBlbmQoXCJwYXR0ZXJuXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcInVzZXItY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAuYXR0cihcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJvYmplY3RCb3VuZGluZ0JveFwiKVxuICAgIC5hcHBlbmQoXCJpbWFnZVwiKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDEpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAxKVxuICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKVxuICAgIC5hdHRyKFwieGxpbms6aHJlZlwiLCBcIi4vc3JjL2ltYWdlcy9jaXJjbGUuZ2lmXCIpO1xuXG5cbiAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKSBcbiAgICAuZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCgwLjA1KSkgXG4gICAgLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoaGVpZ2h0LzIpLnN0cmVuZ3RoKDAuMDUpKSBcbiAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzLmZvcmNlQ29sbGlkZShmdW5jdGlvbihkKSB7IFxuICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoZC5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICBmb3JtYXR0ZWQgPSBOdW1iZXIoKGZvcm1hdHRlZC5yZXBsYWNlKFwiLFwiLCBcIlwiKSkpXG4gICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzE0KTsgXG4gICAgfSkpXG5cbiAgICBcbiAgICBcbiAgdmFyIHJhZGl1c1NjYWxlID0gZDMuc2NhbGVTcXJ0KCkuZG9tYWluKFszLDE1MDBdKS5yYW5nZShbMTAsOTBdKSAvLyBkb21haW4gcmVmZXJzIHRvIHRob3VzYW5kcyAoZG9sbGFycykgXG5cbiAgZDMucXVldWUoKVxuICAgIC5kZWZlcihkMy5jc3YsIFwiLi9JbmNvbWUuY3N2XCIpXG4gICAgLmF3YWl0KHJlYWR5KSBcbiAgXG5cbiAgZnVuY3Rpb24gcmVhZHkgKGVycm9yLCBkYXRhcG9pbnRzKSB7XG4gICAgICAgICBcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpLmRhdGEoZGF0YXBvaW50cylcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cmllc1wiKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoZC5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzIwKTsgXG4gICAgICAgICAgfSkgXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuMykgXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuaHRtbChgJHtkLkNvdW50cnl9IDxicj4gJCR7ZC5Nb250aGx5fWApLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnktdGV4dFwiKVxuICAgICAgICAgfSlcbiAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgIGQzLnNlbGVjdChcIi5jb3VudHJ5LXRleHRcIikucmVtb3ZlKClcbiAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNpbXVsYXRpb24ubm9kZXMoZGF0YXBvaW50cykgXG4gICAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgIFxuXG5cbiAgICAgICAgZnVuY3Rpb24gdGlja2VkKCkgeyAvL21hZ2ljIGJvaWxlcnBsYXRlLi4uLiBcbiAgICAgICAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyaWVzJylcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZC54XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGQueSBcbiAgICAgICAgICAgIH0gKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgIGZvcm1hdHRlZCA9IE51bWJlcigoZm9ybWF0dGVkLnJlcGxhY2UoXCIsXCIsIFwiXCIpKSlcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChmb3JtYXR0ZWQgPCBpbnB1dFswXS52YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gMTAwMCBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDUwMFxuICAgICAgICAgIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiLmNvbWJpbmUtYnV0dG9uXCIpXG4gICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCguMDUpKSBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ5XCIsIGQzLmZvcmNlWShoZWlnaHQvMikuc3RyZW5ndGgoLjA1KSkgXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGQzLnNlbGVjdChcIi50aXRsZVwiKVxuICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCgxKSkgXG4gICAgICAgICAgICBzaW11bGF0aW9uLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoaGVpZ2h0LzIpLnN0cmVuZ3RoKDEpKSBcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1maWVsZFwiKTtcbiAgICAgICAgaW5wdXRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGF0YXBvaW50cy5wdXNoKHtDb3VudHJ5OiBcInVzZXJcIiwgTW9udGhseTogYCR7aW5wdXRbMF0udmFsdWV9YH0pXG4gICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5jb3VudHJpZXNcIilcbiAgICAgICAgICAgICAuZGF0YShkYXRhcG9pbnRzKVxuICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYGNvdW50cmllc2ApXG4gICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgICAgICAgIHJldHVybiByYWRpdXNTY2FsZShmb3JtYXR0ZWQvMjApOyAgICAgICBcbiAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgaWYgKGQuQ291bnRyeSA9PT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXJsKCN1c2VyLWNpcmNsZSlcIiBcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiBcImJsYWNrXCIgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC5Db3VudHJ5ID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC41XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiAuM1xuICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgc2ltdWxhdGlvbi5ub2RlcyhkYXRhcG9pbnRzKSBcbiAgICAgICAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAgICAgc2ltdWxhdGlvbi5yZXN0YXJ0KCk7IFxuICAgICAgICAgICAgZ2VuZXJhdGVMZXNzR3JlYXRlclRleHQoKSAvL25vdCBpbXBvcnRhbnRcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGZvcmNlWCkuYWxwaGFUYXJnZXQoMC42KVxuICAgICAgICAgICAgaW5wdXRbMF0udmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGVzc0dyZWF0ZXJUZXh0ICgpIHtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgLnRleHQoYFlvdSdyZSBiZXR0ZXIgb2ZmIHRoYW4gJHtwZXJjZW50UmFuayhOdW1iZXIoaW5wdXRbMF0udmFsdWUpKX0lIG9mIHRoZSB3b3JsZGApXG4gICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZXNzZXJcIilcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVyY2VudFJhbmsoTnVtYmVyKGlucHV0WzBdLnZhbHVlKSkpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwZXJjZW50UmFuayhuKSB7XG4gICAgICAgICAgdmFyIGFycmF5ID0gW10gXG4gICAgICAgICAgZGF0YXBvaW50cy5mb3JFYWNoIChjb3VudHJ5ID0+IHtcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGNvdW50cnkuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgYXJyYXkucHVzaChmb3JtYXR0ZWQpIFxuICAgICAgICAgIH0pXG4gICAgICAgICBcbiAgICAgICAgICB2YXIgTCA9IDA7XG4gICAgICAgICAgdmFyIFMgPSAwO1xuICAgICAgICAgIHZhciBOID0gYXJyYXkubGVuZ3RoXG4gICAgICBcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChhcnJheVtpXSA8IG4pIHtcbiAgICAgICAgICAgICAgICAgIEwgKz0gMVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2ldID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICBTICs9IDFcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgdmFyIHBjdCA9IChMICsgKDAuNSAqIFMpKSAvIE5cbiAgICAgIFxuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBjdCAqIDEwMCkgXG4gICAgICB9XG5cbiAgfVxuXG59KSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=