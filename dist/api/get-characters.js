var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.storeLocalStorage = void 0;
    axios_1 = __importDefault(axios_1);
    const storeLocalStorage = async () => {
        const { data } = await axios_1.default.get('https://rickandmortyapi.com/api' + '/character');
        const characters = data.results;
        for (let item in characters) {
            const newCharacter = characters[item];
            localStorage.setItem(newCharacter.id.toString(), newCharacter.name);
        }
        return true;
    };
    exports.storeLocalStorage = storeLocalStorage;
});
