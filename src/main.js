import user from "/Operation.js";

class Perform{

    constructor(A,B){
        this.A=A;
        this.B=B;
    }
    Add(){
        const User=new user(this.A,this.B);
        console.log(User.AddNumber());
    }
    Sub(){
        const User=new user(this.A,this.B);
        console.log(User.SubNumber());
    }
}

const obj=new Perform(7,3);
console.log('Hello world');
obj.Add();
obj.Sub();
