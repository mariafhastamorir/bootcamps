export class Student{
    numero_id: number;
    nombre: String;
    telefono: number;
    edad: number;

    constructor(num: number,
                nom: string,
                tel: number,
                edad: number){
        this.nombre = nom;
        this.numero_id = num;
        this.telefono = tel;
        this.edad = edad
    }
}