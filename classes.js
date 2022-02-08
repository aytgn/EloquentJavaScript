//------------------------------------------------------------------------------------------------------------------------------------//
//Object, that will be default rabbit which we call it protoType.
const rabbitProto = {
  type: "gray",
};

//function that creates a rabbitObject with given type
function makeRabbit(type) {
  //creating a rabbit object
  let rabbit = Object.create(rabbitProto);
  //adding a type property to rabbit object
  rabbit.type = type;
  //return created and modified rabbit object
  return rabbit;
}

//to create white rabbit send "white" as an argument to makeRabbit function
const whiteRabbit = makeRabbit("white");
console.log(whiteRabbit);

//------------------------------------------------------------------------------------------------------------------------------------//
//this type of functions called "constructor". use it whit "new" keyword to create Rabbit object with given type
function Rabbit(type) {
  this.type = type;
}
//every object has prototype. add speak prototype value which is a function.
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says: '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("i do weird things");

//------------------------------------------------------------------------------------------------------------------------------------//
class Rabbitt {
  //class is an idea...
  constructor(type) {
    //constructor is properties for idea instances
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbitt("killer");
let blackRabbit = new Rabbitt("black");

killerRabbit.speak("i killed many rabbits");
