/**
 * 1. Assign elements to variables
 */

let form = document.getElementById("todos-form");
let input = document.getElementById("item-input");
let addItem = document.querySelector("[type='submit']");
let clear = document.getElementById("clear-list");
let itemList = document.getElementById("item-list");
let feedback = document.getElementById("feedback");

console.log(itemList);

// My variables
let items = [];

/**
 * 2. Add functionality on the submit button
 */

addItem.addEventListener("click", function (e) {
  return onClickAddItem(e, input, items);
});

function onClickAddItem(e, input, items) {
  e.preventDefault();

  if (input.value) {
    items.push(input.value);
    // after pushing the item clear the input field
    input.value = "";
    // render my list
    renderList(items, itemList);
  } else {
    // handle empty input field
    feedback.classList.add("show");

    setInterval(function () {
      feedback.classList.remove("show");
    }, 5000);
  }
}

/**
 * 3. Render items into itemlist
 */

function renderList(items, itemList) {
  itemList.innerHTML = "";

  items.forEach((el) => {
    itemList.insertAdjacentHTML(
      "afterbegin",
      "<div class='item my-3'><h5 class='item-name text-capitalize'>" +
        el +
        "</h5><div class='item-icons'><button class='btn btn-primary complete-btn'>Complete</button><button class='btn btn-warning edit-btn'>Edit</button><button class='btn btn-danger delete-btn'>Delete</button></div></div>"
    );

    handleEl(el, itemList);
  });
}

const handleEl = function (el, itemList) {
  const todoItems = itemList.querySelectorAll(".item"); // --> list of nodes that have class item

  todoItems.forEach(function (item) {
    if (item.querySelector(".item-name").textContent === el) {
      //complete event listener
      item
        .querySelector(".complete-btn")
        .addEventListener("click", function () {
          item.querySelector(".item-name").classList.toggle("completed");
          this.classList.toggle("visibility");
        });
      //edit event listener
      item.querySelector(".edit-btn").addEventListener("click", function () {
        input.value = el;
        itemList.removeChild(item);

        items = items.filter(function (item) {
          return item !== el;
        });
      });
      // delete event listener
      item.querySelector(".delete-btn").addEventListener("click", function () {
        itemList.removeChild(item);

        items = items.filter(function (item) {
          return item !== el;
        });
      });
    }
  });
};

// hint:
// function handleEl(el) {
//   // find the html element
//   let items = itemList.querySelectorAll(".item");

//   items.forEach((item) => {
//     if (item.querySelector(".item-name").textContent == el) {
//       item.querySelector(".complete-btn", onClickComplete);
//     }
//   });
// }

// function onClickComplete() {}

// hint 2: to remove element from HTML use removeChild method
