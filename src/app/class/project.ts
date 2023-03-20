export class Project {
    public id: string = ""
    public nombre: string = ""

    constructor(){ }

    SetValues(item: any){
        this.id = item.key
        this.nombre = item.name
    }
}
