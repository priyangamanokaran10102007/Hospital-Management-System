let patients = JSON.parse(localStorage.getItem("patients")) || [];

displayPatients();

function addPatient(){

    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const disease = document.getElementById("disease").value;

    if(name==="" || age==="" || disease===""){

        alert("Enter all fields");
        return;

    }

    patients.push({

        name:name,
        age:Number(age),
        disease:disease

    });

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    document.getElementById("patientName").value="";
    document.getElementById("patientAge").value="";
    document.getElementById("disease").value="";

    displayPatients();

}

function deletePatient(index){

    patients.splice(index,1);

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    displayPatients();

}

function displayPatients(){

    const table=document.getElementById("patientTable");

    table.innerHTML="";

    patients.forEach((patient,index)=>{

        table.innerHTML +=`

        <tr>

        <td>${patient.name}</td>

        <td>${patient.age}</td>

        <td>${patient.disease}</td>

        <td>

        <button onclick="deletePatient(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

    document.getElementById("totalPatients").innerText=patients.length;

}