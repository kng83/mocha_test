//tu bedzie rest and spread operator
//teraz chcemy wrzucic grupe liczb ale nie tablice np 1,2,3,4,5
//dlatego dajem rest operator ...numbers i mozemy przekazywac argumenty po przecinku
//dodajemy elementy tablicy
//rest operator lapie argument i wsadza je do tablicy
function addNumber(...numbers){
    return numbers.reduce((sum,number)=> {
        return sum + number
        },0)
}

console.log(addNumber(1,3,4));

