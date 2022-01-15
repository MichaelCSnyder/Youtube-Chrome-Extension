chrome.runtime.onInstalled.addListener(function() {

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.includes("youtube") && !tab.url.includes("watch") && !tab.url.includes("search")) {
        console.log("on youtube homepage");
        chrome.tabs.sendMessage(tabId, {
            message: 'youtubeHomeVisited'
        });
    } else if (tab.url.includes("youtube") && tab.url.includes("watch")) {
        console.log("watching youtube video");
        chrome.tabs.sendMessage(tabId, {
            message: 'watchingVideo'
        })
    }
  })
});

