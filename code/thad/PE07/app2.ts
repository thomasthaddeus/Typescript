interface ProcessIdentity<T, U> {
    process(value: T, message: U): void;
};

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    process(value: X, message: Y): void {
        console.log(`Key = ${value}, val= ${message}`);
    }
}

let process: processIdentity<number, string> = new processIdentity();
process.process(100, 'Stuff');