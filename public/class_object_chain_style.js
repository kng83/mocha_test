var UserCtrl = (function () {
    function UserCtrl(service) {
        this.service = service;
    }
    return UserCtrl;
}());
var MessageCtrl = (function () {
    function MessageCtrl(service) {
        this.service = service;
    }
    return MessageCtrl;
}());
var UserService = (function () {
    function UserService() {
    }
    return UserService;
}());
var MessageService = (function () {
    function MessageService() {
    }
    return MessageService;
}());
var Bootstrap = (function () {
    function Bootstrap() {
    }
    Bootstrap.prototype.makeServices = function (obj) {
        Object.assign(this, { services: obj });
        return this;
    };
    Bootstrap.prototype.makeControllers = function (obj) {
        return obj;
    };
    Bootstrap.prototype.createControllers = function (fn) {
        var value = this.services;
        return fn(value);
    };
    return Bootstrap;
}());
var b = new Bootstrap();
var me = b.makeServices({ userService: new UserService(), messageService: new MessageService() });
var ce = me.createControllers(function (value) {
    return { userCtrl: value.userService };
});
console.log(ce);
//# sourceMappingURL=class_object_chain_style.js.map