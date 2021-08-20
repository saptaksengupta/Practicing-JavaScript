var User = function (userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.email = userDetails.email;
};

var smartTable = (function () {
    var self = this;
    self.$tableBody = document.getElementById("table-body");
    self.$hiddenRowTemplate = document.getElementsByClassName("hidden-row-template")[0];
    self.data = null;
    self.users = [];
    self.bindedUsers = [];
    self.selectedIds = [];

    var init = function (initials) {
        self.data = initials.data;
        prepareAndRenderUsers(self.data);
    }

    function prepareAndRenderUsers(users) {
        var rows = '';
        for (var i = 0; i < users.length; i++) {
            self.users.push(new User(users[i]));
            self.$tableBody.appendChild(generateTableRow(self.users[i]));
        }
    }


    function generateTableRow(userInfo) {
        var clonedRow = self.$hiddenRowTemplate.cloneNode(true);
        clonedRow.setAttribute('data-id', userInfo.id);
        clonedRow.querySelector("#name").value = userInfo.name;
        clonedRow.querySelector("#email").value = userInfo.email;
        return clonedRow;
    }


    function onInputBlur(event, propName) {
        var value = event.target.value;
        setUserInfoById(getParentIdByElem(event), propName, value);
    }


    function setUserInfoById(id, prop, value) {
        var userInfo = self.users.find(elem => elem.id == id);
        userInfo[prop] = value;
    }

    function onToggleSelect(event, value) {
        var parentId = getParentIdByElem(event);
        if (value) {
            addUserId(parentId);
        } else {
            self.selectedIds = removeId(parentId);
        }
    }

    function onSearchUsers(query) {
        var searchedUsers = self.data.filter(user => user.name.search(query) !== -1);
        makeUserEmpty();
        prepareAndRenderUsers(searchedUsers);
    }

    function onSubmitUsers() {
        for (var i = 0; i < self.selectedIds.length; i++) {
            console.log(getUserDetailsById(self.selectedIds[i]));
        }
    }

    function getUserDetailsById(userId) {
        var userDetails = self.users.find(elem => elem.id == userId);
        return userDetails;
    }

    function addUserId(userId) {
        self.selectedIds.push(userId);
    }

    function removeId(userId) {
        var newArr = self.selectedIds.filter(elem => elem != userId);
        return [...newArr];
    }

    function getParentIdByElem(event) {
        return event.currentTarget.closest(".hidden-row-template").getAttribute('data-id');
    }

    function makeUserEmpty() {
        self.users = [];
        self.$tableBody.innerHTML = "";
    }

    return {
        init: init,
        onBlur: onInputBlur,
        onToggleSelect: onToggleSelect,
        onSubmit: onSubmitUsers,
        doSearch: onSearchUsers
    }

})();



var utils = (function (table) {

    fetchUserData().then(resp => {
        table.init({
            data: resp
        });
    }).catch(err => {
        console.log(err);
    })

    function fetchUserData() {
        return makeRequest("./data.json", 'GET').then(resp => resp.json());
    }

    function makeRequest(url, type) {
        return fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    function doSearch() {
        var query = document.getElementById("search-input").value;
        smartTable.doSearch(query);
    }

    var debounced = function (callBack, delay) {
        var timer;
        return function () {
            clearTimeout(timer);
            var context = this;
            timer = setTimeout(function () {
                callBack.call(context);
            }, delay);
        }
    }

    var onSearch = debounced(doSearch, 1000);

    // event listeners
    function onBlurInputHandler(event, propName) {
        smartTable.onBlur(event, propName);
    }

    function onChangeSelect(event) {
        var value = event.target.checked;
        smartTable.onToggleSelect(event, value);
    }

    function onSubmit(event) {
        smartTable.onSubmit();
    }

    function attachEventlisteners() {
        document.getElementById("search-input").addEventListener('keyup', onSearch);
    }

    attachEventlisteners();

    return {
        onBlurInputHandler: onBlurInputHandler,
        onChangeSelect: onChangeSelect,
        onSubmit: onSubmit
    }
})(smartTable);