window.onload = function() {
    showDataTypes();
}

function showDataTypes() {
    let name = "Muhammad Alif Qadri"; 
    let age = 20; 
    let isStudent = true; 
    let address = null; 
    let userDetails = { name: "Muhammad Alif Qadri", age: 20 }; 
    let idol = ["Cristiano Ronaldo", "Max Verstappen", "Moona Hoshinova"]; 

    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Is student: ", isStudent);
    console.log("Address: ", address);
    console.log("User Details: ", userDetails);
    console.log("Idols: ", idol);

    alert("Name: " + name + "\n" + 
          "Age: " + age + "\n" + 
          "Is Student: " + isStudent + "\n" + 
          "Address: " + address + "\n" + 
          "User Details: " + JSON.stringify(userDetails) + "\n" + 
          "Idols: " + idol.join(", "));
}