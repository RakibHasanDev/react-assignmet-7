
const setToLocal = (seconds) => {
    localStorage.setItem('time',seconds)
}

const getFromLocal = () => {
    const seconds = parseInt(localStorage.getItem('time'));
    return seconds;
}

export {
    setToLocal,
    getFromLocal
};

