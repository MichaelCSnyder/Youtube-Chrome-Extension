chrome.runtime.onInstalled.addListener(function() {
  // ...

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // changeInfo object: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated#changeInfo
    console.log(tab.url.includes("search"));
    if (changeInfo.status === 'complete' && tab.url.includes("youtube") && !tab.url.includes("search")) {
        console.log(tab);
        chrome.tabs.sendMessage(tabId, {
        message: 'youtubeVisited'
      });
    }
  })
});