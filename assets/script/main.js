document.querySelector(".btn_menuMd").onclick = () => {
  document.querySelector(".btn_menuMd").classList.toggle("active_md");
  document.querySelector(".md_sc_linksNav").classList.toggle("active_mdNav");
  document.body.classList.toggle("hiddenScrolling");
};

const buyForm = document.querySelector(".by_form");
const btnSubmit = buyForm.querySelector(".btn_submit");
const verifyContainer = document.querySelector(".verification_container");

btnSubmit.onclick = (e) => {
  e.preventDefault();
  verifyContainer.classList.add("active_box");
  verifyContainer
    .querySelectorAll(".verification_box")[0]
    .classList.add("active_box");
  document.body.classList.toggle("hiddenScrolling");
};

verifyContainer.querySelector(".verification_form").onsubmit = (e) => {
  e.preventDefault();
  let itParent = e.target.parentElement;
  let nextParent = itParent.nextElementSibling;

  itParent.classList.remove("active_box");
  nextParent.classList.add("active_box");

  nextParent.querySelector(".btn_submit").onclick = () =>
    window.location.reload();

  console.log(itParent);
};
