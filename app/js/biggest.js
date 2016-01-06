function bigger(a, b){
    if (a > b) {
        return a
    } else if (b >a){
        return b
    }
    return a
}

function biggerER(a,b,c){
    if (a === b && a === c){
        return a
    } else if (a > bigger(b,c)){
        return a
    } else if (a < bigger(b,c)){
        return bigger(b,c)
    }
}

function biggest(a,b,c,d){
    if (a > biggerER(b,c,d)){
        return a
    } else if (a < biggerER(b,c,d)){
        return biggerER(b,c,d)
    }
    return a
}

//biggerER(7,7,7);
biggest(0,3,7,5);