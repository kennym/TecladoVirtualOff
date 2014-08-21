/* Script to inject the javascript file into the page */
var s = document.createElement('script');

s.src = chrome.extension.getURL('sites/visionbanco.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
