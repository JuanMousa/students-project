const itTrainers = [{
    name: "Marcel",
    firstTime: true,
    skills: [{
        language: "HTML",
        level: "intermediate"
    },{
        language: "CSS",
        level: "beginner"
    },{
        language: "JavaScript",
        level: "intermediate"
    }],
    getLevelOfLanguage(language){
        this.skills.forEach(function(skill){
            if(skill.language.toLowerCase() === language.toLowerCase()){
                console.log(skill.level);
            }
        });  
    }
},{
    name: "Salvatore",
    firstTime: false,
    skills: [{
        language: "HTML",
        level: "intermediate"
    },{
        language: "CSS",
        level: "intermediate"
    },{
        language: "JavaScript",
        level: "intermediate"
    }],
    getLevelOfLanguage(language){
        this.skills.forEach(function(skill){
            if(skill.language.toLowerCase() === language.toLowerCase()){
                console.log(skill.level);
            }
        });  
    }
}]

itTrainers.forEach(function(itTrainer){
    console.log(itTrainer.name);
    itTrainer.getLevelOfLanguage("javascript");
})

document.querySelector("strong:not(#red)").textContent = "Hello Oerlikon";

let h2Tag = document.createElement("h2");
let pTag = document.querySelector("p");

h2Tag.textContent = "I love to be in Oerlikon";
//pTag.after(h2Tag);
pTag.insertAdjacentElement("afterend",h2Tag);