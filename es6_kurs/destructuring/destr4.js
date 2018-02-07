//mixowanie destrukturyzacji obiektow i tablic

const companies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'}
];

//access to location of google
//najpierw [] wyszukujemy pierwszy element tablicy
//nastepnie destrukturyzujemy obiekt bierzemy location

const [{location}]= companies;
console.log(location);

//inny przyklad

const Google = {
    locations :['Mountain View', 'New York', 'London']
};

//chcemy dostac sie do Mountain View
//Ponizej jest skadnia taka ze najpierw pobieramy
//obiekt location a pozniej po dwukropku bierzemy tablic
//z niego

const {locations:[first]} = Google;
console.log(first,'second example');