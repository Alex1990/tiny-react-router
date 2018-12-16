/**
 * 获取当前 URL，此处只考虑 pathname，先不考虑 search，hash 等信息
 */
function getLocation() {
  let pathname =  window.location.pathname;
  if (pathname === '') pathname = '/';
  return { pathname };
}

/**
 * 更新 URL，并通知更新
 */
function push(path, callback) {
  window.history.pushState(null, null, path);
  if (callback) callback();
}

window.tinyHistory = {
  getLocation,
  push,
};
