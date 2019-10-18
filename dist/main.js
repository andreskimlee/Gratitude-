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

/***/ "./income.js":
/*!*******************!*\
  !*** ./income.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": {
    "Country": "Monaco",
    "Average income": "186,080 $"
  },
  "2": {
    "Country": "Liechtenstein",
    "Average income": "116,430 $"
  },
  "3": {
    "Country": "Bermuda",
    "Average income": "106,140 $"
  },
  "4": {
    "Country": "Switzerland",
    "Average income": "83,580 $"
  },
  "5": {
    "Country": "Norway",
    "Average income": "80,790 $"
  },
  "6": {
    "Country": "Macao",
    "Average income": "78,320 $"
  },
  "7": {
    "Country": "Luxembourg",
    "Average income": "69,420 $"
  },
  "8": {
    "Country": "Iceland",
    "Average income": "67,950 $"
  },
  "9": {
    "Country": "United States",
    "Average income": "62,850 $"
  },
  "10": {
    "Country": "Denmark",
    "Average income": "60,190 $"
  },
  "11": {
    "Country": "Ireland",
    "Average income": "59,770 $"
  },
  "12": {
    "Country": "Singapore",
    "Average income": "58,770 $"
  },
  "13": {
    "Country": "Sweden",
    "Average income": "55,040 $"
  },
  "14": {
    "Country": "Australia",
    "Average income": "53,190 $"
  },
  "15": {
    "Country": "Netherlands",
    "Average income": "51,260 $"
  },
  "16": {
    "Country": "Hong Kong",
    "Average income": "50,310 $"
  },
  "17": {
    "Country": "Austria",
    "Average income": "49,260 $"
  },
  "18": {
    "Country": "Finland",
    "Average income": "47,750 $"
  },
  "19": {
    "Country": "Germany",
    "Average income": "47,180 $"
  },
  "20": {
    "Country": "Belgium",
    "Average income": "45,340 $"
  },
  "21": {
    "Country": "Canada",
    "Average income": "44,860 $"
  },
  "22": {
    "Country": "Japan",
    "Average income": "41,340 $"
  },
  "23": {
    "Country": "United Kingdom",
    "Average income": "41,340 $"
  },
  "24": {
    "Country": "France",
    "Average income": "41,080 $"
  },
  "25": {
    "Country": "United Arab Emirates",
    "Average income": "41,010 $"
  },
  "26": {
    "Country": "Israel",
    "Average income": "40,850 $"
  },
  "27": {
    "Country": "New Zealand",
    "Average income": "40,820 $"
  },
  "28": {
    "Country": "Italy",
    "Average income": "33,540 $"
  },
  "29": {
    "Country": "South Korea",
    "Average income": "30,600 $"
  },
  "30": {
    "Country": "Spain",
    "Average income": "29,450 $"
  },
  "31": {
    "Country": "Portugal",
    "Average income": "21,680 $"
  },
  "32": {
    "Country": "Saudi Arabia",
    "Average income": "21,540 $"
  },
  "33": {
    "Country": "Czechia",
    "Average income": "20,260 $"
  },
  "34": {
    "Country": "Greece",
    "Average income": "19,600 $"
  },
  "35": {
    "Country": "Latvia",
    "Average income": "16,740 $"
  },
  "36": {
    "Country": "Chile",
    "Average income": "14,670 $"
  },
  "37": {
    "Country": "Hungary",
    "Average income": "14,590 $"
  },
  "38": {
    "Country": "Poland",
    "Average income": "14,150 $"
  },
  "39": {
    "Country": "Croatia",
    "Average income": "13,830 $"
  },
  "40": {
    "Country": "Venezuela",
    "Average income": "13,080 $"
  },
  "41": {
    "Country": "Argentina",
    "Average income": "12,370 $"
  },
  "42": {
    "Country": "Costa Rica",
    "Average income": "11,510 $"
  },
  "43": {
    "Country": "Romania",
    "Average income": "11,290 $"
  },
  "44": {
    "Country": "Malaysia",
    "Average income": "10,460 $"
  },
  "45": {
    "Country": "Turkey",
    "Average income": "10,380 $"
  },
  "46": {
    "Country": "Russia",
    "Average income": "10,230 $"
  },
  "47": {
    "Country": "China",
    "Average income": "9,470 $"
  },
  "48": {
    "Country": "Mexico",
    "Average income": "9,180 $"
  },
  "49": {
    "Country": "Brazil",
    "Average income": "9,140 $"
  },
  "50": {
    "Country": "Bulgaria",
    "Average income": "8,860 $"
  },
  "51": {
    "Country": "Kazakhstan",
    "Average income": "7,830 $"
  },
  "52": {
    "Country": "Equatorial Guinea",
    "Average income": "7,050 $"
  },
  "53": {
    "Country": "Thailand",
    "Average income": "6,610 $"
  },
  "54": {
    "Country": "Peru",
    "Average income": "6,530 $"
  },
  "55": {
    "Country": "Serbia",
    "Average income": "6,390 $"
  },
  "56": {
    "Country": "Colombia",
    "Average income": "6,190 $"
  },
  "57": {
    "Country": "Ecuador",
    "Average income": "6,120 $"
  },
  "58": {
    "Country": "South Africa",
    "Average income": "5,750 $"
  },
  "59": {
    "Country": "Bosnia and Herzegovina",
    "Average income": "5,690 $"
  },
  "60": {
    "Country": "Iran",
    "Average income": "5,470 $"
  },
  "61": {
    "Country": "Albania",
    "Average income": "4,860 $"
  },
  "62": {
    "Country": "Indonesia",
    "Average income": "3,840 $"
  },
  "63": {
    "Country": "Philippines",
    "Average income": "3,830 $"
  },
  "64": {
    "Country": "Morocco",
    "Average income": "3,090 $"
  },
  "65": {
    "Country": "Egypt",
    "Average income": "2,800 $"
  },
  "66": {
    "Country": "Ukraine",
    "Average income": "2,660 $"
  },
  "67": {
    "Country": "Vietnam",
    "Average income": "2,400 $"
  },
  "68": {
    "Country": "India",
    "Average income": "2,020 $"
  },
  "69": {
    "Country": "Nigeria",
    "Average income": "1,960 $"
  },
  "70": {
    "Country": "Bangladesh",
    "Average income": "1,750 $"
  },
  "71": {
    "Country": "Kenya",
    "Average income": "1,620 $"
  },
  "72": {
    "Country": "Pakistan",
    "Average income": "1,580 $"
  },
  "73": {
    "Country": "Ethiopia",
    "Average income": "790 $"
  },
  "74": {
    "Country": "Afghanistan",
    "Average income": "550 $"
  },
  "75": {
    "Country": "Democratic Republic of the Congo",
    "Average income": "490 $"
  },
  "76": {
    "Country": "Mozambique",
    "Average income": "440 $"
  },
  "77": {
    "Country": "Madagascar",
    "Average income": "440 $"
  }
});

/***/ }),

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
/* harmony import */ var _income__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../income */ "./income.js");



