// window._ = require("lodash");
// /**
//  * We'll load jQuery and the Bootstrap jQuery plugin which provides support
//  * for JavaScript based Bootstrap features such as modals and tabs. This
//  * code may be modified to fit the specific needs of your application.
//  */

try {
    require('bootstrap');
} catch (e) {
    console.log(e);
}
import AOS from "aos";
import "alpinejs";
AOS.init({
});
window.moment = require("moment");

