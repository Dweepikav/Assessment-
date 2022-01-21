import { Doctor } from "src/doctor";

export class Patient
{
    id:number;
    name:string="";
    visitedDoctor:string="";
    doctor :Doctor=new Doctor();
    
}