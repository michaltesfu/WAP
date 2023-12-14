class Patient{
    constructor(PatientID,FirstName,MiddleInitial,LastName,DoB,department,IsOutpatient){
        this.patientID = PatientID;
        this.firstName = FirstName;
        this.middleInitial = MiddleInitial;
        this.lastName = LastName;
        this.department = department;
        this.isOutpatient = IsOutpatient;
        this.dOB = DoB;
    }
    addPatient(){
     const properties = [
        this.patientID, 
        this.firstName, 
        this.middleInitial, 
        this.lastName, 
        this.department,
        this.isOutpatient,
        this.dOB,];
    let tBody = document.getElementById("tbodyPatientsList");
    let newTr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let tableData = document.createElement("td");
      let content = document.createTextNode(properties[i]);
      tableData.appendChild(content);
      newTr.appendChild(tableData);
    }
    tBody.appendChild(newTr);
}
}
const patient1 = new Patient("EP-001-000001", "MICHAL", "J", "TESFU", "1945-01-07", "Ear, Nose and Throat", "No");
const patient2 = new Patient("P-001-000002", "HELEN", "K", "SENAY", "1765-05-02", "Cardiology", "Yes");
const patient3 = new Patient("EP-001-000003", "HERZON", "G", "zEBIB", "2011-03-23", "Cardiology", "Yes");
const patient4 = new Patient("EP-001-000006", "JOSSEY", "Natey", "sibhatu", "1988-03-11", "Ear, Nose and Throat", "No");


var patients=[patient1,patient2,patient3,patient4]
patients.forEach(patient => {
    patient.addPatient();
});

document.getElementById("btnRegisterPatient").addEventListener("click", function (event) {
 
    
    var patientIdNumber = document.getElementById("patientIdNumber");
    var firstName = document.getElementById("firstName");
    var middleInitials = document.getElementById("middleInitials");
    var lastName = document.getElementById("lastName");
    var dateOfBirth = document.getElementById("dateOfBirth");
    var ddlDepartment = document.getElementById("ddlDepartment");
    var radioIsOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked');

       
    if (!patientIdNumber.checkValidity() || !firstName.checkValidity() || !lastName.checkValidity() || !dateOfBirth.checkValidity() || !ddlDepartment.checkValidity() || !radioIsOutPatient.checkValidity()) {
            return;
        }

event.preventDefault(); 

 const newPatient = new Patient(patientIdNumber.value, firstName.value, middleInitials.value, lastName.value, dateOfBirth.value, ddlDepartment.value, radioIsOutPatient.value);
 newPatient.addPatient();
  });

  var elderlyCheck = document.getElementById("chkElderlyPatients");
  elderlyCheck.addEventListener("change", funCheck);

  var outPatient = document.getElementById("chkShowOutPatients");
  outPatient.addEventListener("change", funCheck);

  function funCheck() {
    var rows = document.getElementById("tbodyPatientsList").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        
        var cellOut = rows[i].getElementsByTagName("td")[6];
        var outPat = cellOut.textContent;

     
        var cellDate = rows[i].getElementsByTagName("td")[4];
        var dateOfBirth = cellDate.textContent;
       
        var year = parseInt(dateOfBirth.split("-")[0], 10);

      
        if ((outPatient.checked && outPat=="No")||(elderlyCheck.checked && year > 1958)) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}