import axios from 'axios'
import { AllResponse, Character } from    '../interfaces/character'; 


export const storeLocalStorage = async(): Promise<boolean> => {

    const {data} = await axios.get<AllResponse>('https://rickandmortyapi.com/api' + '/character');
    const characters: Character[] = data.results;
    for (let item in characters) {
        const newCharacter: Character = characters[item];
        localStorage.setItem(newCharacter.id.toString(), JSON.stringify(newCharacter) );
    }
    return true;
}

export const GenerateRandomCharacter = async(): Promise<Character> => { 
    const data = await axios.get<Character>('https://rickandmortyapi.com/api' + '/character/12');
    
    return data.data as Character;
}

export const GetOneCharacter = async(idCharacter: string ): Promise<Character> => {
     
    var rawCharacter = localStorage.getItem(idCharacter);
    var character: Character = JSON.parse(rawCharacter!);
    return character;
}

export const UpsertCharacter = async(character: Character ): Promise<number> => {
    var randomNumber: number = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    character.id=randomNumber
    localStorage.setItem(character.id.toString(), JSON.stringify(character) );
    return randomNumber;
} 
