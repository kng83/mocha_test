var SomeService = (function () {
    function SomeService(name) {
        this.name = name;
    }
    return SomeService;
}());
var UserService = (function () {
    function UserService(name) {
        this.name = name;
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
    function MessageService(name) {
        this.name = name;
        this.layer = 'piko';
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
var UserCtrl = (function () {
    function UserCtrl(service) {
        this.service = service;
    }
    UserCtrl.makeInstance = function () {
        var services = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            services[_i] = arguments[_i];
        }
        return new (this.bind.apply(this, [void 0].concat(services)))();
    };
    return UserCtrl;
}());
var MessageCtrl = (function () {
    function MessageCtrl(service) {
        this.service = service;
    }
    MessageCtrl.makeInstance = function () {
        var services = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            services[_i] = arguments[_i];
        }
        return new (this.bind.apply(this, [void 0].concat(services)))();
    };
    return MessageCtrl;
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
var dbKot = 'dbKot';
var someService = new SomeService('dd');
var mCtlr = MessageCtrl.makeInstance(someService);
function bindedInstance(ctrlClass, services, db) {
    var serviceWithDb = [];
    services.forEach(function (service) {
        serviceWithDb.push(service(db));
    });
    return ctrlClass.makeInstance.apply(ctrlClass, serviceWithDb);
}
function makeCtrl(ctrlClass) {
    var services = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        services[_i - 1] = arguments[_i];
    }
    return bindedInstance.bind(null, ctrlClass, services);
}
var makeC = makeCtrl(UserCtrl, bs.userService(dbKot), bs.messageService(dbKot));
var obj = {
    userCtrl: makeCtrl(UserCtrl, bs.userService),
    messageCtrl: makeCtrl(MessageCtrl, bs.messageService)
};
console.log(obj.messageCtrl(dbKot));
//# sourceMappingURL=class_binding_advance.js.map