// uzycie bind do delegacji aby skrocic wywolanie map
// dzieki bind mozemy przekazac czesc parametrow i wywolac ja np z jednym zzmiennym paramatrem np path.
// uzywajac null lub undefined ignorujemy odbiorce


function simpleUrl(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path; //np http://getSome/kot/bobo.json

}

const paths = ['kot/bobo.json', 'kot/mruczek.json', 'kot/puszek.json']


// path jest tutaj dodawana niejawnie ale jest przekazywana
// path.map(function(path){return ...})
let urls = paths.map(simpleUrl.bind(null,'https','getSome'));
console.log(urls);
/* output
[ 'https://getSome/kot/bobo.json',
  'https://getSome/kot/mruczek.json',
  'https://getSome/kot/puszek.json' ]
*/

// tu jest klasyczny map
let u = paths.map(path => simpleUrl('https','getSome',path));
console.log(u);

let u2 = paths.map(console.log);
