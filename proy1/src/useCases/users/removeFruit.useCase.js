const { fruit } = require('../../entities');

module.exports = dependencies => {
    const { fruitRepository } = dependencies;
    if (!fruitRepository) {
        throw new Error('fruitRepository should exists in dependencies');

    }

    const execute = ({ cod, nombre, stock }) => {
        const newfruit = new fruit({ cod, nombre, stock });
        return fruitRepository.delete(newfruit);

    }
    return { execute };
}