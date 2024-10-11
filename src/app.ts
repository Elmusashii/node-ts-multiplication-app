import { yarg } from "./config/plugins/yargs.plugin"
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// console.log(yarg);


//!funciones Anonimas auto-invocada
    (async()=>{
         await main()
        // console.log("Funcion terminada");
    }) ();

    async function main(){
        const {b:base, l:limit, s:showTable, n:name, d:destination} = yarg;
        //console.log("Funcion ejecutandose")
        ServerApp.run({base,limit,showTable,name,destination});
    }