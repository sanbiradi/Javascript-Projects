//catch all data
const expenseName = document.querySelector("#name");
const expenseDate = document.querySelector("#date");
const expenseAmount = document.querySelector("#amount");
const expList = document.querySelector("#expList");

//catch all events element
const form = document.querySelector("form");

let expListS =
  localStorage.getItem("expList") === null
    ? []
    : JSON.parse(localStorage.getItem("expList"));

document.addEventListener("DOMContentLoaded", (e) => {
  expListS.forEach((ele) => {
    loadExp(ele);
  });
});

let loadExp = (exp) => {
  let expense = `<li class="alert alert-primary">      
    <span class="float-end text-danger delete fs-1">x</span>
      <div>
          <h3 class="alert-heading">${exp.expenseName}</h3>
          Rs. <span class="mt-3">${exp.expenseAmount}</span>/-
          <hr class="mt-2 mb-2">
          Date : <span class="text-muted">${exp.expenseDate}</span>
      </div>
  </li>`;
  expList.innerHTML += expense;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses();
  clearInputs();
});

document.addEventListener("click", (e) => {
  deleteExp(e.target);
});

let addExpenses = () => {
  if (expenseName.value && expenseAmount.value && expenseDate.value) {
    let exp = {
      expenseName: expenseName.value,
      expenseAmount: expenseAmount.value,
      expenseDate: expenseDate.value,
    };
    let expense = `<li class="alert alert-primary">      
          <span class="float-end text-danger delete fs-1">x</span>
          <div>
              <h3 class="alert-heading">${expenseName.value}</h3>
              Rs. <span class="mt-3">${expenseAmount.value}</span>/-
              <hr class="mt-2 mb-2">
              Date : <span class="text-muted">${expenseDate.value}</span>
          </div>
      </li>`;
    expList.innerHTML += expense;
    expListS.push(exp);
    localStorage.setItem("expList", JSON.stringify(expListS));
  }
};

let clearInputs = () => {
  expenseName.value = "";
  expenseAmount.value = "";
  expenseDate.value = null;
};

let deleteExp = (el) => {
  if (el.classList.contains("delete")) {
    let expN =
      el.parentElement.lastChild.previousSibling.firstChild.nextSibling
        .textContent;
    expListS.forEach((ell, index) => {
      if (ell.expenseName === expN) {
          console.log("hello world",index)
         expListS.splice(index, 1);
      }
    });
    localStorage.setItem("expList",JSON.stringify(expListS));
    
    el.parentElement.remove();
  }
};
