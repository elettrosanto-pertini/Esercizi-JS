// FUNZIONE RANGE(A,B) RESTITUISCE ARRAY DI NUMERI DA A a B.
function range(a, b) {
    let result = [];
    while (a <= b) {
        result.push(a);
        a++;
    }
    return result;
}
// FUNZIONE SUM(ARRAY) ITERA SUGLI ELEMENTI DELL'ARRAY E LI SOMMA
function sum(range) {
    let somma = 0;
    for (let num of range) {
        somma = somma + num;
    }
    return somma;
}

function range2(start, stop, step = 1) {
    //@param start: int
    //@param stop: int
    //@param step: int (def:1)
    //@return: array (lunghezza massima: 15 valori)
    let result = [];
    let ok = result.length <= 15; //opzionale.

    if (step < 0 && stop < start) {       //decrescente
        while (start >= stop && ok) {
            result.push(start);
            start = start + step;
        }
    } else if (step > 0 && stop > start) {   //crescente
        while (start <= stop && ok) {
            result.push(start);
            start = start + step;
        }
    }
    return result;  //array vuoto per chi non sa ordinare gli interi o chi vuole array di un solo elemento
}

//funzione che prende l'array in parametro e restituisce un nuovo array speculare.
function reverseArray(array) {
    /*@param array: array
    @return: array
    */
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

//prende array in parametro e lo modifica rendendolo speculare
function reverseArrayInPlace(array) {
    //@param array: array
    //@return: null
    let stop = Math.floor(array.length / 2);
    for (let i = 0; i < stop; i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    console.log(array);
}

// FUNZIONE CHE DATO UN ARRAY MI RITORNA UNA LISTA CON GLI STESSI ELEMENTI
// LISTA e' OBJECT CON PROPRIETà 'VALUE' E 'REST'

function arrayToList(array) {
    //@param array: array
    //@return list
    if (array.length == 1) {
        return { value: array[0], rest: null };
    } else {
        return { value: array[0], rest: arrayToList(array.slice(1)) };
    }
}

// FUNZIONE INVERSA: DATA UNA LISTA RITORNA L'ARAY CORRISPONDENTE
function listToArray(list) {
    //@param list: list
    //@return: array
    if (list.rest === null) {
        return [list.value];
    } else {
        return [list.value].concat(listToArray(list.rest));
    }
}

// FUNZIONE CHE  INSERISCE NUOVO ELEMENTO AD INIZIO LISTA (tipo unshift)
function prepend(element, list) {
    //@param element: mixed (element to be added to list)
    //@param list: list (where to insert new element)
    //@return: list
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
            value: 'Il comunismo ha fallito',
            rest: null
        }
    }
};

// FUNZIONE CHE PRENDE UN INDICE E UNA LISTA E RITORNA IL VALORE CORRISPONDENTE, UNDEFINED ALTRIMENTI
//ricorsiva
function nth(index, list) {
    //@param index: int (index of the element)
    //@param list: list (where the element is allegedly stored)
    //@return: mixed (either any or undefined)
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
                    //objects con stesse chiavi (e struttura) ma almeno un valore diverso
                    return false;
                } else {
                    //elementi identici: continua ciclo
                    continue;
                }
            }
            //gli objects sono identici (occhio: non vuol dire che occupino lo stesso posto in memoria)
            return true;

        } else {
            //se gli objects hanno numero diverso di chiavi non possono essere identici
            return false;
        }
    } else {
        //se non sono objects basta l'op identità
        return ogg1 === ogg2;
    }
}
