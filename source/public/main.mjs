import calendar from "./calendar.mjs";

const main = {
    fillHeader: () => {
        document.querySelector('.calendar-header-title').innerHTML = calendar.dateCalendarTitle();
    },

    fillDays: () => {
        const today = new Date();
        for (let i = -3; i < 4; ++i) {
            const row = i + 4;
            const day = document.querySelector(`.calendar-${row}-0`);
            day.innerHTML = calendar.addDays(today, i)
                .toLocaleDateString('en-US', {weekday: 'short'});
        }
        let start = -25;
        for (let col = 1; col < 8; ++col) {
            for (let row = 1; row < 8; ++row) {
                const dayElem = document.querySelector(`.calendar-${row}-${col}`);
                const dayCalc = calendar.addDays(today, ++start);
                dayElem.innerHTML = dayCalc.getDate();
                if (today.getMonth() !== dayCalc.getMonth()) {
                    dayElem.classList.add('calendar-other-month');
                } else if (today.getDate() === dayCalc.getDate()) {
                    dayElem.classList.add('calendar-today');
                }
            }
        }
    },
};

main.fillHeader();
main.fillDays();
