
console.log("The page was loaded");
const url =
  "https://classdemo.amerabyte.net/Sample_Code/BIT_285-286-Summer2021/AJAX/process.php";
const nameEL = document.getElementById("name");
const emailEL = document.getElementById("email");
const shaEL = document.getElementById("superheroAlias");
const formEL = document.getElementById("form");

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("superheroAlias", superheroAlias.vale);
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const jsonData = await response.json();
  console.log(jsonData);
  if (jsonData.success === false) {
    alert(JSON.stringify(jsonData.errors.email));
  } else if (jsonData.success === true) {
    alert("success");
  } else {
    console.log("something else happend");
  }
}
formEL.addEventListener("submit", onSubmit);
