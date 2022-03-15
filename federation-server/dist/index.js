/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startApolloServer = void 0;
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const resolvers_1 = __webpack_require__(/*! src/graphql/resolvers */ "./src/graphql/resolvers.ts");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const startApolloServer = async (app) => {
    const typeDefs = (0, apollo_server_express_1.gql)(fs_1.default.readFileSync('src/graphql/schema.graphql', {
        encoding: 'utf8',
    }));
    const gqlSrever = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers: resolvers_1.resolvers });
    await gqlSrever.start();
    gqlSrever.applyMiddleware({ app });
};
exports.startApolloServer = startApolloServer;


/***/ }),

/***/ "./src/graphql/resolvers.ts":
/*!**********************************!*\
  !*** ./src/graphql/resolvers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        get: async () => {
            return {};
        },
    },
    Get: {
        res: () => {
            return {
                text: 'hello GraphGL !!!!',
                number: 12345,
            };
        },
    },
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const graphql_1 = __webpack_require__(/*! ./graphql */ "./src/graphql/index.ts");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = 3000;
(0, graphql_1.startApolloServer)(app);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFvQjtBQUVwQixtR0FBa0Q7QUFDbEQsMEdBQTBEO0FBR25ELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQ3RELE1BQU0sUUFBUSxHQUFHLCtCQUFHLEVBQ2xCLFlBQUUsQ0FBQyxZQUFZLENBQUMsNEJBQTRCLEVBQUU7UUFDNUMsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQyxDQUNILENBQUM7SUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLG9DQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFULHFCQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzVELE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQVRXLHlCQUFpQixxQkFTNUI7Ozs7Ozs7Ozs7Ozs7O0FDYlcsaUJBQVMsR0FBYztJQUNsQyxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkYsaUZBQThCO0FBQzlCLHdFQUF3QjtBQUN4QixpRkFBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQUcscUJBQU8sR0FBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLCtCQUFpQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2ZIOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2dyYXBocWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2dyYXBocWwvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL3NlcnZlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vc2VydmVyL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VydmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VydmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBFeHByZXNzIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICdzcmMvZ3JhcGhxbC9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuXG4vLyBBcG9sbG9cbmV4cG9ydCBjb25zdCBzdGFydEFwb2xsb1NlcnZlciA9IGFzeW5jIChhcHA6IEV4cHJlc3MpID0+IHtcbiAgY29uc3QgdHlwZURlZnMgPSBncWwoXG4gICAgZnMucmVhZEZpbGVTeW5jKCdzcmMvZ3JhcGhxbC9zY2hlbWEuZ3JhcGhxbCcsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgfSlcbiAgKTtcbiAgY29uc3QgZ3FsU3JldmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG4gIGF3YWl0IGdxbFNyZXZlci5zdGFydCgpO1xuICBncWxTcmV2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pO1xufTtcbiIsImltcG9ydCB7IFJlc29sdmVycyB9IGZyb20gJ3NyYy9ncmFwaHFsL2dlbmVyYXRlZC9ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyczogUmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIGdldDogYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG4gIH0sXG4gIEdldDoge1xuICAgIHJlczogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ2hlbGxvIEdyYXBoR0wgISEhIScsXG4gICAgICAgIG51bWJlcjogMTIzNDUsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCB7IHN0YXJ0QXBvbGxvU2VydmVyIH0gZnJvbSAnLi9ncmFwaHFsJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuY29uc3QgcG9ydCA9IDMwMDA7XG5cbnN0YXJ0QXBvbGxvU2VydmVyKGFwcCk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9gKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=