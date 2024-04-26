
function appendStudentsToUl(studentList, ulElement) {
  studentList.forEach((student, index) => {
    
    const li = document.createElement("li");
    li.classList.add(`student-${index}`); // Добавляем класс "student-N", где N - индекс студента в массиве
    
    const name = document.createElement("p");
    name.textContent = `Name: ${student.name}`;
    name.classList.add("student-name"); // Добавляем класс "student-name" к элементу <p> с именем
    li.appendChild(name);
    
    const skills = document.createElement("p");
    skills.textContent = `Skills: ${student.skill.join(", ")}`;
    skills.classList.add("student-skills"); // Добавляем класс "student-skills" к элементу <p> с навыками
    li.appendChild(skills);
    
    const hobbies = document.createElement("p");
    hobbies.textContent = `Hobbies: ${student.hobby.join(", ")}`;
    hobbies.classList.add("student-hobbies"); // Добавляем класс "student-hobbies" к элементу <p> с хобби
    li.appendChild(hobbies);
    
    const photo = document.createElement("img");
    photo.src = student.photo;
    photo.width = 100;
    photo.classList.add("student-photo"); // Добавляем класс "student-photo" к изображению
    li.appendChild(photo);
    ulElement.appendChild(li);
  });
}
// 

const ul = document.getElementById("studentList");
appendStudentsToUl(studentList, ul);
