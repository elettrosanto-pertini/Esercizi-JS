// FUNZIONE RANGE(A,B) RESTITUISCE ARRAY DI NUMERI DA A a B.
// FUNZIONE SUM(ARRAY) ITERA SUGLI ELEMENTI DELL'ARRAY E LI SOMMA
function range(a, b) {
    let result = [];
    while (a <= b) {
        result.push(a);
        a++;
    }
    return result;
}

function sum(range) {
    let somma = 0;
    for (let num of range) {
        somma = somma + num;
    }
    return somma;
}

function range2(start, stop, step = 1) {
    let result = [];
    let ok = result.length <= 15;

    if (step < 0 && stop < start) {
        while (start >= stop && ok) {
            result.push(start);
            start = start + step;
        }
    } else if (step > 0 && stop > start) {
        while (start <= stop && ok) {
            result.push(start);
            start = start + step;
        }
    } else {
        return 'Learn how to count, ya cheecky cunt';
    }
    return result;
}

function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let stop = Math.floor(array.length / 2);
    for (let i = 0; i < stop; i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    console.log(array);
}

// FUNZIONE CHE DATO UN ARRAY MI RITORNA UNA LISTA CON GLI STESSI ELEMENTI
// LISTA = OBJECT CON PROPRIETà 'VALUE' E 'REST'

function arrayToList(array) {
    if (array.length == 1) {
        return { value: array[0], rest: null };
    } else {
        return { value: array[0], rest: arrayToList(array.slice(1)) };
    }
}

// FUNZIONE INVERSA: DATA UNA LISTA RITORNA L'ARAY CORRISPONDENTE
function listToArray(list) {
    if (list.rest === null) {
        return [list.value];
    } else {
        return [list.value].concat(listToArray(list.rest));
    }
}

// FUNZIONE CHE PUSHA UN ELEMENTO IN UNA LISTA
function prepend(element, list) {
    let newList = {
        value: element,
        rest: list
    };
    return newList;
}

let lista1 = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
let lista2 = {
    value: 1,
    rest: {
        value: 24,
        rest: {
            value: 'cesso',
            rest: null
        }
    }
};

// FUNZIONE CHE PRENDE UN INDICE E UNA LISTA E RITORNA IL VALORE CORRISPONDENTE, UNDEFINED ALTRIMENTI
//ricorsiva
function nth(index, list) {
    if (index === 0) {
        return list.value;
    } else if (index > 0 && list.rest !== null) {
        return nth(index - 1, list.rest);
    } else if (index > 0 && list.rest === null) {
        return undefined;
    }
}

// FUNZIONE CHE SIMULA == ORIENTATA AGLI objects
//NOTA: L'ESERCIZIO CHIEDEVA UNA SOLA FUNZIONE...è OVVIO CHE SAREBBE OPPORTUNO SPACCHETTARE QUALCOSA IN FUNZIONI HELPER
function deepComparison(ogg1, ogg2) {
    //discernere tra oggetti e altre strutture
    if ((typeof (ogg1) == 'object' && ogg1 !== null) && (typeof (ogg2) == 'object' && ogg2 !== null)) {
        let chiavi1 = Object.keys(ogg1);
        let chiavi2 = Object.keys(ogg2);
        //verifico che le chiavi siano in egual numero e siano le stesse nello stesso ordine
        if (chiavi1.length == chiavi2.length) {
            for (let i = 0; i < chiavi1.length; i++) {
                if (chiavi1[i] == chiavi2[i]) {
                    continue;
                } else {
                    return false;
                }

            }
            //verifico che le chiavi portino lo stesso valore
            for (const cosa in obj1) {
                if (ogg1[cosa] !== ogg2[cosa]) {
                    //oggetti con stesse chiavi (e struttura) ma valori diversi
                    return false;
                } else {
                    continue;
                }
            }
            //gli oggetti sono identici (occhio: non vuol dire che occupino lo stesso posto in memoria)
            return true;

        } else {
            return false;
        }
    } else {
        return ogg1 === ogg2;
    }
}
