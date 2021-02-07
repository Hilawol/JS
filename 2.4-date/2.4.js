(function () {

  function parseDate() {
    let d = new Date();
    let result = "Today is ";
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    result += days[d.getDay()] + " the ";
    result += d.getDate() + " of ";
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    result += months[d.getMonth()] + "," + d.getFullYear();
    return result;
  }

  console.log(parseDate());

})()