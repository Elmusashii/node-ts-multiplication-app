//const message:string = "Hola hola";
//console.log(message)
import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';


/*
const tabla = ()=>{
    let contenido = "==========================\n";
    contenido += "       Tabla del 5        \n";
    contenido += "==========================\n";
    for (let i = 0; i <= 10; i++) {
        const num = 5;
        const result = num * i;
        //console.log(`${num}`+" x "+`${i}`+" = "+`${result}`)
        contenido += `${num} x ${i} = ${result}\n`;
    }
    fs.writeFile('outputs/tabla-5.txt', contenido ,function (err) {
        if (err) throw err;
    });
}
tabla();
*/

//console.log(yarg)

const {b:base, l:limit, s:showTable} = yarg

let outputmessage = "";
//const base = (yarg.b);
const headerMessage = `
===============================
       Tabla del ${base}       
===============================
`;
for (let i = 0; i <= (limit); i++) {
    outputmessage += `${base} x ${i} = ${ base * i}\n`;
}

outputmessage = headerMessage + outputmessage;
if(showTable === true){
    console.log(outputmessage);
}
const outputPath = `outputs/folder1/folder2/folder3/`;

fs.mkdirSync(outputPath,{ recursive: true})
fs.writeFileSync(`${outputPath}/tabla-${base}-1.txt`, outputmessage);
console.log("El archivo se ha creado exitosamente.")
