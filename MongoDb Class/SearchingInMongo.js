// Searching a record in collection within a db
use Employee
// Searching with a single condition
db.details.find({"ID":"107"})

// Searching with multiple conditions
db.file.find({"ID":"107"},{"name":"Puja"})

// Searching with greater than condition
db.file.find({"ID":{$gt:"107"}})

// Searching with greater than equals to condition
db.file.find({"ID":{$gte:"107"}})

// Showing only one column that is name in the below example
db.file.find({"ID":{$gte:"107"}},{"name":1})

// Deleting one record: deleteOne will delete first entry if multiple records are matched 
db.details.deleteOne({"ID":"107"})

// Deleting many records with same condition
db.file.deleteMany({"ID":"107"})

// Updating one record
db.details.updateOne({name:"Diya"},{$set: {Salary:40000}})

// Updating Many records
db.details.updateMany({name:"Diya"},{$set: {Salary:40000}})

// Updating Many records and changing more than one value
db.details.updateMany({name:"Diya"},{$set: {Salary:40000,name:"Lipi"}})
