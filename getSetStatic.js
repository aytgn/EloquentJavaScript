let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
  getSize() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);
console.log(varyingSize.size);

console.log(varyingSize.getSize());
console.log(varyingSize.getSize());

//************************************************************************************************************************** */

class Temperature {
  //to create new Temperature object should pass celsius value.
  constructor(celsius) {
    //celsius value saved in instance
    this.celsius = celsius;
  }
  get fahrenheit() {
    //temperatureInstance.fahrenheit will return calculated fahrenheit value
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    ///beware! source of truth is celsius(bcs we say so,lol). So we are not holding fahrenheit value;but celsius. whenever fahrenheit given or wanted evaluate its value based on celsius.
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    //Static means: "We don't need instance to call that function. can directly call by its class." //Temperature.fromFahrenheit not temperatureInstance.fromFahrenheit
    return new Temperature((value - 32) / 1.8);
  }
}
