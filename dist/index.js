define(["require", "exports", "./api/get-characters"], function (require, exports, get_characters_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_characters_1.storeLocalStorage)()
        .then(isCorrect => console.log('Se almacenó correctamente en LS.'))
        .catch(error => console.error(error))
        .finally(() => console.log('Finalizó almacenamiento en LS.'));
});
