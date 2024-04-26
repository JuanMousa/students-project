
function appendStudentsToUl(studentList, studentElement) {
  studentList.forEach((student, index) => {
    
    const studentCard = document.createElement("div");
    studentCard.classList.add(`student-${index}`, `col-3`); // Добавляем класс "student-N", где N - индекс студента в массиве

    const photo = document.createElement("img");
    photo.src = student.photo;
    photo.alt = student.name;
    photo.classList.add("student-photo"); // Добавляем класс "student-photo" к изображению
    studentCard.appendChild(photo);

    const name = document.createElement("h2");
    name.textContent = `${student.name}`;
    name.classList.add("student-name"); // Добавляем класс "student-name" к элементу <p> с именем
    studentCard.appendChild(name);
    
    const skillsList = document.createElement("ul");
    skillsList.classList.add("student-skills", "list-group", "list-group-horizontal-sm"); // Добавляем класс "student-skills" к элементу <p> с навыками
    studentCard.appendChild(skillsList);
    
    student.skills.forEach((skillItem) =>{
        const skillElement = document.createElement("li");
        skillElement.classList.add("skills-item","list-group-item");
        skillElement.textContent = skillItem;
        skillsList.appendChild(skillElement);
    });

    const hobbiesList = document.createElement("ul");
    hobbiesList.classList.add("student-hobbies", "list-group", "list-group-horizontal-sm");
    studentCard.appendChild(hobbiesList);

    student.hobby.forEach((hobbyItem) =>{
        const hobbyElement = document.createElement("li");
        hobbyElement.classList.add("hobbies-item","list-group-item");
        hobbyElement.textContent = hobbyItem;
        hobbiesList.appendChild(hobbyElement);
    });
    
    studentElement.appendChild(studentCard);
  });
}


const listOfStudents = document.getElementById("studentList");
appendStudentsToUl(studentList, listOfStudents);
