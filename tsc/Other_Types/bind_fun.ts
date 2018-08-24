
type FullName = {firstname:string,secondname:string}

function getFullName(fullName:FullName,sign:string) {
    return fullName.firstname + fullName.secondname + sign;
}

function changeName(fullName: FullName) {
    return getFullName.bind(null,fullName);
}

function secondName(fullName: FullName, sign: string) {
    return changeName(fullName)(sign);
}

console.log(changeName({ firstname: 'pawel', secondname: 'keng' })('kot'))
console.log(secondName({firstname:'s',secondname:'d'},'kot'))