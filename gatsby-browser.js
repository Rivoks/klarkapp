/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import ReactGA from 'react-ga';
ReactGA.initialize('UA-180544186-1', { debug: true });
ReactGA.pageview(window.location.href);

// exports.onRouteUpdate = (state) => {
//   ReactGA.pageview(state.pathname);
// };