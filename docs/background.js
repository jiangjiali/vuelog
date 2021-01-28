chrome.browserAction.onClicked.addListener(function(tab){
  var newURL = chrome.runtime.getURL('index.html');
  chrome.tabs.create({ url: newURL });
});