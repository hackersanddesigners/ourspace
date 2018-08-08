const composeSelector = '._2S1VP'
const buttonSelector = '._35EW6'
const listSelector = '._9tCEa'
const msgSelector = 'span[dir=ltr]'
const emojiSelector = '._2x9bY'
const imgSelector = '._3v3PK'
const gifSelector = '._3CnDa'

let started = false
let running = false
let survey = false
let results = []

const ws = new WebSocket("wss://bsqd.me/socket/websocket?vsn=2.0.0")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sendMessage(msg) {
  const bci = document.querySelector(composeSelector)
  bci.innerHTML = msg
  bci.dispatchEvent(new Event('input', { bubbles: true }))
  document.querySelector(buttonSelector).click()
}

function getUser(node) {
  const nodeList = node.querySelectorAll('.copyable-text')
  if(nodeList.length > 0) {
    const txt = nodeList[0].getAttribute('data-pre-plain-text')
    const re = new RegExp('].*: $')
    const matches = re.exec(txt)
    if(matches.length > 0) {
      return matches[0].replace('] ', '').replace(': ', '')
    }
  }
}

function getScript(levelNum) {
  switch(levelNum) {
    case 2: return level2
    case 3: return level3
    case 4: return level4
    default: return level1
  }
}

function randomResult() {
  if(results.length > 0) {
    return results[Math.floor(Math.random() * Math.floor(results.length))]
  } else return '...'
}

function countResults(str) {
  let count = 0;
  results.forEach(r => {
    if(r.toLowerCase().indexOf(str) !== -1) ++count
  })
  return count
}

function substitute(match, msg) {
  const fn = match.replace('[', '').replace(']', '')
  const args = fn.split(' ')
  if(args[0] === "random") return msg.replace(match, randomResult())
  else if(args[0] === "count") return msg.replace(match, countResults(args[1]))
  else return msg
}

function processMsg(msg) {
  const matches = /\[.*\]/.exec(msg)
  if(matches && matches.length > 0) {
    survey = false;
    return substitute(matches[0], msg)
  }
  else return msg
}

async function perform(levelNum) {
  running = true
  const data = getScript(levelNum)
  for(let i = 0; i < data.length && running; i++) {

    // Setup survey - JBG
    if(data[i].survey) {
      survey = true
      results = []
      sendMessage(data[i].msg)
    } else {
      msg = processMsg(data[i].msg)
      sendMessage(msg)
    }

    await sleep(data[i].time * 1000)

    // Eval survey - JBG
    //if(data[i].survey) {
    //  sendMessage('' + results.length + ' responses to survey')
    //}

  }
  running = false
}

function handleMsgNode(node, msgNode) {
  const msgStr = msgNode.innerHTML
  const userStr = getUser(node)
  if(msgStr && userStr && userStr != 'Ourspace') {
    if(msgStr.toLowerCase().indexOf('bot perform') !== -1) {
      if(msgStr.toLowerCase().indexOf('level 1') !== -1 && !running) perform(1)
    } else if(msgStr.toLowerCase().indexOf('bot stop') !== -1) {
      running = false
    } else if(survey) {
      results.push(msgStr) 
    } else {
      sendMessage(userStr + ' said ' + msgStr)
    }
  }
}

function handleEmojiNode(node, emojiNode) {
  const emoji = emojiNode.querySelector('img').getAttribute('alt')
  const userStr = getUser(node)
  sendMessage(userStr + ' said ' + emoji)
}

function handleMessage(mutations) {
  for(let i = 0; i < mutations.length; i++) {
    const mut = mutations[i]
    for(let j = 0; j < mut.addedNodes.length; j++) {
      const node = mut.addedNodes[j]
      const msgNode = node.querySelector(msgSelector)
      const emojiNode = node.querySelector(emojiSelector)
      const imgNode = node.querySelector(imgSelector)
      const gifNode = node.querySelector(gifSelector)

      if(msgNode) handleMsgNode(node, msgNode)
      else if(emojiNode) handleEmojiNode(node, emojiNode) 
      else if(imgNode) sendMessage('Nice image!')
      else if(gifNode) sendMessage('Nice gif!')
    }
  }
}

function startObserver() {
  const b = document.querySelector(listSelector) 
  const observer = new MutationObserver(handleMessage)
  observer.observe(b, { childList: true })
}


async function bot()  {
  if(!started) {
    startObserver()
    sendMessage('BOT STARTED...')
    setInterval(() => {
      sendMessage('PING: ' + new Date())
    }, 1000 * 60 * 60)
  }
}

