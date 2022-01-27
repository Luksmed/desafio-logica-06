let person = {
    age: 31,
    country: "Brazil",
    state: "Rio"
}

person.BirthdayMonth = "February"

delete person.state

console.log(person)

let cadastro = [
    {
        nome: "Maria",
        idade: 22,
        telefone: 8484-1514,
        amigos: ["Douglas","Jose","Fabio","Amanda"]
    },
    {
        nome: "Joao",
        idade: 30,
        telefone: 8785-3347,
        amigos: ["Natalia","Pedro","Arnaldo","Mauricio"]
    },
    {
        nome: "Rafael",
        idade: 25,
        telefone: 7855-3548,
        amigos: ["Ana","Marcos","Eduardo","Tatiana"]
    },
    {
        nome: "Samara",
        idade: 18,
        telefone: 9841-2545,
        amigos: ["Mayara","Fernanda","Luiz","Adriano"]
    },
    {
        nome: "Eva",
        idade: 45,
        telefone: 4783-7215,
        amigos: ["Melissa","Diego","Marcella","Gabriel"]
    }
]

console.log(cadastro[0].amigos[0], cadastro[01].amigos[0], cadastro[2].amigos[0], cadastro[3].amigos[0], cadastro[4].amigos[0])


