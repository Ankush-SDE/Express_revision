const emp = new Employee({
    empName: "Ankush",
    age: 21,
    salary: 50000,
    department: "IT"
});

emp.save();
const student = new Students({
  name:"Ankush",
  Age:21,
  salary:50000,
  department:It
})

const studentModel = mongoose.model("emplyeeDataBase",studentSchema)