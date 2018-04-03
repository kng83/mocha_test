// Robimy funkcje ktora binduje nam zakres
// checkRange zwraca prawde gdy liczba trzyma sie w zakresie
// cos takiego jest uzywane w validacji w angularze

let checkRange = function (value) {
    if (typeof value !== "number") {
        return false;
    }
    else {
        return value >= this.minimum && value <= this.maximum;
    }
};

let range = {minimum: 10, maximum: 20};

let newRange = checkRange.bind(range);
console.log(newRange(12)); // true