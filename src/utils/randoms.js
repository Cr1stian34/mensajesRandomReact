const getRandomElement = (dataBase) => {
    const randomQuotes = Math.floor(Math.random() * dataBase.length);
    return dataBase[randomQuotes];
}

export {
    getRandomElement
}