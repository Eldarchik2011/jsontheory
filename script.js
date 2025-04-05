//object
const obj = {
    name: `Eren`,
    lastname: `Yeager`
}


//we can combine seperate objects into arrays
const friends =[
    {
        name: `Armin`,
        lastname: `Arlert`
    },
    {
        name: `Reiner`,
        lastname: `Braun`
    }
]

//JSON.stringify(obj) - берет обьект и преобразует его в строку и полученная строкак полученная строка JSON называется  json- форматированием или сериализованным обьектом. Мы можем отправить его по сети или поместить в обычное хранилище данных
// stringify
console.log();

const jsonString =  JSON.stringify(obj);
console.log(jsonString);

// JSON.parse - извлечение обьекта из строки


const stringJson = '{"name":"Eren"}'
const Objfromstr = JSON.parse(stringJson)
console.log(Objfromstr);
//Примеры 
let json = '[1, 2, 3, 4, 5, 6, "a", "b"]'

let json2 = {
    "a":"aaa",
    "w":"www",
    "c":"ccc",
    "a":"aaa",
    "1":"ddd",
}
