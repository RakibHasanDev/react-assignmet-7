
const setToLocal = (seconds) => {
    localStorage.setItem('time',seconds)
}

const getFromLocal = () => {
    const seconds = localStorage.getItem('time');
    return seconds;
}

export {
    setToLocal,
    getFromLocal
};

getFromLocal();