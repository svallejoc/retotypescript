import axios from 'axios'
import { AllResponse, Character } from    '../interfaces/character';


export const storeLocalStorage = async(): Promise<boolean> => {

    const {data} = await axios.get<AllResponse>('https://rickandmortyapi.com/api' + '/character');
    const characters: Character[] = data.results;
    for (let item in characters) {
        const newCharacter: Character = characters[item];
        localStorage.setItem(newCharacter.id.toString(), newCharacter.name);
    }
    return true;
}
