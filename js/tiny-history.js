function TinyHistory() {
  this.listeners = [];
}

TinyHistory.prototype.getLocation = function () {
  let pathname =  window.location.pathname;
  if (pathname === '') pathname = '/';
  return { pathname };
};

TinyHistory.prototype.listen = function (listener) {
  this.listeners.push(listener);
};

TinyHistory.prototype.unlisten = function (listener) {
  const index = this.listeners.indexOf(listener);
  this.listeners.splice(index, 1);
};

TinyHistory.prototype._notify = function () {
  for (let i = 0; i < this.listeners.length; i++) {
    this.listeners[i]();
  }
};

TinyHistory.prototype.push = function (path) {
  window.history.pushState(null, null, path);
  this._notify();
};

window.TinyHistory = TinyHistory;
