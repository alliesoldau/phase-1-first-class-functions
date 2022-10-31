function receivesAFunction(frogName) {
    frogName();
}

function frogName() {
    console.log("All my frogs are named Freddie");
}

function returnsANamedFunction() {
    let namedFunction = function() {
        console.log("I am a named function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log("I am an anonymous function");
    }
}