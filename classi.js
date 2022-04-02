//Vec class appresentante un vettore
//CONSTRUCTOR: il vettore è un array con due elementi -> [x,y]
/*method 1: somma.
    Input-> type: this, Vec.
    Output-> type: Vec - vettore con somma membro a membro
 method 2: differenza
    Input-> type: this, Vec.
    Output-> type: Vec - vettore con differenza membro a membro
 method 3: lunghezza.
    Input-> type: this.
    Output-> type: Int - modulo del vettore
*/
class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.vettore = [this.x, this.y];
    }
    get() {
        return this.vettore;
    }
    show() {
        console.log(this.vettore);
    }

    plus(vector) {
        return [this.x + vector.x, this.y + vector.y];
    }
    minus() {
        return [this.x - vector.x, this.y - vector.y];
    }

    length() {
        return Math.fround(Math.sqrt(this.x ** 2 + this.y ** 2));
    }
}


class Group {
    constructor(x = []) {
        this.group = x;
    }

    has(value) {
        return (this.group.indexOf(value)) >= 0 ? true : false;
    }

    add(value) {
        this.group.push(value);
    }

    delete(value) {
        if (this.has(value)) {
            this.group.splice(this.group.indexOf(value), 1);
        } else {
            return;
        }
    }

    show() {
        console.log(this.group);
    }

    static from(altro) {
        return new Group(altro);
    }

}

let minnie = Group.from([1, 2, 3, 4, 5]);
//************************************************************************
/* DEFINISCO UNA CLASSE ITERATOR con un solo method. */
class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
        this.last = group.group.length - 1;
    }
    next() {
        if (this.index > this.last) {
            return { done: true }
        }

        let oggetto = {
            value: this.group.group[this.index]
        };
        this.index++;
        return oggetto;
    }

}

Group.prototype[Symbol.iterator] = function () {    //Setto come symbol.iterator un'istanza della mia classe
    return new GroupIterator(this);
};
//************************************************************************

for (let elemento of minnie) {     //Ora posso iterare su oggeti della classe Group!!
    console.log(`elemento: ${elemento}`)
}