<<<<<<< HEAD
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve().then(() => require('web-vitals')).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
<<<<<<< HEAD
export default reportWebVitals;
=======
exports.default = reportWebVitals;
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
