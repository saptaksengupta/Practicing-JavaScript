'use strict'

var requiredDomBindings = {
    searchBox: document.getElementById('search-box'),
    nameInput: document.getElementById('name'),
    nameContainer: document.getElementById('name-container')
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

    function _init(){
        _attachListeners();    
    }

    function _attachListeners(){
        bindedDoms.nameInput.addEventListener('keyup', onNameChanged);
    }

    function _somePrivateMethod() {
        console.log('In Private Method');
    };

    var onNameChanged = function(){
        bindedDoms.nameContainer.innerHTML = bindedDoms.nameInput.value;
    }

    var sumPublicMethod = function ( ){
        _somePrivateMethod();
        var data = someService.fetchData();
        console.log(data);
    };


    //Module Revealing
    return {
        init: _init,
        publicMethod: sumPublicMethod
    }

}(requiredDomBindings, SomeServiceModule));


SomeModule.init();