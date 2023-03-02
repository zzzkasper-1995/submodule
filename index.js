var pjson = require('./package.json');

export default {
    getVersion: () => {
        return pjson.version
    },
    name: pjson.name
}