function getLocation() {
  let pathname =  window.location.pathname;
  if (pathname === '') pathname = '/';
  return { pathname };
}

function push(path, callback) {
  window.history.pushState(null, null, path);
  if (callback) callback();
}

window.tinyHistory = {
  getLocation,
  push,
};
