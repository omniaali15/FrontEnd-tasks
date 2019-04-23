// Initialize a cache class
class Cache {
    constructor() {}
    // Storing this value in local storage
    set(key, value) {
        //assign defaultValue to defaultVal variable
        let defaultVal = localStorage.getItem(key);
        if (key && value) {
            // setting the value after test
            localStorage.setItem(key, value);
            //if  key is not found return default value.
            //the expected value 'hasan'
        } else return defaultVal;

    }
    // geting the key value has been setted
    get(key, defaultValue) {
        //check validation of key exist and not any thing else string
        if (key && typeof key == 'string') {
            //check that key aleady exist or not
            if (this.has(key)) return localStorage.getItem(key);
            else return defaultValue;
        } else throw "The key you pass is null or not string ";
    }
    // Determine if the given key exists in local storage
    //method with boolen return 
    has(key) {
        let expectedValue = localStorage.getItem(key);
        //validate the gitting value
        if (expectedValue != null) return true;
        return false;
    }
    //remove setted key from localStorage
    remove(key) {
        //check if key already exist or not
        if (this.has(key)) {
            console.info('this key :', key, 'Removed successfully');
            return localStorage.removeItem(key)
        } else console.log('This key already not Found')
    }
    //clear all values from localStorage
    clear() {
        return localStorage.clear()
    }
}

const cache = new Cache();

cache.set('name', '');
let name = cache.get('name', 'Hasan');
console.log(name)
console.log(cache.has('name'));


//omnia.remove('name');
/**setTimeout(() => {
	cache.clear()
}, 4000);
*/