var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getSome = function () {
        console.log('get');
    };
    return UserService;
}());
var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.getEles = function () {
        console.log('soem');
    };
    return MessageService;
}());
var LittleService = (function () {
    function LittleService() {
    }
    return LittleService;
}());
var UserCtrl = (function () {
    function UserCtrl(service, message) {
        this.service = service;
        this.message = message;
    }
    UserCtrl.makeInstance = function () {
        var service = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            service[_i] = arguments[_i];
        }
        return new (this.bind.apply(this, [void 0].concat(service)))();
    };
    return UserCtrl;
}());
var BossCtrl = (function (_super) {
    __extends(BossCtrl, _super);
    function BossCtrl(service, message, littleService) {
        var _this = _super.call(this, service, message) || this;
        _this.service = service;
        _this.message = message;
        _this.littleService = littleService;
        _this.name = 'Big boss';
        return _this;
    }
    return BossCtrl;
}(UserCtrl));
var some = UserCtrl.makeInstance(new UserService(), new MessageService);
var boss = BossCtrl.makeInstance(new UserService, new MessageService, new LittleService);
//# sourceMappingURL=singleton_with_type_args.js.map