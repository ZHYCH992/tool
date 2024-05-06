import debounce from './debounce';
import queryParams from './queryParams';
import sCookie from './sCookie';
import sLoading from './sLoading';
import sLocalStorage from './sLocalStorage/index.js';
import throttle from './throttle';
import websiteContext from './websiteContext/index.js';

window.debounce = debounce;
window.throttle = throttle;
window.sLocalStorage = sLocalStorage;
window.sCookie = sCookie;
window.queryParams = queryParams;
window.sLoading = sLoading;
window.websiteContext = websiteContext;
