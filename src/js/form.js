const form = document.querySelector(".js_form");
const previewName = document.querySelector(".js_name");
const previewJob = document.querySelector(".js_job");
const previewEmail = document.querySelector(".js_email");
const previewPhone = document.querySelector(".js_phone");
const previewLinkedin = document.querySelector(".js_linkedin");
const previewGithub = document.querySelector(".js_github");
const previewColorRed = document.querySelector(".js_red");
const previewCard = document.querySelector(".js_preview-card");
const btnReset = document.querySelector(".js_button-reset");


const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};


const handleForm = (event) => {
  event.preventDefault();
  const input = event.target.id; //obtener id del input
  const valueInput = event.target.value; //obtener valor input
  console.log("working input");

  data[input] = valueInput;

  if (input === "name") {
    // data.completeName = valueInput;
    previewName.innerHTML = valueInput;
  } else if (input === "job") {
    // data.position = valueInput;
    previewJob.innerHTML = valueInput;
  } else if (input === "email") {
    // data.email = valueInput;
    previewEmail.href = valueInput;
  } else if (input === "phone") {
    // data.phoneNumber = valueInput;
    previewPhone.href = valueInput;
  } else if (input === "linkedin") {
    // data.linkedin = valueInput;
    previewLinkedin.href = valueInput;
  } else if (input === "github") {
    // data.github = valueInput;
    previewGithub.href = valueInput;
  } else if (input === "palette") {
    if (valueInput === "2") {
      previewCard.classList.add("palette2");
      previewCard.classList.remove("palette1");
      previewCard.classList.remove("palette3");
    }
    if (valueInput === "3") {
      previewCard.classList.add("palette3");
      previewCard.classList.remove("palette1");
      previewCard.classList.remove("palette2");
    } 
    if (valueInput === "1"){
      previewCard.classList.add("palette1");
      previewCard.classList.remove("palette3");
      previewCard.classList.remove("palette2");
    }
    }

  console.log(data);
};

form.addEventListener("input", handleForm);



function handleReset(event){
  event.preventDefault();
  
  console.log(data);
 }
 
btnReset.addEventListener('click', handleReset);



