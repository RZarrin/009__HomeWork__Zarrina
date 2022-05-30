
for (let i = 1; i< 11; i++){
    let num = i;
    let userName = prompt ('Введите имя пользователя');
    let userAge = +prompt ('Введите возраст пользователя');


console.log('Пользователь  ' + num + ': Имя - ' + userName + '  Возраст - ' + userAge);

}



/*
let user = {
    userName: 'John',
    userAge: 32,
}
for(let key in user) {
   // console.log(key); - выводит все названия ключей в нашем объекте 
   //console.log(car[key]); // console.log(key); - выводит все названия ключей в нашем объекте 
//   console.log(' Ключ ' + key + ' значение ключа ' + car[key]); //склеивание вывести название и значение ключей * способ устарел
//    console.log(`Ключ ${key} значение ключа ${car[key]}`); //склеивание вывести название и значение ключей, его можно писать в две строчки
    сonsole.log(`Пользователь + num ${key} 
    значение ключа ${user[key]}`);
}


/*

let user = {
    userName: prompt ('Введите имя пользователя');
    userAge: +prompt ('Введите возраст пользователя');
}

let num = 1;

for (let i = 1; i< 10; i++){
    num += i;
    for(let key in user) {
    сonsole.log(`Ключ ${key} 
    значение ключа ${user[key]}`);        
}
}

    





//console.log ('Имя: ' + user );
//console.log ('Возраст ' + userAge);
//user.['age'] - подключится к опред.объекту

/*let sum = 0;
for (let i = 0; i< 10; i++){
    sum += i;
//    console.log (sum); //если прописываем внутри, то по порядку будут прибавлены числа
}
console.log (sum); // выдаст один результ прибавления всех чисел
*/

/*Объекты нужны для описания какого либо объекта (человека, машины, животного и т.д.)*/
//Структура создания объекта let название объекта = {ключ: значение}
// const - объявляет нам переменную, которую нельзя изменить

/*
let num = 100;
num = num + 50;
console.log(num);
*/ 
/*
let user = {
    name: 'Bob',
    age: 30
}

user.city = 'Tashkent' // если нужно добавить еще одино значение 
user['surname'] = 'green' // если нужно добавить еще одино значение 
/*console.log(user.name); //если надо подключится к определенному ключу
console.log(user.['age']);*/

//console.log(user);

//console.log(typeof user);
//typeof делает проверку на тип данных
//console.log('name' in user) //есть ли в ключе user знвчение name
// Оператор in делает проверку есть ли такой ключ в объекте, если да, то вернет true, если нет, то false 
//--------------------------------

// for in используется чтоб вывести значаения всех ключей 
/*
let car = {
    model: 'BMW',
    year:2020,
    color: 'black',
    available: true,
    creator: 'BMW Motors',
    id: 77885555
}
for(let key in car) {
   // console.log(key); - выводит все названия ключей в нашем объекте 
   //console.log(car[key]); // console.log(key); - выводит все названия ключей в нашем объекте 
//   console.log(' Ключ ' + key + ' значение ключа ' + car[key]); //склеивание вывести название и значение ключей * способ устарел
/*    console.log(`Ключ ${key} значение ключа ${car[key]}`); //склеивание вывести название и значение ключей, его можно писать в две строчки
    сonsole.log(`Ключ ${key} //***здесь нажимаем enter - перевод строки***
    значение ключа ${car[key]}`);
}
*/
//this подключается к тому объкту в котором он находится
//    ageAdd: function () {} * старый способ
//Функция созданная внутри объекта назыв-ся методом
/*
let person = {
    name: 'Bob',
    age: 30,
    ageAdd: () {
        return ++this.age
    }
}
console.log(person.ageAdd()); //ответ системы 31*/
/*
let market = {
    cola: {
        info: '1L',
        price: 10000,
    },
    fanta: {
        info: '1.5L',
        price: 12000,
    }
}
//добавить еще один объект в ключ market.sprite ={} или market['sprite'] = {}
market['sprite'] = {
    info: '2L',
    price: 15000,
}
console.log(market);


/*
for (let key in market) {
//    console.log(key);
 //   console.log(market[key]);
    for (let newKey in market [key]) { // подключится к каждому ключу и к названиям
       console.log(newKey);
//        console.log(market[key][newKey]); // подключится к каждому ключу и к данным
    }
}*/

// function App() {
//     // Объекты - нужны для описания какого либо объекта (человек, собака, машина и т.д.)
//     //- Структура создания объекта 
//     //-- let название объекта = {ключ: значение}
//     // const - объявляет нам переменную, которую нельзя изменить
//     // Оператор in делает проверку есть ли такой ключ в объекте, если да, то вернет true, если нет, то false



//     // let user = {
//     //     name: 'Jimm',
//     //     age: 22
//     // }
//     // user.city = 'Tashkent';
//     // user['surname'] = 'Moriarti'
//     // console.log(typeof user);
//     // let car = {
//     //     model: 'Tesla',
//     //     year: 2018,
//     //     color: 'red',
//     //     creator: 'Tesla Motors',
//     //     id: 01212100
//     // }
//     // for (let key in car) {
//     //     // console.log(key); // выводит все ключи в нашем объекте 
//     //     // console.log(key + ': ' + car[key]);  // выводит значение наших ключей в объекте
//     //     // console.log('Ключ:' + key + ' - значение ключа: ' + car[key]);
//     //     console.log(`Ключ: ${key} - значение ключа: ${car[key]}`);
//     // }

//     //!!! Любая функция, созданная внутри объекта называется методом!

//     // let person = {
//     //     name: 'Bob',
//     //     age: 22 ,
//     //     isMarried: false,
//     //     ageAdd() { // Метод
//     //         return `Ваш возраст был увеличен на 1: ${++this.age}`
//     //     },
//     //     greeting() { // Метод
//     //         let fullInfo = `My name is ${this.name}! I'm ${this.age} years old!`
//     //         return fullInfo
//     //     }
//     // }
//     // console.log(person.greeting());

//     let family = {
//         mother: {
//             name: 'Sara',
//             age: 28,
//             phoneNumber: 998909989999
//         },
//         father: {
//             name: 'Bob',
//             age: 27,
//             phoneNumber: 999939199011
//         },
//     }

//     family.son = {
//         name: 'Billi',
//         age: 14,
//         phoneNumber: 998909982777
//     }

//     family.daughter = {
//         name: 'Rebekka',
//         age: 5,
//         phoneNumber: 998900001111
//     }

//     // for(let key in family) {
//     //     for(let newKey in family[key]) {
//     //         console.log(family[key][newKey]);
//     //     }
//     // }
// }

// App();

