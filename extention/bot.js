const data = [
  {'msg': "Hello, I'm your new digital friend.", 'time': 10},
  {'msg': "You will find out more about me later, but first I will navigate you through Ourspace.", 'time': 10},
];

const composeSelector = '._2S1VP';
const buttonSelector = '._2lkdt';
const listSelector = '._9tCEa';
const msgSelector = 'span[dir=ltr]';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMessage(msg) {
  const bci = document.querySelector(composeSelector);
  bci.innerHTML = msg;
  bci.dispatchEvent(new Event('input', { bubbles: true }));
  document.querySelector(buttonSelector).click();
}

function getUser(node) {
  const nodeList = node.querySelectorAll('.copyable-text');
  if(nodeList.length > 0) {
    const txt = nodeList[0].getAttribute('data-pre-plain-text');
    const re = new RegExp('].*: $');
    const matches = re.exec(txt);
    if(matches.length > 0) {
      return matches[0].replace('] ', '').replace(': ', '');
    }
  }
}

function handleMessage(mutations) {
  if(1 === mutations.length) {
    const mut = mutations[0];
    if(1 === mut.addedNodes.length) {
      const node = mut.addedNodes[0];
      const msgStr = node.querySelector(msgSelector).innerHTML;
      const userStr = getUser(node);
      if(userStr != 'JBG') {
        sendMessage(userStr + ' said ' + msgStr);
      }
    }
  }
}

function startObserver() {
  console.log('Observer started');
  const b = document.querySelector(listSelector); 
  const observer = new MutationObserver(handleMessage);
  observer.observe(b, { childList: true });
}

async function bot()  {
//  for(const i = 0; i < data.length; i++) {
//    sendMessage(data[i].msg);
//    await sleep(data[i].time * 1000);
//  }

  startObserver();

  sendMessage('BOT STARTED...');
   setInterval(() => {
    sendMessage('PING: ' + new Date());
  }, 1000 * 60 * 60);

}

