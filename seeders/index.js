const fs = require('fs');
const path = require('path');

const seedersPath = path.join(__dirname);

function getSeeders() {
    return Promise.all(fs.readdirSync(seedersPath, { recursive: true })
    .filter(file => file.endsWith('.js') && file !== path.basename(__filename)).map((cur) => import(`./${cur}`)));
}

const seeders = getSeeders();

module.exports = {
    up: async (queryInterface) => {
        const seederList = await seeders;
        return Promise.all(seederList.map(seed => seed.default.up(queryInterface)));
    },
    down: async (queryInterface) => {
        const seederList = await seeders;
        return Promise.all(seederList.map(seed => seed.default.down(queryInterface)));
    },
};