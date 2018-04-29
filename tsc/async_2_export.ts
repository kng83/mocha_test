
class Cat {
    name: string = 'kot';

    whatName() {
        return this.name;
    }
}

class SecondPet {
    name: string = 'pies';
    whatName() {
        return this.name;
    }
}

let p: Promise<{ first: Cat, second: SecondPet }> = new Promise((resolve) => {
    setTimeout(() => {
        let cat = new Cat();
        let dog = new SecondPet()
        resolve({ first: cat, second: dog })
    }, 2000)
});

export let { first, second }: { first: Cat, second: SecondPet } = function () {
    p.then((value: any) => {
        first = value.first;
        second = value.second;
    });
    return { first, second }
}()

export let { one, two }: { one: Cat, two: SecondPet } = function () {
    (async function () {
        one = (await p).first
        two = (await p).second;
    })()
    return { one: one, two: two }
}();




