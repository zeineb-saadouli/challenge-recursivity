function RankLastPositif(L){
    if(L.length === 0){// condition d'arret
        return -1
    }
    let LastRank= L.length-1;// vérifier si le dernier element de la liste est positif
    if(L[LastRank]>0){
        return LastRank;
    } else{// si non il va avancer vers l'element suivant(recursion)
        return RankLastPositif(L.slice(0,LastRank-1));// il va appliquer la fonction aprés la supression du dernier element
    }


}
const L=[1, 28, -2, 5, 4, -9, 0, 8, -2, 0] ;
console.log(RankLastPositif(L));