// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum ocupação {
    atriz,
    padeiro
}

interface pessoa {
    name: string,
    age: number,
    occupation: ocupação
}

let pessoa1: pessoa = {
        name: "maria",
        age: 29,
        occupation: ocupação.atriz,
    }

let pessoa2: pessoa = {
        name: "roberto",
        age: 19,
        occupation: ocupação.padeiro
    }

 let pessoa3: pessoa = {
        name: "laura",
        age: 32,
        occupation : ocupação.atriz
    }

 let pessoa4: pessoa = {
        name: "carlos",
        age: 19,
        occupation: ocupação.padeiro
    }