function getFullName(fullName, sign) {
    return fullName.firstname + fullName.secondname + sign;
}
function changeName(fullName) {
    return getFullName.bind(null, fullName);
}
function secondName(fullName, sign) {
    return changeName(fullName)(sign);
}
console.log(changeName({ firstname: 'pawel', secondname: 'keng' })('kot'));
console.log(secondName({ firstname: 's', secondname: 'd' }, 'kot'));
//# sourceMappingURL=bind_fun.js.map