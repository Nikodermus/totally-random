const totallyRandom = (...args) => {
    let min = 0;
    let max = 100;

    if (args.length === 1 && typeof args[0] === 'number') {
        [max] = args;
    } else if (args.length === 2) {
        [min, max] = args;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default totallyRandom;
