import { Injectable } from '@angular/core';

export type student={id:number,name:string,email:string};
@Injectable()
export class DbService {

 studentArray:[student]=[
   {id:1,name:'Mike tela',email:'mike@gmail.com'},
   {id:2,name:'Hilary Clinton',email:'Hilary@gmail.com'},
   {id:3,name:'Donald Trump',email:'Donald@gmail.com'},
   {id:4,name:'Barak Obama',email:'Barak@gmail.com'}
   ]

  constructor() {
   }
  getData(){
     return this.studentArray;
  }
   getDataById(id:number):student{
     return this.studentArray.find((x)=>x.id===id);
  }

}
