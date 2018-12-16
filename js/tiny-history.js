/**
 * 获取当前 URL，此处只考虑 pathname，先不考虑 search，hash 等信息
 */
function getLocation() {
  let pathname =  window.location.pathname;
  if (pathname === '') pathname = '/';
  return { pathname };
}

// 观察者列表
const listeners = [];

// 添加一个观察者
function add(listener) {
  listeners.push(listener);
}

// 移除一个观察者
function remove(listener) {
  const index = listeners.indexOf(listener);
  listeners.splice(index, 1);
}

// 通知观察者更新
function notify() {
  for (let i = 0; i < listeners.length; i++) {
    listeners[i]();
  }
}

function bindPopState() {
  window.addEventListener('popstate', notify);
}

function unbindPopState() {
  window.removeEventListener('popstate', notify);
}

/**
 * 更新 URL，并通知更新
 */
function push(path) {
  window.history.pushState(null, null, path);
  notify();
}

window.tinyHistory = {
  getLocation,
  push,
  add,
  remove,
  bindPopState,
  unbindPopState,
};
