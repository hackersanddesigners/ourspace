function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMessage(msg) {
  var bci = document.querySelector(".pluggable-input-body");
  bci.innerHTML = msg;
  bci.dispatchEvent(new Event('input', { bubbles: true }));
  document.querySelector(".compose-btn-send").click();
}

async function bot() {
  for(var i = 0; i < data.length; i++) {
    sendMessage(data[i].msg);
    await sleep(data[i].time * 1000);
  }
}

