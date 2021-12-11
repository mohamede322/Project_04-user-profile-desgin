let form = document.querySelector(".form");
let fName = document.querySelector(".f-name");
let lName = document.querySelector(".l-name");
let job = document.querySelector(".job");
let currentProjects = document.querySelector(".projects");
let currentFollowers = document.querySelector(".followers");
let socialUrl = document.querySelector(".social-url");
let subBtn = document.querySelector(".submit-btn");
let imgS = document.querySelectorAll(".imgs img");

let resultContainer = document.querySelector(".result");
let userImg = document.querySelector(".user-img");
let userName = document.querySelector(".user-name");
let userJob = document.querySelector(".user-job");
let projectsDone = document.querySelector(".projects-done");
let followers = document.querySelector(".current-followers");
let followBtn = document.querySelector(".f-btn");

// Events
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  switchBetween();
  getData();
});
getImg();

// Functions
function getData() {
  let activeImg = document.querySelector(".active");

  userImg.setAttribute("src", `${activeImg.getAttribute("src")}`);
  userName.innerHTML = `${fName.value} ${lName.value}`;
  userJob.innerHTML = `${job.value}`;
  projectsDone.innerHTML = `${currentProjects.value}`;
  followers.innerHTML = `${currentFollowers.value}`;
  followBtn.setAttribute("href", `${socialUrl.value}`);
}

function getImg() {
  imgS.forEach((img) => {
    img.addEventListener("click", (e) => {
      imgS.forEach((img) => {
        img.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
}

function switchBetween() {
  if (fName.value !== "" && socialUrl.value !== "") {
    resultContainer.style.cssText = "display:flex;";
    form.style.cssText = "display:none;";
  } else {
    resultContainer.style.cssText = "display:none;";
    form.style.cssText = "display:flex;";
    alert("please fill the input field");
  }
}
