var el1 = document.querySelector('.button1');
var el2 = document.querySelector('.button2');
var el3 = document.querySelector('.button3');


el1.addEventListener('click', funcDisp)
function funcDisp() {
    let p = document.getElementById('todoCont');
    let display = window.getComputedStyle(p).getPropertyValue("display");
    p.style.display = "initial";
}

/* el2.onclick = func; */
/* el3.onclick = func2; */

el2.addEventListener("click", func2);
function func2() {
    alert('AAAAA');
}
el3.addEventListener("click", func3);

function func3() {
    el2.removeEventListener('click', func2);

}

/* const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
} */

const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncSmth() {
    console.log("Fetch Smth started...");

    var data = {};

    try {
        //await delay (2000);
        const response = await fetch(url);
        data = await response.json();
        console.log('Data: ', data);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        return data;
    }

}
function renderData(data) {
    const todoCont = document.getElementById('todoCont');

    for (var key in data) {
        var todoElem = document.createElement('div');
        todoElem.className = 'todo__item';
        var todoRow = document.createElement('div');
        todoRow.className = 'todo__title';
        todoRow.innerText = "Тайтл: " + data[key].title;
        todoElem.appendChild(todoRow);
        todoRow = document.createElement('div');
        todoRow.className = 'todo__id';
        todoRow.innerText = "ИД: " + data[key].id;
        todoElem.appendChild(todoRow);
        todoRow = document.createElement('div');
        todoRow.className = 'todo__userid';
        todoRow.innerText = "Усёр ИД: " + data[key].userId;
        todoElem.appendChild(todoRow);
        todoRow = document.createElement('div');
        todoRow.className = 'todo__completed';
        todoRow.innerText = "Комплетед: " + (data[key].completed === true ? 'Да' : 'Нет');
        todoElem.appendChild(todoRow);
        todoCont.appendChild(todoElem);
    }
}




document.addEventListener("DOMContentLoaded", async function () {
    var data = await fetchAsyncSmth();
    renderData(data);
}, false);

/* function search() {
    let input = document.getElementById("onInput");
    let filter = input.value.toUpperCase();
    let items = document.querySelector("todo_item");
    let titles = document.querySelector("todo_title");
 
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < titles.length; i++) {
        let a = titles[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            titles[i].style.display = "";
        } else {
            titles[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', search); */