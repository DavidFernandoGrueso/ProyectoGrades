export class People {
    nombres: String = ' '
    apellidos: String = ' '
    created?: Date


    constructor(){}

     public setValues(data: any){
        this.nombres = data.nombres
        this.apellidos = data.nombres
     
    }
}
