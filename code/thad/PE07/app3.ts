class ProcessIdentity<T,U>
{
    private value: T;
    private message: U;

    setKeyValue(value: T, message: U): void {
        this.value = value;
        this.message = message;
    }

    display(): void {
        console.log(`value = ${this.value}, message = ${this.message}`);
    }
}

let kvp1 = new ProcessIdentity<number, string>();
kvp1.setKeyValue(100, "ABC");
kvp1.display();
