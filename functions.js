
function filterBySkills(skill, studentList) {
    let filteredList = studentList.filter(student => student.skills.includes(skill));
    return filteredList;
}

function filterByHobbies(hobby, studentList) {
    let filteredbyHobbieList = studentList.filter(student => student.hobby.includes(hobby));
    return filteredbyHobbieList;
}

function filterByHobbiesOrSkills(text, studentList) {
    let filteredList = studentList.filter(student => student.skills.includes(text) || student.hobby.includes(text));
    return filteredList;
}

function hideElementsIfFilterIsNotInText(text, studentList) {
    let filteredList = studentList.filter(student => student.skills.includes(text) || student.hobby.includes(text));
    return filteredList;
}

function filterAndHideElements(text, studentList) {
    const ul = document.getElementById('studentList');

    studentList.forEach(student => {
        const li = ul.querySelector(`.student-${studentList.indexOf(student)}`); // Получаем li элемент соответствующий текущему студенту
        if (student.skills.includes(text) || student.hobby.includes(text)) {
            li.style.display = 'block'; // Показываем элемент, если хобби или навыки соответствуют критерию
        } else {
            li.style.display = 'none'; // Скрываем элемент, если хобби и навыки не соответствуют критерию
        }
    });
}

document.getElementById('skills').addEventListener('change', function () {
    const selectedSkill = this.value; // Получаем выбранное значение из элемента select
    filterAndHideElements(selectedSkill, studentList); // Запускаем функцию фильтрации и скрытия элементов
});

document.getElementById('hobby').addEventListener('change', function () {
    const selectedHobby = this.value.toLowerCase();
    filterAndHideElements(selectedHobby, studentList); // Run the filter and hide elements function
});



/* function filterByFilteredList(text, studentList) {
    let filteredList = studentList.filter(student => student.skills.includes(text) || student.hobby.includes(text));
    return filteredList;
} */




