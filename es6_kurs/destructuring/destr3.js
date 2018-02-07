//destructuring arrays
//wyciagamy z tablicy poszczegolne elementy
//W przciwienstwie do destrukturyzacji obiektu const{obj} tu
//dajemy const [element]=tablica;

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

//przy destrukturyzowaniu tablic pierwszy element
//ktory wyciagamy bedzie naszym pierwszym elementem tablicy
const [name,name2,name3,name4] = companies;
console.log(name); //'Google
console.log(name2);// 'Facebook
console.log(name3);//'Uber'
console.log(typeof name4);//undefined
console.log(companies);//[tablica]

//stare podejscie by bylo
const firstCompany = companies[0];
console.log(firstCompany);

//damy tu spread operator
const [nazwa,...rest] = companies;
console.log(rest);// ['Facebook','Uber']
