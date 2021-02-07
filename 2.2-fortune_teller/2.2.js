(function () {

  function tellFortune(jobTitle, location, partnerName, numberOfCHildren) {
    return (`You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfCHildren} children.`);
  }

  console.log(tellFortune("programmer", "tel-aviv", "Amir", 3));
})()