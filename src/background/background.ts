const isThisBackgroundScript = true;
console.log('isThisBackgroundScript', isThisBackgroundScript);

// chrome.runtime.onMessage.addListener((msg, sender) => {
//   // First, validate the message's structure.
//   if (msg.from === 'content' && msg.subject === 'showPageAction') {
//     // Enable the page-action for the requesting tab.
//     console.log('hi');
//     console.log(sender.tab);
//     chrome.pageAction.show(sender.tab.id);
//   }
// });

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.sync.set({ color: '#3aa757' }, function () {
//     console.log('The color is green.');
//   });
// });

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.executeScript(null, {
//     code: "alert(document.querySelector('p').innerText)",
//   });
// });
