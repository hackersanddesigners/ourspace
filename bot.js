function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMessage(msg) {
  var bci = document.querySelector("._2S1VP");
  bci.innerHTML = msg;
  bci.dispatchEvent(new Event('input', { bubbles: true }));
  document.querySelector("._35EW6").click();
}

async function bot() {
  for(var i = 0; i < data.length; i++) {
    sendMessage(data[i].msg);
    await sleep(data[i].time * 1000);
  }
}

