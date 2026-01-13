let original = {
  name: "meet",
  skill: ["HTML", "DSA", "CSS"],
  address: {
    city: {
      pincode: 123465,
      location: "Surat",
    },
  },
};

function StructureClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    let newArray = [];
    for (let i in obj) {
      newArray.push(i);
    }
    return newArray;
  }

  let newObj = {};
  for (let key in obj) {
    newObj[key] = StructureClone(obj[key]);
  }
  return newObj;
}

let clone = StructureClone(original);
console.log(clone !== original);
