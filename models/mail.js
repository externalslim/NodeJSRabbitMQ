class Person {
    constructor() {
        this.id = 'id_1';
    }
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
        return this._name;
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    }
}


class Mail{

    constructor(){ }

    get subject(){ };
    set subject(subject){ };

    get from(){ };
    set from(from){ };

    get cc(){ };
    set cc(cc){
        return this.cc;
     };

    get bcc(){ };
    set bcc(bcc){ 
        return this.bcc;
    };

    get to(){ };
    set to(to){ 
        return this.to;
    };

    get body(){ };
    set body(body){ 
        return this.body;
    };

}