const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1.  Add a  method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

school.findPerson = function (type, id) {
  if (this[type]) {
    return this[type].find(p => p.id == id);
  }
}

// console.log(school.findPerson("kids", 2));
console.log(school.findPerson("teachers", 2));
console.log(school.findPerson("students", 11));

// 2. A method called “assignStudent” that takes two arguments, a student’s id and a subject.
//  Assign the student to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left


school.assignStudent = function (id, subject) {
  let foundTeacher = this.teachers.find(teacher => {
    return teacher.subjects.find(teachSubject => teachSubject == subject) && teacher.capacityLeft > 0
  })
  if (foundTeacher) {
    foundTeacher.capacityLeft--;
    foundTeacher.students.push(id)
  }
  else {
    console.log("Sorry,no available teachers left");
  }
}
console.log("----------------- question 2 --------------");
school.assignStudent(13, "history");
console.log(school.findPerson("teachers", 2));





// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

school.assignTeachersSubject = function (id, newSubject) {
  let teacher = this.teachers.find(teacher => teacher.id == id);
  if (teacher) {
    if (!teacher.subjects.find(subject => subject == newSubject)) {
      teacher.subjects.push(newSubject);
    }
  }
}

console.log("----------------- question 3 --------------");
school.assignTeachersSubject(2, "Java");
console.log(school.findPerson("teachers", 2));


// 4. Create a new method of anything you want.
school.addTeacher = function (teacherId, name, subjects, students, capacityLeft) {
  this.teachers.push({ id: teacherId, name: name, subjects: subjects, students: students, capacityLeft: capacityLeft });
}
school.addTeacher(3, "Itay", ["Java Script", "html"], [], 5);
console.log(school.teachers);
