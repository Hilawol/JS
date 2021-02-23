const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const ol = document.createElement("ol");
users.forEach(user => {
  let li = document.createElement("li");
  li.innerHTML = `<li data-id="${user.id}">${user.firstName} ${user.lastName}</li>`;
  ol.appendChild(li);
})
ol.style.listStyle = "none";
document.body.appendChild(ol);