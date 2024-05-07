import calendar from "./calendar.mjs";

let dateStringUpdate = () => {
    let dateString = document.querySelector('#id_date-string');
    dateString.innerHTML = calendar.dateHeader();
};

dateStringUpdate();
setInterval(dateStringUpdate, 1000);
