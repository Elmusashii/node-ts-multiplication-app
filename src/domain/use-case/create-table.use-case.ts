
export interface CreateTableUseCase{
    execute: (options:CreateTableTableOptions)=>string;
}

export interface CreateTableTableOptions{
    base: number;
    limit?: number;

}

export class CreateTable implements CreateTableUseCase {

    constructor(
        //ID - INJECTION DEPENDENCIES 
    ){}

    execute({base, limit = 10}:CreateTableTableOptions){
        let outputmessage = "";

        for (let i = 0; i <= (limit); i++) {
            outputmessage += `${base} x ${i} = ${ base * i}\n`;
        }
        return outputmessage;
    }

}