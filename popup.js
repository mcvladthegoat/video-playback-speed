const  onClickHandler = (e) => {
  chrome.tabs.executeScript(null, {
    code: `var a = document.getElementsByTagName('video');for(let i=0;i<a.length;i++){a[i].playbackRate = ${e.target.getAttribute('data-rate')}}`
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', () => {
  let rateItems = document.querySelectorAll('div[data-rate]');
  for (let i = 0; i < rateItems.length; i++) {
    rateItems[i].addEventListener('click', onClickHandler);
  }
});
