const calendar = {
    MILLIDAY: 24 * 60 * 60 * 1000,
    addDays: (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },
    appendScript: (name) => {
        let script = document.createElement('script');
        script.setAttribute('type', 'module');
        script.setAttribute('src', name + '?t=' + (new Date).getTime());
        document.head.appendChild(script);
    },
    appendLink: (name) => {
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', name + '?=' + (new Date).getTime());
        document.head.appendChild(link);
    },
    dateHeader: () => {
        return new Date().toLocaleString('en-US', {
            hour12: false,
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    },
    dateCalendarTitle: () => {
        return new Date().toLocaleString('en-US', {
            month: 'long',
            year: 'numeric',
        });
    },
};

export default calendar;
