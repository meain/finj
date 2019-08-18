let fontAltered = false;
const css = "* { font-family: 'Operator Mono' !important; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  if (fontAltered) {
    browser.tabs.removeCSS({ code: css }).then(null, onError);
    fontAltered = false;
  } else {
    browser.tabs.insertCSS({ code: css }).then(null, onError);
    fontAltered = true;
  }
});
