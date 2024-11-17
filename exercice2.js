function Comparison(L,a,b){
    if(L.length === 0){
        return "liste vide"
    }
    const middle = Math.floor((L.length)/2 );
     if (L[middle]>=a && L[middle]<=b) {
        return L[middle];
    }   
    let leftResult = Comparison(L.slice(0, middle), a, b);
    if (leftResult !== "liste vide") {
        return leftResult;
    }
    let rightResult = Comparison(L.slice(middle + 1), a, b);
    return rightResult;
}
    
const L=[3, 7, 8, 43, 556];
let a= 40;
let b= 50;
console.log(Comparison(L,a,b));