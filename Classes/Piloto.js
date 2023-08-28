import { validate } from "bycontract";

// Sobre cada piloto é necessário armazenar:
// seu número de matrícula, nome, e estado de sua habilitação (ativo/inativo).

export class Piloto{
    #numeroMatricula;
    #nome;
    #habilitacaoAtiva;

    constructor(numeroMatricula, nome, habilitacaoAtiva){
        validate(arguments,["string","string","boolean"]);
        this.#numeroMatricula = numeroMatricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    get numeroMatricula(){
        return this.#numeroMatricula;
    }

    get nome(){
        return this.#nome;
    }

    get habilitacaoAtiva(){
        return this.#habilitacaoAtiva;
    }

    toString(){
        let str = `Matrícula: ${this.numeroMatricula}; Nome: ${this.nome}; `;
        str += `Situação Habilitação: ${this.habilitacaoAtiva?'Ativa':'Inativa'};`;
        return str;
    }

}

// let piloto1 = new Piloto("123", "Joao", false);
// console.log(piloto1.toString());
