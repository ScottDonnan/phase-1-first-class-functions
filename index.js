function receivesAFunction(callbackFunction){
    callbackFunction();
}

function returnsANamedFunction(){
    function newFunction(){}
    return newFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}
    

