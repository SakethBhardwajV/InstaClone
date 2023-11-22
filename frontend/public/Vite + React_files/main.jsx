import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=719a69d3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=719a69d3"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=719a69d3"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "/node_modules/.vite/deps/react-router-dom.js?v=719a69d3";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=719a69d3";
import store from "/src/store.js";
import App from "/src/App.jsx";
import "/src/globals.css?t=1700603663667";
import AuthRoute from "/src/components/AuthRoute.jsx";
import LoginScreen from "/src/screens/LoginScreen.jsx?t=1700594000820";
import RegisterScreen from "/src/screens/RegisterScreen.jsx?t=1700594601935";
import HomeScreen from "/src/screens/HomeScreen.jsx?t=1700607034069";
import PostScreen from "/src/screens/PostScreen.jsx?t=1700607034069";
import NewPostScreen from "/src/screens/NewPostScreen.jsx?t=1700607034069";
const router = createBrowserRouter(
  createRoutesFromElements(
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
      lineNumber: 22,
      columnNumber: 30
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(LoginScreen, {}, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 23,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/register", element: /* @__PURE__ */ jsxDEV(RegisterScreen, {}, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 24,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/post/:id", element: /* @__PURE__ */ jsxDEV(PostScreen, {}, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 25,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { index: true, path: "/", element: /* @__PURE__ */ jsxDEV(HomeScreen, {}, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 28,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/new", element: /* @__PURE__ */ jsxDEV(NewPostScreen, {}, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 29,
        columnNumber: 35
      }, this) }, void 0, false, {
        fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
      lineNumber: 22,
      columnNumber: 5
    }, this)
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "V:/Web Dev/Projects/Instagram Clone/frontend/src/main.jsx",
    lineNumber: 37,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUI2QjtBQXJCN0IsT0FBT0EsV0FBVztBQUNsQixPQUFPQyxjQUFjO0FBQ3JCO0FBQUEsRUFDRUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUNQLFNBQVNDLGdCQUFnQjtBQUN6QixPQUFPQyxXQUFXO0FBQ2xCLE9BQU9DLFNBQVM7QUFDaEIsT0FBTztBQUNQLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsaUJBQWlCO0FBQ3hCLE9BQU9DLG9CQUFvQjtBQUMzQixPQUFPQyxnQkFBZ0I7QUFDdkIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLE9BQU9DLG1CQUFtQjtBQUUxQixNQUFNQyxTQUFTYjtBQUFBQSxFQUNiQztBQUFBQSxJQUNFLHVCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUksR0FDM0I7QUFBQSw2QkFBQyxTQUFNLE1BQUssVUFBUyxTQUFTLHVCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThDO0FBQUEsTUFDOUMsdUJBQUMsU0FBTSxNQUFLLGFBQVksU0FBUyx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWUsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFvRDtBQUFBLE1BQ3BELHVCQUFDLFNBQU0sTUFBSyxhQUFZLFNBQVMsdUJBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFXLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0Q7QUFBQSxNQUdoRCx1QkFBQyxTQUFNLE9BQU8sTUFBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVcsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFxRDtBQUFBLE1BQ3JELHVCQUFDLFNBQU0sTUFBSyxRQUFPLFNBQVMsdUJBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFjLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBOEM7QUFBQSxTQVBoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVUE7QUFBQSxFQUNGO0FBQ0Y7QUFFQUYsU0FBU2UsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsWUFBUyxPQUNSLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0IsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBQ0YiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsImNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyIsIlJvdXRlIiwiUm91dGVyUHJvdmlkZXIiLCJQcm92aWRlciIsInN0b3JlIiwiQXBwIiwiQXV0aFJvdXRlIiwiTG9naW5TY3JlZW4iLCJSZWdpc3RlclNjcmVlbiIsIkhvbWVTY3JlZW4iLCJQb3N0U2NyZWVuIiwiTmV3UG9zdFNjcmVlbiIsInJvdXRlciIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsXG4gIFJvdXRlLFxuICBSb3V0ZXJQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUuanNcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEF1dGhSb3V0ZSBmcm9tIFwiLi9jb21wb25lbnRzL0F1dGhSb3V0ZS5qc3hcIjtcbmltcG9ydCBMb2dpblNjcmVlbiBmcm9tIFwiLi9zY3JlZW5zL0xvZ2luU2NyZWVuLmpzeFwiO1xuaW1wb3J0IFJlZ2lzdGVyU2NyZWVuIGZyb20gXCIuL3NjcmVlbnMvUmVnaXN0ZXJTY3JlZW4uanN4XCI7XG5pbXBvcnQgSG9tZVNjcmVlbiBmcm9tIFwiLi9zY3JlZW5zL0hvbWVTY3JlZW4uanN4XCI7XG5pbXBvcnQgUG9zdFNjcmVlbiBmcm9tIFwiLi9zY3JlZW5zL1Bvc3RTY3JlZW4uanN4XCI7XG5pbXBvcnQgTmV3UG9zdFNjcmVlbiBmcm9tIFwiLi9zY3JlZW5zL05ld1Bvc3RTY3JlZW4uanN4XCI7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyhcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8QXBwIC8+fT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luU2NyZWVuIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXJTY3JlZW4gLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wb3N0LzppZFwiIGVsZW1lbnQ9ezxQb3N0U2NyZWVuIC8+fSAvPlxuXG4gICAgICB7LyogPFJvdXRlIHBhdGg9XCJcIiBlbGVtZW50PXs8QXV0aFJvdXRlIC8+fT4gKi99XG4gICAgICA8Um91dGUgaW5kZXg9e3RydWV9IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWVTY3JlZW4gLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9uZXdcIiBlbGVtZW50PXs8TmV3UG9zdFNjcmVlbiAvPn0gLz5cblxuICAgICAgey8qIDwvUm91dGU+ICovfVxuICAgIDwvUm91dGU+XG4gIClcbik7XG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6IlY6L1dlYiBEZXYvUHJvamVjdHMvSW5zdGFncmFtIENsb25lL2Zyb250ZW5kL3NyYy9tYWluLmpzeCJ9