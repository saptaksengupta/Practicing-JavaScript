'use strict'

var requiredDomBindings = {
    searchBox: document.getElementById('search-box')
}

var SomeServiceModule = (function(){
    var getDataFromSomeWhere = function() {
        return {id: 1, name: 'Saptak Sengupta'}
    };

    return {
        fetchData: getDataFromSomeWhere
    }
}());


var SomeModule = (function (bindedDoms, someService){

    function _somePrivateMethod() {
        console.log('In Private Method');
    };

    var sumPublicMethod = function ( ){
        _somePrivateMethod();
        var data = someService.fetchData();
        console.log(data);
    };


    //Module Revealing
    return {
        publicMethod: sumPublicMethod
    }

}(requiredDomBindings, SomeServiceModule));


SomeModule.publicMethod();