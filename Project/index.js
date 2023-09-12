let basicButtonEl = document.getElementById("basic");
let shopButtonEl = document.getElementById("shop");
let advanceButtonEl = document.getElementById("advance");

let basicTabEl = document.getElementById("basicTab");
let shopTabEl = document.getElementById("shopTab");
let advanceTabEl = document.getElementById("advanceTab");

function onclickBasicTab() {
  basicTabEl.classList.remove("d-none");
  shopTabEl.classList.add("d-none");
  advanceTabEl.classList.add("d-none");

  basicButtonEl.classList.add("selected-button");
  shopButtonEl.classList.remove("selected-button");
  advanceButtonEl.classList.remove("selected-button");
}

function onclickShopTab() {
  basicTabEl.classList.add("d-none");
  shopTabEl.classList.remove("d-none");
  advanceTabEl.classList.add("d-none");

  basicButtonEl.classList.remove("selected-button");
  shopButtonEl.classList.add("selected-button");
  advanceButtonEl.classList.remove("selected-button");
}

function onclickAdvanceTab() {
  basicTabEl.classList.add("d-none");
  shopTabEl.classList.add("d-none");
  advanceTabEl.classList.remove("d-none");

  basicButtonEl.classList.remove("selected-button");
  shopButtonEl.classList.remove("selected-button");
  advanceButtonEl.classList.add("selected-button");
}
