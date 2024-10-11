import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";

interface RunOption{
    base: number;
    limit: number;
    showTable: string|boolean ;
    name: string;
    destination: string;
}

export class ServerApp{
    static run({base,limit,showTable,name,destination}:RunOption){
        console.log("Server running...")
        //console.log(options);
        const table = new CreateTable()
        .execute({base,limit});

        const wasCreated = new SaveFile()
        .execute({fileContent:table, fileName:name, fileDestination:destination});

        if (showTable === true) {
            console.log(table)  
        } 

        (wasCreated)
        ? console.log("Se ha creado el archivo")
        :console.error("No se ha creado el archivo")
            
    }
}
