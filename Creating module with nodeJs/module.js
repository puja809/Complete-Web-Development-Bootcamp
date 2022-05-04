function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    }
    );
    return sum/arr.length;
}
module.exports = {
    avg:average,
    name:"Puja",
    Job:"Engineer"};
// console.log("Hello");

module.exports.name="Puja";