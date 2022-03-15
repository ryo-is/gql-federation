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
const federation_1 = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
const startApolloServer = async (app) => {
    const typeDefs = (0, apollo_server_express_1.gql)(fs_1.default.readFileSync('src/graphql/schema.graphql', {
        encoding: 'utf8',
    }));
    const gqlSrever = new apollo_server_express_1.ApolloServer({
        schema: (0, federation_1.buildFederatedSchema)([{ typeDefs, resolvers: resolvers_1.resolvers }]),
    });
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
        user: async (_, { id }) => {
            return {
                id,
                name: 'test',
            };
        },
    },
    User: {
        __resolveReference(user) {
            return {
                id: user.id,
                name: 'test',
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

/***/ "@apollo/federation":
/*!*************************************!*\
  !*** external "@apollo/federation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@apollo/federation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFvQjtBQUVwQixtR0FBa0Q7QUFDbEQsMEdBQTBEO0FBQzFELHlGQUEwRDtBQUduRCxNQUFNLGlCQUFpQixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsRUFBRTtJQUN0RCxNQUFNLFFBQVEsR0FBRywrQkFBRyxFQUNsQixZQUFFLENBQUMsWUFBWSxDQUFDLDRCQUE0QixFQUFFO1FBQzVDLFFBQVEsRUFBRSxNQUFNO0tBQ2pCLENBQUMsQ0FDSCxDQUFDO0lBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxvQ0FBWSxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxxQ0FBb0IsRUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBVCxxQkFBUyxFQUFFLENBQUMsQ0FBQztLQUN4RCxDQUFDLENBQUM7SUFDSCxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFYVyx5QkFBaUIscUJBVzVCOzs7Ozs7Ozs7Ozs7OztBQ2hCVyxpQkFBUyxHQUFjO0lBQ2xDLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN4QixPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDO1FBQ0osQ0FBQztLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osa0JBQWtCLENBQUMsSUFBSTtZQUNyQixPQUFPO2dCQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNiLENBQUM7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJGLGlGQUE4QjtBQUM5Qix3RUFBd0I7QUFDeEIsaUZBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFHLHFCQUFPLEdBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJLEdBQUUsQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWhELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQiwrQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUV2QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNmSDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2dyYXBocWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2dyYXBocWwvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL3NlcnZlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAYXBvbGxvL2ZlZGVyYXRpb25cIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vc2VydmVyL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VydmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VydmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBFeHByZXNzIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICdzcmMvZ3JhcGhxbC9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgYnVpbGRGZWRlcmF0ZWRTY2hlbWEgfSBmcm9tICdAYXBvbGxvL2ZlZGVyYXRpb24nO1xuXG4vLyBBcG9sbG9cbmV4cG9ydCBjb25zdCBzdGFydEFwb2xsb1NlcnZlciA9IGFzeW5jIChhcHA6IEV4cHJlc3MpID0+IHtcbiAgY29uc3QgdHlwZURlZnMgPSBncWwoXG4gICAgZnMucmVhZEZpbGVTeW5jKCdzcmMvZ3JhcGhxbC9zY2hlbWEuZ3JhcGhxbCcsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgfSlcbiAgKTtcbiAgY29uc3QgZ3FsU3JldmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBidWlsZEZlZGVyYXRlZFNjaGVtYShbeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH1dKSxcbiAgfSk7XG4gIGF3YWl0IGdxbFNyZXZlci5zdGFydCgpO1xuICBncWxTcmV2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pO1xufTtcbiIsImltcG9ydCB7IFJlc29sdmVycyB9IGZyb20gJ3NyYy9ncmFwaHFsL2dlbmVyYXRlZC9ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyczogUmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIHVzZXI6IGFzeW5jIChfLCB7IGlkIH0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lOiAndGVzdCcsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIFVzZXI6IHtcbiAgICBfX3Jlc29sdmVSZWZlcmVuY2UodXNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IHsgc3RhcnRBcG9sbG9TZXJ2ZXIgfSBmcm9tICcuL2dyYXBocWwnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG5jb25zdCBwb3J0ID0gMzAwMDtcblxuc3RhcnRBcG9sbG9TZXJ2ZXIoYXBwKTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2ZlZGVyYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=