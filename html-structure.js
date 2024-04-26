
function appendStudentsToUl(studentList, studentElement) {
  studentList.forEach((student, index) => {
    
    const studentCard = document.createElement("div");
    studentCard.classList.add(`student-${index}`, `student-card`, `col-lg-3`, `col-md-4`, `col-6`,`m-30`); // Добавляем класс "student-N", где N - индекс студента в массиве

    const photo = document.createElement("img");
    photo.src = student.photo;
    photo.alt = student.name;
    photo.classList.add("student-photo"); // Добавляем класс "student-photo" к изображению
    studentCard.appendChild(photo);

    const studentInfo = document.createElement("div");
    studentInfo.classList.add("student-info", "text-center"); // Добавляем класс "student-name" к элементу <p> с именем
    studentCard.appendChild(studentInfo);

    const name = document.createElement("h2");
    name.textContent = `${student.name}`;
    name.classList.add("student-name"); // Добавляем класс "student-name" к элементу <p> с именем
    studentInfo.appendChild(name);
    
    const skillsList = document.createElement("ul");
    skillsList.classList.add("student-skills",); // Добавляем класс "student-skills" к элементу <p> с навыками
    studentInfo.appendChild(skillsList);
    
    student.skills.forEach((skillItem) =>{
        const skillElement = document.createElement("li");
        skillElement.classList.add("skills-item");
        skillElement.textContent = skillItem;
        skillsList.appendChild(skillElement);
    });

    const hobbiesElement = document.createElement("p");
    hobbiesElement.textContent = `Hobbies: ${student.hobby.join(", ")}`;
    hobbiesElement.classList.add("student-hobbies"); // Добавляем класс "student-hobbies" к элементу <p> с хобби
    studentInfo.appendChild(hobbiesElement);
    
    studentElement.appendChild(studentCard);
  });
}


const listOfStudents = document.getElementById("studentList");
appendStudentsToUl(studentList, listOfStudents);
