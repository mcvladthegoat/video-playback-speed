const  onClickHandler = (e) => {
  chrome.tabs.executeScript(null, {
    code: `document.getElementsByTagName('video')[0].playbackRate = ${e.target.getAttribute('data-rate')}`
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', () => {
  let rateItems = document.querySelectorAll('div[data-rate]');
  for (let i = 0; i < rateItems.length; i++) {
    rateItems[i].addEventListener('click', onClickHandler);
  }
});
