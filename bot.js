var sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var sendMessage = function(msg) {
  var bci = document.querySelector(".block-compose .input");
  bci.innerHTML = msg;
  bci.dispatchEvent(new Event('input', { bubbles: true }));
  document.querySelector(".block-compose .compose-btn-send").click();
}

var bot = async function() {
  for(var i = 0; i < data.length; i++) {
    sendMessage(data[i].msg);
    await sleep(data[i].time * 1000);
  }
}

