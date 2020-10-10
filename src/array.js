import tr from './index';

export const fromArray = (arr, elements = 1) => {
    if (!Array.isArray(arr)) {
        throw new Error('You can only use this with arrays');
    }

    const elementsToBring = Math.min(elements, arr.length);
    const addedIndex = [];
    const returnElements = [];

    while (returnElements.length < elementsToBring) {
        const index = tr(arr.length - 1);

        if (!addedIndex.includes(index)) {
            addedIndex.push(index);
            returnElements.push(arr[index]);
        }
    }

    return returnElements.length === 1 ? returnElements[0] : returnElements;
};
