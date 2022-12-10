// Task #4
var ProcessIdentityClass = /** @class */ (function () {
    function ProcessIdentityClass(value, message) {
        this.value = value;
        this.message = message;
    }
    ProcessIdentityClass.prototype.getIdentity = function () {
        console.log(this.message);
        return this.value;
    };
    return ProcessIdentityClass;
}());
var processorInstance1;
processorInstance1 = new ProcessIdentityClass(0, "hello");
var output = processorInstance1.getIdentity();
console.log(output);
