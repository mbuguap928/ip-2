function submit() {
  var date = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  var isValidDate = validateDate(date);
  var isValidGender = validateDate(gender);
  if (isValidDate === true) {
    if (isValidGender === true) {
      var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
      var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      if (gender == "female") {
        alert("Your akan name is " + female[weekDay(date)])
      } else {
        alert("Your akan name is " + male[weekDay(date)])
      }
    } else {
      alert("Please select gender")
    }
  } else {
    alert("Please enter a date.");
  }
}
var weekDay = (date) => {
  let d = new Date(date);
  return d.getDay();
}
var validateDate = (date) => {
  if (date == "") {
    return false;
  }
  return true
}
