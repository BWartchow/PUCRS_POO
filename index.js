import * as ServPilotos from "./Classes/ServicoPilotos.js";
import * as ServAeronaves from "./Classes/ServicoAeronaves.js";
import * as ServAerovias from "./Classes/ServicoAerovias.js";

console.log("\nExemplo de uso das classes criadas na fase 01 do projeto:\n");

//-----------CLASSES PILOTO E SERVICOPILOTOS-----------------------------------------

console.log("Abaixo, a listagem de todos os pilotos, instâncias da classe Piloto:\n");
let testePilotos = new ServPilotos.ServicoPilotos("./dados/pilotos.csv");
console.log(testePilotos.listaTodos());

console.log("\nAbaixo, o retorno do piloto correspondente após a busca por uma matrícula específica:\n");
console.log(testePilotos.recuperaInfo("101111"));

console.log("\nAbaixo, a listagem de todos os pilotos ativos:\n");
console.log(testePilotos.pilotosAtivos());

//-----------CLASSES AEROVIA E SERVICOAEROVIAS-----------------------------------------

console.log("\nAbaixo, a listagem de todas as aerovias, instâncias da classe Aerovia:\n");
let testeAerovias = new ServAerovias.ServicoAerovias("./dados/aerovias.csv");
console.log(testeAerovias.listaTodas());

console.log("\nAbaixo, o retorno da aerovia correspondente após a busca por aeroportos específicos:\n");
console.log(testeAerovias.recuperaInfo("FLO","GRU"));

//-----------CLASSES AERONAVE E SERVICOAERONAVES-----------------------------------------

console.log("\nAbaixo, a listagem de todas as aeronaves, instâncias da hierarquia de classes Aeronave:\n");
let testeAeronaves = new ServAeronaves.ServicoAeronaves("./dados/aeronaves.csv");
console.log(testeAeronaves.listaTodas());

//----------------------------------------------------------------------------------------