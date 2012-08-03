chrome.webRequest.onBeforeRequest.addListener(
    function(d) {

        var redirUrl = chrome.extension.getURL('/nope.htm')+'?url='+encodeURIComponent(d.url);
        return ( localStorage["kookie"]==="1" ) ? {cancel:false} : {redirectUrl: redirUrl };

    },
    {urls: ["*://*.youtube.com/*", "*://youtube.com/*", "*://youtu.be/*"], types:["main_frame"] },
    ["blocking"]
);

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {

    if (request.logout == "yes") {
        localStorage["kookie"]=0;
        sendResponse({refresh: "yes"});
    }
});