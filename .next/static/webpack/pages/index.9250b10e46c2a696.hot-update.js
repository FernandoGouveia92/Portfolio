"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/projectsListUtil.ts":
/*!***************************************!*\
  !*** ./src/utils/projectsListUtil.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_TriviaPicture_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/TriviaPicture.png */ \"./src/images/TriviaPicture.png\");\n/* harmony import */ var _images_trybewalletPicture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/trybewalletPicture.png */ \"./src/images/trybewalletPicture.png\");\n/* harmony import */ var _images_trybetunesPicture_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/trybetunesPicture.png */ \"./src/images/trybetunesPicture.png\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  title: 'Solar System',\n  id: 1,\n  type: 'Front-end',\n  authors: 'Fernando Gouveia',\n  description: 'Projeto que apresenta dados sobre o sistema solar que habitamos e as missões espaciais realizadas ao longo dos anos.',\n  stacks: ['React', 'Javascript', 'FetchAPI', 'CSS', 'HTML5'],\n  linkDeDeploy: 'https://solar-system-ten-phi.vercel.app',\n  imagem: '../images/solarSystemPicture.png'\n}, {\n  title: 'Trivia',\n  id: 2,\n  type: 'Front-end and tests',\n  authors: 'Fernando Gouveia, Carla Uyemura, João Gustavo, Juliana Álvares, Laís Massacesi',\n  description: 'Projeto que simula um jogo de trivias, possuindo scoreboard e perfil.',\n  stacks: ['React', 'Javascript', 'FetchAPI', 'CSS', 'HTML5', 'Redux', 'RTL', 'Styled Components'],\n  linkDeDeploy: 'https://project-trivia-gamma.vercel.app',\n  imagem: _images_TriviaPicture_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  title: 'Trybewallet',\n  id: 3,\n  type: 'Front-end',\n  authors: 'Fernando Gouveia',\n  description: 'Projeto que permite o usuário organizar uma tabela de gastos, podendo selecionar diferentes moedas de troca e que faz a converão automaticamente',\n  stacks: ['React', 'Javascript', 'FetchAPI', 'CSS', 'HTML5', 'ContextAPI', 'Hooks', 'Styled Components'],\n  linkDeDeploy: 'https://project-trybewallet-two.vercel.app',\n  imagem: _images_trybewalletPicture_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  title: 'Front-end Online Store',\n  id: 4,\n  type: 'Front-end and tests',\n  authors: 'Fernando Gouveia, Alexandre Bernardes, Henos Vinicius, Eduardo Fradique, Luan Victor',\n  description: 'Projeto que faz uso da API do Mercado Livre, para formular uma página de E-commerce, podendo filtrar os produtos por categorias ou por nome. Possui uma página de checkout.',\n  stacks: ['React', 'Javascript', 'FetchAPI', 'CSS', 'HTML5', 'Local Storage'],\n  linkDeDeploy: '',\n  imagem: 'link para imagem da app'\n}, {\n  title: 'Trybetunes',\n  id: 5,\n  type: 'Front-end',\n  authors: 'Fernando Gouveia, Alexandre Bernardes, Henos Vinicius, Eduardo Fradique, Luan Victor',\n  description: 'Projeto que faz uso da API do Mercado Livre, para formular uma página de E-commerce, podendo filtrar os produtos por categorias ou por nome. Possui uma página de checkout.',\n  stacks: ['React', 'Javascript', 'FetchAPI', 'CSS', 'HTML5', 'Local Storage'],\n  linkDeDeploy: 'https://project-trybetunes-x6sp.vercel.app',\n  imagem: _images_trybetunesPicture_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcHJvamVjdHNMaXN0VXRpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0RBQWUsQ0FDWDtFQUNJRyxLQUFLLEVBQUUsY0FEWDtFQUVJQyxFQUFFLEVBQUUsQ0FGUjtFQUdJQyxJQUFJLEVBQUUsV0FIVjtFQUlJQyxPQUFPLEVBQUUsa0JBSmI7RUFLSUMsV0FBVyxFQUFFLHNIQUxqQjtFQU1JQyxNQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxPQUEzQyxDQU5aO0VBT0lDLFlBQVksRUFBRSx5Q0FQbEI7RUFRSUMsTUFBTSxFQUFFO0FBUlosQ0FEVyxFQVdYO0VBQ0lQLEtBQUssRUFBRSxRQURYO0VBRUlDLEVBQUUsRUFBRSxDQUZSO0VBR0lDLElBQUksRUFBRSxxQkFIVjtFQUlJQyxPQUFPLEVBQUUsZ0ZBSmI7RUFLSUMsV0FBVyxFQUFFLHVFQUxqQjtFQU1JQyxNQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxPQUEzQyxFQUFvRCxPQUFwRCxFQUE2RCxLQUE3RCxFQUFvRSxtQkFBcEUsQ0FOWjtFQU9JQyxZQUFZLEVBQUUseUNBUGxCO0VBUUlDLE1BQU0sRUFBRVYsaUVBQWFBO0FBUnpCLENBWFcsRUFxQlg7RUFDSUcsS0FBSyxFQUFFLGFBRFg7RUFFSUMsRUFBRSxFQUFFLENBRlI7RUFHSUMsSUFBSSxFQUFFLFdBSFY7RUFJSUMsT0FBTyxFQUFFLGtCQUpiO0VBS0lDLFdBQVcsRUFBRSxrSkFMakI7RUFNSUMsTUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsRUFBb0MsS0FBcEMsRUFBMkMsT0FBM0MsRUFBb0QsWUFBcEQsRUFBa0UsT0FBbEUsRUFBMkUsbUJBQTNFLENBTlo7RUFPSUMsWUFBWSxFQUFFLDRDQVBsQjtFQVFJQyxNQUFNLEVBQUVULHNFQUFrQkE7QUFSOUIsQ0FyQlcsRUErQlg7RUFDSUUsS0FBSyxFQUFFLHdCQURYO0VBRUlDLEVBQUUsRUFBRSxDQUZSO0VBR0lDLElBQUksRUFBRSxxQkFIVjtFQUlJQyxPQUFPLEVBQUUsc0ZBSmI7RUFLSUMsV0FBVyxFQUFFLDZLQUxqQjtFQU1JQyxNQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxPQUEzQyxFQUFvRCxlQUFwRCxDQU5aO0VBT0lDLFlBQVksRUFBRSxFQVBsQjtFQVFJQyxNQUFNLEVBQUU7QUFSWixDQS9CVyxFQXlDWDtFQUNJUCxLQUFLLEVBQUUsWUFEWDtFQUVJQyxFQUFFLEVBQUUsQ0FGUjtFQUdJQyxJQUFJLEVBQUUsV0FIVjtFQUlJQyxPQUFPLEVBQUUsc0ZBSmI7RUFLSUMsV0FBVyxFQUFFLDZLQUxqQjtFQU1JQyxNQUFNLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxPQUEzQyxFQUFvRCxlQUFwRCxDQU5aO0VBT0lDLFlBQVksRUFBRSw0Q0FQbEI7RUFRSUMsTUFBTSxFQUFFUixxRUFBaUJBO0FBUjdCLENBekNXLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3Byb2plY3RzTGlzdFV0aWwudHM/NjExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29sYXJTeXN0ZW1QaWN0dXJlIGZyb20gJy4uL2ltYWdlcy9zb2xhclN5c3RlbVBpY3R1cmUucG5nJ1xyXG5pbXBvcnQgdHJpdmlhUGljdHVyZSBmcm9tICcuLi9pbWFnZXMvVHJpdmlhUGljdHVyZS5wbmcnXHJcbmltcG9ydCB0cnliZXdhbGxldFBpY3R1cmUgZnJvbSAnLi4vaW1hZ2VzL3RyeWJld2FsbGV0UGljdHVyZS5wbmcnXHJcbmltcG9ydCB0cnliZXR1bmVzUGljdHVyZSBmcm9tICcuLi9pbWFnZXMvdHJ5YmV0dW5lc1BpY3R1cmUucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU29sYXIgU3lzdGVtJyxcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0eXBlOiAnRnJvbnQtZW5kJyxcclxuICAgICAgICBhdXRob3JzOiAnRmVybmFuZG8gR291dmVpYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9qZXRvIHF1ZSBhcHJlc2VudGEgZGFkb3Mgc29icmUgbyBzaXN0ZW1hIHNvbGFyIHF1ZSBoYWJpdGFtb3MgZSBhcyBtaXNzw7VlcyBlc3BhY2lhaXMgcmVhbGl6YWRhcyBhbyBsb25nbyBkb3MgYW5vcy4nLFxyXG4gICAgICAgIHN0YWNrczogWydSZWFjdCcsICdKYXZhc2NyaXB0JywgJ0ZldGNoQVBJJywgJ0NTUycsICdIVE1MNSddLFxyXG4gICAgICAgIGxpbmtEZURlcGxveTogJ2h0dHBzOi8vc29sYXItc3lzdGVtLXRlbi1waGkudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgaW1hZ2VtOiAnLi4vaW1hZ2VzL3NvbGFyU3lzdGVtUGljdHVyZS5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVHJpdmlhJyxcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0eXBlOiAnRnJvbnQtZW5kIGFuZCB0ZXN0cycsXHJcbiAgICAgICAgYXV0aG9yczogJ0Zlcm5hbmRvIEdvdXZlaWEsIENhcmxhIFV5ZW11cmEsIEpvw6NvIEd1c3Rhdm8sIEp1bGlhbmEgw4FsdmFyZXMsIExhw61zIE1hc3NhY2VzaScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9qZXRvIHF1ZSBzaW11bGEgdW0gam9nbyBkZSB0cml2aWFzLCBwb3NzdWluZG8gc2NvcmVib2FyZCBlIHBlcmZpbC4nLFxyXG4gICAgICAgIHN0YWNrczogWydSZWFjdCcsICdKYXZhc2NyaXB0JywgJ0ZldGNoQVBJJywgJ0NTUycsICdIVE1MNScsICdSZWR1eCcsICdSVEwnLCAnU3R5bGVkIENvbXBvbmVudHMnXSxcclxuICAgICAgICBsaW5rRGVEZXBsb3k6ICdodHRwczovL3Byb2plY3QtdHJpdmlhLWdhbW1hLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGltYWdlbTogdHJpdmlhUGljdHVyZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RyeWJld2FsbGV0JyxcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0eXBlOiAnRnJvbnQtZW5kJyxcclxuICAgICAgICBhdXRob3JzOiAnRmVybmFuZG8gR291dmVpYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9qZXRvIHF1ZSBwZXJtaXRlIG8gdXN1w6FyaW8gb3JnYW5pemFyIHVtYSB0YWJlbGEgZGUgZ2FzdG9zLCBwb2RlbmRvIHNlbGVjaW9uYXIgZGlmZXJlbnRlcyBtb2VkYXMgZGUgdHJvY2EgZSBxdWUgZmF6IGEgY29udmVyw6NvIGF1dG9tYXRpY2FtZW50ZScsXHJcbiAgICAgICAgc3RhY2tzOiBbJ1JlYWN0JywgJ0phdmFzY3JpcHQnLCAnRmV0Y2hBUEknLCAnQ1NTJywgJ0hUTUw1JywgJ0NvbnRleHRBUEknLCAnSG9va3MnLCAnU3R5bGVkIENvbXBvbmVudHMnXSxcclxuICAgICAgICBsaW5rRGVEZXBsb3k6ICdodHRwczovL3Byb2plY3QtdHJ5YmV3YWxsZXQtdHdvLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGltYWdlbTogdHJ5YmV3YWxsZXRQaWN0dXJlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnQtZW5kIE9ubGluZSBTdG9yZScsXHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgdHlwZTogJ0Zyb250LWVuZCBhbmQgdGVzdHMnLFxyXG4gICAgICAgIGF1dGhvcnM6ICdGZXJuYW5kbyBHb3V2ZWlhLCBBbGV4YW5kcmUgQmVybmFyZGVzLCBIZW5vcyBWaW5pY2l1cywgRWR1YXJkbyBGcmFkaXF1ZSwgTHVhbiBWaWN0b3InLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvamV0byBxdWUgZmF6IHVzbyBkYSBBUEkgZG8gTWVyY2FkbyBMaXZyZSwgcGFyYSBmb3JtdWxhciB1bWEgcMOhZ2luYSBkZSBFLWNvbW1lcmNlLCBwb2RlbmRvIGZpbHRyYXIgb3MgcHJvZHV0b3MgcG9yIGNhdGVnb3JpYXMgb3UgcG9yIG5vbWUuIFBvc3N1aSB1bWEgcMOhZ2luYSBkZSBjaGVja291dC4nLFxyXG4gICAgICAgIHN0YWNrczogWydSZWFjdCcsICdKYXZhc2NyaXB0JywgJ0ZldGNoQVBJJywgJ0NTUycsICdIVE1MNScsICdMb2NhbCBTdG9yYWdlJ10sXHJcbiAgICAgICAgbGlua0RlRGVwbG95OiAnJyxcclxuICAgICAgICBpbWFnZW06ICdsaW5rIHBhcmEgaW1hZ2VtIGRhIGFwcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUcnliZXR1bmVzJyxcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICB0eXBlOiAnRnJvbnQtZW5kJyxcclxuICAgICAgICBhdXRob3JzOiAnRmVybmFuZG8gR291dmVpYSwgQWxleGFuZHJlIEJlcm5hcmRlcywgSGVub3MgVmluaWNpdXMsIEVkdWFyZG8gRnJhZGlxdWUsIEx1YW4gVmljdG9yJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2pldG8gcXVlIGZheiB1c28gZGEgQVBJIGRvIE1lcmNhZG8gTGl2cmUsIHBhcmEgZm9ybXVsYXIgdW1hIHDDoWdpbmEgZGUgRS1jb21tZXJjZSwgcG9kZW5kbyBmaWx0cmFyIG9zIHByb2R1dG9zIHBvciBjYXRlZ29yaWFzIG91IHBvciBub21lLiBQb3NzdWkgdW1hIHDDoWdpbmEgZGUgY2hlY2tvdXQuJyxcclxuICAgICAgICBzdGFja3M6IFsnUmVhY3QnLCAnSmF2YXNjcmlwdCcsICdGZXRjaEFQSScsICdDU1MnLCAnSFRNTDUnLCAnTG9jYWwgU3RvcmFnZSddLFxyXG4gICAgICAgIGxpbmtEZURlcGxveTogJ2h0dHBzOi8vcHJvamVjdC10cnliZXR1bmVzLXg2c3AudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgaW1hZ2VtOiB0cnliZXR1bmVzUGljdHVyZVxyXG4gICAgfVxyXG5dIl0sIm5hbWVzIjpbInRyaXZpYVBpY3R1cmUiLCJ0cnliZXdhbGxldFBpY3R1cmUiLCJ0cnliZXR1bmVzUGljdHVyZSIsInRpdGxlIiwiaWQiLCJ0eXBlIiwiYXV0aG9ycyIsImRlc2NyaXB0aW9uIiwic3RhY2tzIiwibGlua0RlRGVwbG95IiwiaW1hZ2VtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/projectsListUtil.ts\n"));

/***/ })

});