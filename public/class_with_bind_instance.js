var UserService = (function () {
    function UserService(name, secondName) {
        this.name = name;
        this.secondName = secondName;
    }
    UserService.makeInstance = function () {
        var services = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            services[_i] = arguments[_i];
        }
        return new (this.bind.apply(this, [void 0].concat(services)))();
    };
    return UserService;
}());
var MessageService = (function () {
    function MessageService(name, secondName) {
        this.name = name;
        this.secondName = secondName;
    }
    MessageService.makeInstance = function () {
        var services = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            services[_i] = arguments[_i];
        }
        return new (this.bind.apply(this, [void 0].concat(services)))();
    };
    return MessageService;
}());
function bindedServices(servicesObj) {
    var output = {};
    for (var k in servicesObj) {
        output[k] = servicesObj[k].makeInstance.bind(servicesObj[k]);
    }
    return output;
}
var bs = bindedServices({
    userService: UserService,
    messageService: MessageService
});
var ww = bs.userService('some');
console.log(ww);
//# sourceMappingURL=class_with_bind_instance.js.map