var UserService10 = (function () {
    function UserService10(animal) {
        this.user = 'user';
        this.user = this.user + animal;
    }
    return UserService10;
}());
var MessageService10 = (function () {
    function MessageService10(animal) {
        this.message = 'message';
        this.message = this.message + animal;
    }
    return MessageService10;
}());
function makingServices(servicesObj) {
    return createServices.bind(null, servicesObj);
}
var dbKot = 'kot';
function createServices(servicesObj, dbKot) {
    var output = {};
    for (var k in servicesObj) {
        output[k] = new servicesObj[k](dbKot);
    }
    return output;
}
var services = makingServices({ userService: UserService10, messageService: MessageService10 })(dbKot);
console.log(services);
//# sourceMappingURL=bind_function_with_class.js.map