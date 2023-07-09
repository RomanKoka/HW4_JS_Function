
// 1) створити функцію яка отримує аргумент і массив, якщо його значення 'last' то функція
//  повертає останній елемент 'first' то повертає перший елемент массиву.

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
function firstLastElementFn(value){
    if (value == 'first'){
        console.log(animals[0]);
    }
            else if(value == 'last'){
                console.log(animals[animals.length - 1]);
            }
            else{
                console.log('Input only "first" or "last" arguments');
            }
            }
        
    firstLastElementFn('first');
    firstLastElementFn('last');
        

    // 2)let smile = [':)', '=)',':)', '=)',':)', '=)']; Створити функцію яка отримує 
    // аргументом новий самйл і змінює  в масиві '':)' на новий смайл

    let smile = [':)', '=)',':)', '=)',':)', '=)'];
    console.log(`Original array ${smile}`)
    function changeSmile(newSmile, smileArray){
      for( let i = 0; i < smile.length; i++){
            if(smileArray[i] == ':)'){
                smileArray[i] = newSmile;
            }
        }
        console.log(`Changed array ${smile}`);
        }
        changeSmile(':-)', smile);
       