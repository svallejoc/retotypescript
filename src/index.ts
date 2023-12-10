import { storeLocalStorage } from './api/get-characters';


storeLocalStorage()
    .then( isCorrect => console.log( 'Se almacenó correctamente en LS.' ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Finalizó almacenamiento en LS.')  )



