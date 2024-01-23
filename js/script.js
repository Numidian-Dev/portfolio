import { skillsData, projectData } from "./data.js";

const createDiv = (element, className) => {
  const div = document.createElement(element);
  div.classList.add(className);
  return div;
};

//skills
const containerCard = document.getElementsByClassName("container-card")[0];

const skills = skillsData.map((skill) => {
  const div = createDiv("div", "card");
  div.innerHTML = `<div class="card-img"> <img src="${skill.img}" /> </div> <h2 class="title-skill"> ${skill.name}</h2> `;
  return div;
});

const allSkills = skills.forEach((skill) => containerCard.appendChild(skill));

//projects
const containerCardTwo = document.getElementsByClassName("container-card")[1];
const projects = projectData.slice(0, 4).map((project) => {
  const div = createDiv("div", "project-card");
  div.innerHTML = ` <a href="${project.link}" target="_blank"><img src="${project.img}" alt="${project.title}"/></a> `;
  return div;
});

const project = projects.forEach((project) =>
  containerCardTwo.appendChild(project)
);

//container all project
const allProjectBtn = document.getElementsByClassName("all-project-btn")[0];
const projectContainer = document.getElementsByClassName(
  "all-project-container"
)[0];
const ctnAllPrj = document.getElementsByClassName("ctn-all-project")[0];
const closeProject = document.getElementsByClassName("closeProject")[0];
let body = document.body;

const allProject = projectData.map((project) => {
  const div = createDiv("div", "project-card");
  div.innerHTML = ` <a href="${project.link}" target="_blank"><img src="${project.img}" alt="${project.title}"/></a> `;
  return div;
});
const allPrj = allProject.forEach((project) => {
  ctnAllPrj.appendChild(project);
});

allProjectBtn.addEventListener("click", () => {
  projectContainer.style.display = "flex";
  body.style.overflow = "hidden";
});

closeProject.addEventListener("click", () => {
  projectContainer.style.display = "none";
  body.style.overflow = "inherit";
});

//Menu

const menu = document.getElementsByClassName("menu")[0];
const openMenu = document.getElementsByClassName("openMenu")[0];
const closeMenu = document.getElementsByClassName("closeMenu")[0];
const socialIcons = document.getElementsByClassName("social-icons")[0];

openMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  socialIcons.style.display = "flex";
  body.style.overflow = "hidden";
});
closeMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
  socialIcons.style.display = "none";
  body.style.overflow = "inherit";
});
