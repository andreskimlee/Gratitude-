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

  d3.queue().defer(d3.csv, "./income.csv").await(ready);

  function ready(error, datapoints) {
    debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VYIiwic3RyZW5ndGgiLCJmb3JjZVkiLCJmb3JjZUNvbGxpZGUiLCJkIiwiZm9ybWF0dGVkIiwiTW9udGhseSIsInJlcGxhY2UiLCJOdW1iZXIiLCJyYWRpdXNTY2FsZSIsInNjYWxlU3FydCIsImRvbWFpbiIsInJhbmdlIiwicXVldWUiLCJkZWZlciIsImNzdiIsImF3YWl0IiwicmVhZHkiLCJlcnJvciIsImRhdGFwb2ludHMiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJzdHlsZSIsIm9uIiwiaHRtbCIsIkNvdW50cnkiLCJyZW1vdmUiLCJub2RlcyIsInRpY2tlZCIsIngiLCJ5IiwiaW5wdXQiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJyZXN0YXJ0IiwiZ2VuZXJhdGVMZXNzR3JlYXRlclRleHQiLCJhbHBoYVRhcmdldCIsInRleHQiLCJwZXJjZW50UmFuayIsImNvbnNvbGUiLCJsb2ciLCJuIiwiYXJyYXkiLCJmb3JFYWNoIiwiY291bnRyeSIsIkwiLCJTIiwiTiIsImxlbmd0aCIsImkiLCJwY3QiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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ZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIHdpZHRoID0gMTUwMDtcbiAgdmFyIGhlaWdodCA9IDc2NTtcblxuICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICBzdmdcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcbiBcbiAgICBcbiAgc3ZnLmFwcGVuZChcImRlZnNcIilcbiAgICAuYXBwZW5kKFwicGF0dGVyblwiKVxuICAgIC5hdHRyKFwiaWRcIiwgXCJ1c2VyLWNpcmNsZVwiKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgLmF0dHIoXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwib2JqZWN0Qm91bmRpbmdCb3hcIilcbiAgICAuYXBwZW5kKFwiaW1hZ2VcIilcbiAgICAuYXR0cihcImhlaWdodFwiLCAxKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgMSlcbiAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIilcbiAgICAuYXR0cihcInhsaW5rOmhyZWZcIiwgXCIuL3NyYy9pbWFnZXMvY2lyY2xlLmdpZlwiKTtcblxuXG4gIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkgXG4gICAgLmZvcmNlKFwieFwiLCBkMy5mb3JjZVgod2lkdGgvMikuc3RyZW5ndGgoMC4wNSkpIFxuICAgIC5mb3JjZShcInlcIiwgZDMuZm9yY2VZKGhlaWdodC8yKS5zdHJlbmd0aCgwLjA1KSkgXG4gICAgLmZvcmNlKFwiY29sbGlkZVwiLCBkMy5mb3JjZUNvbGxpZGUoZnVuY3Rpb24oZCkgeyBcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgcmV0dXJuIHJhZGl1c1NjYWxlKGZvcm1hdHRlZC8xNCk7IFxuICAgIH0pKVxuXG4gICAgXG4gICAgXG4gIHZhciByYWRpdXNTY2FsZSA9IGQzLnNjYWxlU3FydCgpLmRvbWFpbihbMywxNTAwXSkucmFuZ2UoWzEwLDkwXSkgLy8gZG9tYWluIHJlZmVycyB0byB0aG91c2FuZHMgKGRvbGxhcnMpIFxuXG4gIGQzLnF1ZXVlKClcbiAgICAuZGVmZXIoZDMuY3N2LCBcIi4vaW5jb21lLmNzdlwiKVxuICAgIC5hd2FpdChyZWFkeSkgXG4gIFxuXG4gIGZ1bmN0aW9uIHJlYWR5IChlcnJvciwgZGF0YXBvaW50cykge1xuICAgICAgICBkZWJ1Z2dlciBcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpLmRhdGEoZGF0YXBvaW50cylcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cmllc1wiKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoZC5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzIwKTsgXG4gICAgICAgICAgfSkgXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuMykgXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuaHRtbChgJHtkLkNvdW50cnl9IDxicj4gJCR7ZC5Nb250aGx5fWApLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnktdGV4dFwiKVxuICAgICAgICAgfSlcbiAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgIGQzLnNlbGVjdChcIi5jb3VudHJ5LXRleHRcIikucmVtb3ZlKClcbiAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNpbXVsYXRpb24ubm9kZXMoZGF0YXBvaW50cykgXG4gICAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgIFxuXG5cbiAgICAgICAgZnVuY3Rpb24gdGlja2VkKCkgeyAvL21hZ2ljIGJvaWxlcnBsYXRlLi4uLiBcbiAgICAgICAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyaWVzJylcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZC54XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGQueSBcbiAgICAgICAgICAgIH0gKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgIGZvcm1hdHRlZCA9IE51bWJlcigoZm9ybWF0dGVkLnJlcGxhY2UoXCIsXCIsIFwiXCIpKSlcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChmb3JtYXR0ZWQgPCBpbnB1dFswXS52YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gMTAwMCBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDUwMFxuICAgICAgICAgIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiLmNvbWJpbmUtYnV0dG9uXCIpXG4gICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCguMDUpKSBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ5XCIsIGQzLmZvcmNlWShoZWlnaHQvMikuc3RyZW5ndGgoLjA1KSkgXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGQzLnNlbGVjdChcIi50aXRsZVwiKVxuICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCgxKSkgXG4gICAgICAgICAgICBzaW11bGF0aW9uLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoaGVpZ2h0LzIpLnN0cmVuZ3RoKDEpKSBcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1maWVsZFwiKTtcbiAgICAgICAgaW5wdXRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGF0YXBvaW50cy5wdXNoKHtDb3VudHJ5OiBcInVzZXJcIiwgTW9udGhseTogYCR7aW5wdXRbMF0udmFsdWV9YH0pXG4gICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5jb3VudHJpZXNcIilcbiAgICAgICAgICAgICAuZGF0YShkYXRhcG9pbnRzKVxuICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYGNvdW50cmllc2ApXG4gICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgICAgICAgIHJldHVybiByYWRpdXNTY2FsZShmb3JtYXR0ZWQvMjApOyAgICAgICBcbiAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgaWYgKGQuQ291bnRyeSA9PT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXJsKCN1c2VyLWNpcmNsZSlcIiBcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiBcImJsYWNrXCIgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC5Db3VudHJ5ID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC41XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiAuM1xuICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgc2ltdWxhdGlvbi5ub2RlcyhkYXRhcG9pbnRzKSBcbiAgICAgICAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAgICAgc2ltdWxhdGlvbi5yZXN0YXJ0KCk7IFxuICAgICAgICAgICAgZ2VuZXJhdGVMZXNzR3JlYXRlclRleHQoKSAvL25vdCBpbXBvcnRhbnRcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGZvcmNlWCkuYWxwaGFUYXJnZXQoMC42KVxuICAgICAgICAgICAgaW5wdXRbMF0udmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGVzc0dyZWF0ZXJUZXh0ICgpIHtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgLnRleHQoYFlvdSdyZSBiZXR0ZXIgb2ZmIHRoYW4gJHtwZXJjZW50UmFuayhOdW1iZXIoaW5wdXRbMF0udmFsdWUpKX0lIG9mIHRoZSB3b3JsZGApXG4gICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZXNzZXJcIilcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVyY2VudFJhbmsoTnVtYmVyKGlucHV0WzBdLnZhbHVlKSkpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwZXJjZW50UmFuayhuKSB7XG4gICAgICAgICAgdmFyIGFycmF5ID0gW10gXG4gICAgICAgICAgZGF0YXBvaW50cy5mb3JFYWNoIChjb3VudHJ5ID0+IHtcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGNvdW50cnkuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgYXJyYXkucHVzaChmb3JtYXR0ZWQpIFxuICAgICAgICAgIH0pXG4gICAgICAgICBcbiAgICAgICAgICB2YXIgTCA9IDA7XG4gICAgICAgICAgdmFyIFMgPSAwO1xuICAgICAgICAgIHZhciBOID0gYXJyYXkubGVuZ3RoXG4gICAgICBcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChhcnJheVtpXSA8IG4pIHtcbiAgICAgICAgICAgICAgICAgIEwgKz0gMVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2ldID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICBTICs9IDFcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgdmFyIHBjdCA9IChMICsgKDAuNSAqIFMpKSAvIE5cbiAgICAgIFxuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBjdCAqIDEwMCkgXG4gICAgICB9XG5cbiAgfVxuXG59KSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=