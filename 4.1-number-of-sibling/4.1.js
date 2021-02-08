let numSiblings = "2";
if (numSiblings == 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}

/***************************/

numSiblings = "1";
//It is not equal because we are using strong equality between diffrent types - string and int
if (numSiblings === 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}

/***************************/

numSiblings = 1;
//Here it is equal because we changed the type a number.
if (numSiblings === 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}

/***************************/

numSiblings = "0";
if (numSiblings == 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}

/***************************/


numSiblings = "L";

if (numSiblings == 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}

/***************************/


numSiblings = " ";

if (numSiblings == 1) {
  console.log("You have 1 sibling");
}
else if (numSiblings > 1) {
  console.log("More than 1 sibling");
}
else {
  console.log("No iblings")
}