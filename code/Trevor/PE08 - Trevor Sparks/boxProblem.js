const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnclocked(cb) {
  try {
    box.unlock();
    cb();
  } catch (error) {
  } finally {
    box.lock();
  }
}
