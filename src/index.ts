import { storeLocalStorage, GetOneCharacter, GenerateRandomCharacter, UpsertCharacter } from './api/get-characters';
import { Character } from  './interfaces/character';

storeLocalStorage()
    .then( isCorrect => console.log( 'Se almacenó correctamente en LS.' ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Finalizó almacenamiento en LS.')  )

GetOneCharacter( "12")
    .then( character => console.log( 'Se recuperó el objeto', character ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Finalizó la operación de extracción')  )
 
GenerateRandomCharacter( )
    .then(
         character => { 
            console.log( 'Se recuperó el objeto', character );
            UpsertCharacter(character)
            .then( newId => console.log( `Se almacenó correctamente el nuevo personaje: ${newId }` ) )
            .catch( error => console.error( error ) )
            .finally( () => console.log('Finalizó la operación de insersión')  )
        }
    )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Finalizó la operación de extracción')  )

