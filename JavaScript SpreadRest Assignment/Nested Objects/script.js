const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "TMU Moradabad",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

function xyz(obj) {
  let getName = "";
  let getStreet = "";

  let mainKeys = Object.keys(obj);
  let mainValues = Object.values(obj);

  for (let i = 0; i < mainKeys.length; i++) {
    if (mainKeys[i] == "name") {
      getName = mainValues[i];
    } else if (mainKeys[i] == "address") {
      let addKeys = Object.keys(obj["address"]);
      let addValues = Object.values(obj["address"]);

      for (let k = 0; k < addKeys.length; k++) {
        if (addKeys[k] == "street") {
          getStreet = addValues[k];
        }
      }
    }
  }
  return { name: getName, street: getStreet };
}

console.log(xyz(person));