(function () {
  var width = 1500;
  var height = 765;
  var angles = d3.range(0, 2 * Math.PI, Math.PI / 200);
  var svg = d3.select("body").append("svg").attr("height", height).attr("width", width).append("g").attr("transform", "translate(0,0)");
  var simulation = d3.forceSimulation().force("x", d3.forceX(width / 2).strength(0.05)).force("y", d3.forceY(height / 2).strength(0.05)).force("collide", d3.forceCollide(function (d) {
    var formatted = d.Monthly.replace("$", "");
    formatted = Number(formatted.replace(",", ""));
    return radiusScale(formatted / 14);
  }));
  var radiusScale = d3.scaleSqrt().domain([3, 1500]).range([10, 90]); // domain refers to thousands (dollars) 

  d3.queue().defer(d3.csv, "income.csv").await(ready);

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
            return "white";
          } else {
            return "black";
          }
        }).style("opacity", .3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5jb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsImFuZ2xlcyIsImQzIiwicmFuZ2UiLCJNYXRoIiwiUEkiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VYIiwic3RyZW5ndGgiLCJmb3JjZVkiLCJmb3JjZUNvbGxpZGUiLCJkIiwiZm9ybWF0dGVkIiwiTW9udGhseSIsInJlcGxhY2UiLCJOdW1iZXIiLCJyYWRpdXNTY2FsZSIsInNjYWxlU3FydCIsImRvbWFpbiIsInF1ZXVlIiwiZGVmZXIiLCJjc3YiLCJhd2FpdCIsInJlYWR5IiwiZXJyb3IiLCJkYXRhcG9pbnRzIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwic3R5bGUiLCJvbiIsImh0bWwiLCJDb3VudHJ5IiwicmVtb3ZlIiwibm9kZXMiLCJ0aWNrZWQiLCJ4IiwieSIsImlucHV0IiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwicmVzdGFydCIsImdlbmVyYXRlTGVzc0dyZWF0ZXJUZXh0IiwiYWxwaGFUYXJnZXQiLCJ0ZXh0IiwicGVyY2VudFJhbmsiLCJjb25zb2xlIiwibG9nIiwibiIsImFycmF5IiwiZm9yRWFjaCIsImNvdW50cnkiLCJMIiwiUyIsIk4iLCJsZW5ndGgiLCJpIiwicGN0IiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QVgsQ0FBb0IsVUFBQUMsT0FBTyxFQUFJO0FBQzdCLFlBQUk3QyxTQUFTLEdBQUs2QyxPQUFPLENBQUM1QyxPQUFSLENBQWdCQyxPQUFoQixDQUF3QixHQUF4QixFQUE2QixFQUE3QixDQUFsQjtBQUNBRixpQkFBUyxHQUFHRyxNQUFNLENBQUVILFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixHQUFsQixFQUF1QixFQUF2QixDQUFGLENBQWxCO0FBQ0F5QyxhQUFLLENBQUNULElBQU4sQ0FBV2xDLFNBQVg7QUFDRCxPQUpEO0FBTUEsVUFBSThDLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJQyxDQUFDLEdBQUdMLEtBQUssQ0FBQ00sTUFBZDs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLEtBQUssQ0FBQ00sTUFBMUIsRUFBa0NDLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsWUFBSVAsS0FBSyxDQUFDTyxDQUFELENBQUwsR0FBV1IsQ0FBZixFQUFrQjtBQUNkSSxXQUFDLElBQUksQ0FBTDtBQUNILFNBRkQsTUFFTyxJQUFJSCxLQUFLLENBQUNPLENBQUQsQ0FBTCxLQUFhUixDQUFqQixFQUFvQjtBQUN2QkssV0FBQyxJQUFJLENBQUw7QUFDSCxTQUZNLE1BRUEsQ0FFTjtBQUNKOztBQUVELFVBQUlJLEdBQUcsR0FBRyxDQUFDTCxDQUFDLEdBQUksTUFBTUMsQ0FBWixJQUFrQkMsQ0FBNUI7QUFFQSxhQUFPOUQsSUFBSSxDQUFDa0UsS0FBTCxDQUFXRCxHQUFHLEdBQUcsR0FBakIsQ0FBUDtBQUNIO0FBRUo7QUFFRixDQXpLRCxJOzs7Ozs7Ozs7OztBQ0hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCIxXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJNb25hY29cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMTg2LDA4MCAkXCJcbiAgfSxcbiAgXCIyXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJMaWVjaHRlbnN0ZWluXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjExNiw0MzAgJFwiXG4gIH0sXG4gIFwiM1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiQmVybXVkYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxMDYsMTQwICRcIlxuICB9LFxuICBcIjRcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlN3aXR6ZXJsYW5kXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjgzLDU4MCAkXCJcbiAgfSxcbiAgXCI1XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJOb3J3YXlcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiODAsNzkwICRcIlxuICB9LFxuICBcIjZcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIk1hY2FvXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjc4LDMyMCAkXCJcbiAgfSxcbiAgXCI3XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJMdXhlbWJvdXJnXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjY5LDQyMCAkXCJcbiAgfSxcbiAgXCI4XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJJY2VsYW5kXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjY3LDk1MCAkXCJcbiAgfSxcbiAgXCI5XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJVbml0ZWQgU3RhdGVzXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjYyLDg1MCAkXCJcbiAgfSxcbiAgXCIxMFwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiRGVubWFya1wiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI2MCwxOTAgJFwiXG4gIH0sXG4gIFwiMTFcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIklyZWxhbmRcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNTksNzcwICRcIlxuICB9LFxuICBcIjEyXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJTaW5nYXBvcmVcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNTgsNzcwICRcIlxuICB9LFxuICBcIjEzXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJTd2VkZW5cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNTUsMDQwICRcIlxuICB9LFxuICBcIjE0XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJBdXN0cmFsaWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNTMsMTkwICRcIlxuICB9LFxuICBcIjE1XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJOZXRoZXJsYW5kc1wiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI1MSwyNjAgJFwiXG4gIH0sXG4gIFwiMTZcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkhvbmcgS29uZ1wiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI1MCwzMTAgJFwiXG4gIH0sXG4gIFwiMTdcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkF1c3RyaWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDksMjYwICRcIlxuICB9LFxuICBcIjE4XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJGaW5sYW5kXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjQ3LDc1MCAkXCJcbiAgfSxcbiAgXCIxOVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiR2VybWFueVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI0NywxODAgJFwiXG4gIH0sXG4gIFwiMjBcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkJlbGdpdW1cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDUsMzQwICRcIlxuICB9LFxuICBcIjIxXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJDYW5hZGFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDQsODYwICRcIlxuICB9LFxuICBcIjIyXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJKYXBhblwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI0MSwzNDAgJFwiXG4gIH0sXG4gIFwiMjNcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlVuaXRlZCBLaW5nZG9tXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjQxLDM0MCAkXCJcbiAgfSxcbiAgXCIyNFwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiRnJhbmNlXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjQxLDA4MCAkXCJcbiAgfSxcbiAgXCIyNVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDEsMDEwICRcIlxuICB9LFxuICBcIjI2XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJJc3JhZWxcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDAsODUwICRcIlxuICB9LFxuICBcIjI3XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJOZXcgWmVhbGFuZFwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI0MCw4MjAgJFwiXG4gIH0sXG4gIFwiMjhcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkl0YWx5XCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjMzLDU0MCAkXCJcbiAgfSxcbiAgXCIyOVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiU291dGggS29yZWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMzAsNjAwICRcIlxuICB9LFxuICBcIjMwXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJTcGFpblwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIyOSw0NTAgJFwiXG4gIH0sXG4gIFwiMzFcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlBvcnR1Z2FsXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjIxLDY4MCAkXCJcbiAgfSxcbiAgXCIzMlwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjIxLDU0MCAkXCJcbiAgfSxcbiAgXCIzM1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiQ3plY2hpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIyMCwyNjAgJFwiXG4gIH0sXG4gIFwiMzRcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkdyZWVjZVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxOSw2MDAgJFwiXG4gIH0sXG4gIFwiMzVcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkxhdHZpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxNiw3NDAgJFwiXG4gIH0sXG4gIFwiMzZcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkNoaWxlXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjE0LDY3MCAkXCJcbiAgfSxcbiAgXCIzN1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiSHVuZ2FyeVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxNCw1OTAgJFwiXG4gIH0sXG4gIFwiMzhcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlBvbGFuZFwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxNCwxNTAgJFwiXG4gIH0sXG4gIFwiMzlcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkNyb2F0aWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMTMsODMwICRcIlxuICB9LFxuICBcIjQwXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJWZW5lenVlbGFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMTMsMDgwICRcIlxuICB9LFxuICBcIjQxXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJBcmdlbnRpbmFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMTIsMzcwICRcIlxuICB9LFxuICBcIjQyXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJDb3N0YSBSaWNhXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjExLDUxMCAkXCJcbiAgfSxcbiAgXCI0M1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiUm9tYW5pYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxMSwyOTAgJFwiXG4gIH0sXG4gIFwiNDRcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIk1hbGF5c2lhXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjEwLDQ2MCAkXCJcbiAgfSxcbiAgXCI0NVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiVHVya2V5XCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjEwLDM4MCAkXCJcbiAgfSxcbiAgXCI0NlwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiUnVzc2lhXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjEwLDIzMCAkXCJcbiAgfSxcbiAgXCI0N1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiQ2hpbmFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiOSw0NzAgJFwiXG4gIH0sXG4gIFwiNDhcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIk1leGljb1wiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI5LDE4MCAkXCJcbiAgfSxcbiAgXCI0OVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiQnJhemlsXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjksMTQwICRcIlxuICB9LFxuICBcIjUwXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJCdWxnYXJpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI4LDg2MCAkXCJcbiAgfSxcbiAgXCI1MVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiS2F6YWtoc3RhblwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI3LDgzMCAkXCJcbiAgfSxcbiAgXCI1MlwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiRXF1YXRvcmlhbCBHdWluZWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNywwNTAgJFwiXG4gIH0sXG4gIFwiNTNcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlRoYWlsYW5kXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjYsNjEwICRcIlxuICB9LFxuICBcIjU0XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJQZXJ1XCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjYsNTMwICRcIlxuICB9LFxuICBcIjU1XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJTZXJiaWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNiwzOTAgJFwiXG4gIH0sXG4gIFwiNTZcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkNvbG9tYmlhXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjYsMTkwICRcIlxuICB9LFxuICBcIjU3XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJFY3VhZG9yXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjYsMTIwICRcIlxuICB9LFxuICBcIjU4XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJTb3V0aCBBZnJpY2FcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNSw3NTAgJFwiXG4gIH0sXG4gIFwiNTlcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNSw2OTAgJFwiXG4gIH0sXG4gIFwiNjBcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIklyYW5cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNSw0NzAgJFwiXG4gIH0sXG4gIFwiNjFcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkFsYmFuaWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNCw4NjAgJFwiXG4gIH0sXG4gIFwiNjJcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkluZG9uZXNpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIzLDg0MCAkXCJcbiAgfSxcbiAgXCI2M1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiUGhpbGlwcGluZXNcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMyw4MzAgJFwiXG4gIH0sXG4gIFwiNjRcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIk1vcm9jY29cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMywwOTAgJFwiXG4gIH0sXG4gIFwiNjVcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkVneXB0XCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjIsODAwICRcIlxuICB9LFxuICBcIjY2XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJVa3JhaW5lXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjIsNjYwICRcIlxuICB9LFxuICBcIjY3XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJWaWV0bmFtXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjIsNDAwICRcIlxuICB9LFxuICBcIjY4XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJJbmRpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIyLDAyMCAkXCJcbiAgfSxcbiAgXCI2OVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiTmlnZXJpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxLDk2MCAkXCJcbiAgfSxcbiAgXCI3MFwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiQmFuZ2xhZGVzaFwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCIxLDc1MCAkXCJcbiAgfSxcbiAgXCI3MVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiS2VueWFcIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiMSw2MjAgJFwiXG4gIH0sXG4gIFwiNzJcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIlBha2lzdGFuXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjEsNTgwICRcIlxuICB9LFxuICBcIjczXCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJFdGhpb3BpYVwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI3OTAgJFwiXG4gIH0sXG4gIFwiNzRcIjoge1xuICAgIFwiQ291bnRyeVwiOiBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjU1MCAkXCJcbiAgfSxcbiAgXCI3NVwiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ29cIixcbiAgICBcIkF2ZXJhZ2UgaW5jb21lXCI6IFwiNDkwICRcIlxuICB9LFxuICBcIjc2XCI6IHtcbiAgICBcIkNvdW50cnlcIjogXCJNb3phbWJpcXVlXCIsXG4gICAgXCJBdmVyYWdlIGluY29tZVwiOiBcIjQ0MCAkXCJcbiAgfSxcbiAgXCI3N1wiOiB7XG4gICAgXCJDb3VudHJ5XCI6IFwiTWFkYWdhc2NhclwiLFxuICAgIFwiQXZlcmFnZSBpbmNvbWVcIjogXCI0NDAgJFwiXG4gIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGluY29tZSBmcm9tIFwiLi4vaW5jb21lXCJcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgd2lkdGggPSAxNTAwO1xuICB2YXIgaGVpZ2h0ID0gNzY1O1xuICB2YXIgYW5nbGVzID0gZDMucmFuZ2UoMCwgMiAqIE1hdGguUEksIE1hdGguUEkgLyAyMDApO1xuXG4gIHZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpIFxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcbiAgXG5cbiAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKSBcbiAgICAuZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCgwLjA1KSkgXG4gICAgLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoaGVpZ2h0LzIpLnN0cmVuZ3RoKDAuMDUpKSBcbiAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzLmZvcmNlQ29sbGlkZShmdW5jdGlvbihkKSB7IFxuICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoZC5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICBmb3JtYXR0ZWQgPSBOdW1iZXIoKGZvcm1hdHRlZC5yZXBsYWNlKFwiLFwiLCBcIlwiKSkpXG4gICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzE0KTsgXG4gICAgfSkpXG5cbiAgICBcbiAgICBcbiAgdmFyIHJhZGl1c1NjYWxlID0gZDMuc2NhbGVTcXJ0KCkuZG9tYWluKFszLDE1MDBdKS5yYW5nZShbMTAsOTBdKSAvLyBkb21haW4gcmVmZXJzIHRvIHRob3VzYW5kcyAoZG9sbGFycykgXG5cbiAgZDMucXVldWUoKVxuICAgIC5kZWZlcihkMy5jc3YsIFwiaW5jb21lLmNzdlwiKVxuICAgIC5hd2FpdChyZWFkeSkgXG4gIFxuXG4gIGZ1bmN0aW9uIHJlYWR5IChlcnJvciwgZGF0YXBvaW50cykge1xuICAgICBcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpLmRhdGEoZGF0YXBvaW50cylcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cmllc1wiKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoZC5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICAgICAgZm9ybWF0dGVkID0gTnVtYmVyKChmb3JtYXR0ZWQucmVwbGFjZShcIixcIiwgXCJcIikpKVxuICAgICAgICAgICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzIwKTsgXG4gICAgICAgICAgfSkgXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuMykgXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuaHRtbChgJHtkLkNvdW50cnl9IDxicj4gJCR7ZC5Nb250aGx5fWApLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnktdGV4dFwiKVxuICAgICAgICAgfSlcbiAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgIGQzLnNlbGVjdChcIi5jb3VudHJ5LXRleHRcIikucmVtb3ZlKClcbiAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNpbXVsYXRpb24ubm9kZXMoZGF0YXBvaW50cykgXG4gICAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgIFxuXG5cbiAgICAgICAgZnVuY3Rpb24gdGlja2VkKCkgeyAvL21hZ2ljIGJvaWxlcnBsYXRlLi4uLiBcbiAgICAgICAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyaWVzJylcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZC54XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGQueSBcbiAgICAgICAgICAgIH0gKVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSAoKGQuTW9udGhseS5yZXBsYWNlKFwiJFwiLCBcIlwiKSkpIFxuICAgICAgICAgIGZvcm1hdHRlZCA9IE51bWJlcigoZm9ybWF0dGVkLnJlcGxhY2UoXCIsXCIsIFwiXCIpKSlcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChmb3JtYXR0ZWQgPCBpbnB1dFswXS52YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gMTAwMCBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDUwMFxuICAgICAgICAgIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiLmNvbWJpbmUtYnV0dG9uXCIpXG4gICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCguMDUpKSBcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ5XCIsIGQzLmZvcmNlWShoZWlnaHQvMikuc3RyZW5ndGgoLjA1KSkgXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGQzLnNlbGVjdChcIi50aXRsZVwiKVxuICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCh3aWR0aC8yKS5zdHJlbmd0aCgxKSkgXG4gICAgICAgICAgICBzaW11bGF0aW9uLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoaGVpZ2h0LzIpLnN0cmVuZ3RoKDEpKSBcbiAgICAgICAgICB9KVxuXG5cblxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtZmllbGRcIik7XG4gICAgICAgIGlucHV0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRhdGFwb2ludHMucHVzaCh7Q291bnRyeTogXCJ1c2VyXCIsIE1vbnRobHk6IGAke2lucHV0WzBdLnZhbHVlfWB9KVxuICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuY291bnRyaWVzXCIpXG4gICAgICAgICAgICAgLmRhdGEoZGF0YXBvaW50cylcbiAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGBjb3VudHJpZXNgKVxuICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gKChkLk1vbnRobHkucmVwbGFjZShcIiRcIiwgXCJcIikpKSBcbiAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IE51bWJlcigoZm9ybWF0dGVkLnJlcGxhY2UoXCIsXCIsIFwiXCIpKSlcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZm9ybWF0dGVkLzIwKTsgICAgICAgXG4gICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgIGlmIChkLkNvdW50cnkgPT09IFwidXNlclwiKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiBcIndoaXRlXCIgXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICByZXR1cm4gXCJibGFja1wiIFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuMykgXG4gICAgICAgICAgICBzaW11bGF0aW9uLm5vZGVzKGRhdGFwb2ludHMpIFxuICAgICAgICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgICAgICBzaW11bGF0aW9uLnJlc3RhcnQoKTsgXG4gICAgICAgICAgICBnZW5lcmF0ZUxlc3NHcmVhdGVyVGV4dCgpIC8vbm90IGltcG9ydGFudFxuICAgICAgICAgICAgc2ltdWxhdGlvbi5mb3JjZShcInhcIiwgZm9yY2VYKS5hbHBoYVRhcmdldCgwLjYpXG4gICAgICAgICAgICBpbnB1dFswXS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVMZXNzR3JlYXRlclRleHQgKCkge1xuICAgICAgICAgIGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAudGV4dChgWW91J3JlIGJldHRlciBvZmYgdGhhbiAke3BlcmNlbnRSYW5rKE51bWJlcihpbnB1dFswXS52YWx1ZSkpfSUgb2YgdGhlIHdvcmxkYClcbiAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlc3NlclwiKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50UmFuayhOdW1iZXIoaW5wdXRbMF0udmFsdWUpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBlcmNlbnRSYW5rKG4pIHtcbiAgICAgICAgICB2YXIgYXJyYXkgPSBbXSBcbiAgICAgICAgICBkYXRhcG9pbnRzLmZvckVhY2ggKGNvdW50cnkgPT4ge1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZCA9ICgoY291bnRyeS5Nb250aGx5LnJlcGxhY2UoXCIkXCIsIFwiXCIpKSkgXG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSBOdW1iZXIoKGZvcm1hdHRlZC5yZXBsYWNlKFwiLFwiLCBcIlwiKSkpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGZvcm1hdHRlZCkgXG4gICAgICAgICAgfSlcbiAgICAgICAgIFxuICAgICAgICAgIHZhciBMID0gMDtcbiAgICAgICAgICB2YXIgUyA9IDA7XG4gICAgICAgICAgdmFyIE4gPSBhcnJheS5sZW5ndGhcbiAgICAgIFxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGFycmF5W2ldIDwgbikge1xuICAgICAgICAgICAgICAgICAgTCArPSAxXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbaV0gPT09IG4pIHtcbiAgICAgICAgICAgICAgICAgIFMgKz0gMVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICB2YXIgcGN0ID0gKEwgKyAoMC41ICogUykpIC8gTlxuICAgICAgXG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocGN0ICogMTAwKSBcbiAgICAgIH1cblxuICB9XG5cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==