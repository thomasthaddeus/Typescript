const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    var lkd = box.locked;
    if (lkd) {
        box.unlock();
    } try {
        body();
    } finally {
        box.lock();
    }
}
console.log(box.locked); //true

withBoxUnlocked(function () {
    box.content.push("gold piece");
});
console.log(box._content); // accessing array

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
    console.log(box.locked);
} finally {
    box.unlock();
    withBoxUnlocked(function () {
        box.content.push("gems of arab`i");
    console.log(box.locked); // F
    });
}
