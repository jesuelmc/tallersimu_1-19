import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  constructor() { 
    //this.genCuaMedios();
  }
  numAleatorios:number[]=[];
  pos=0;
  getAle(){
    if(this.numAleatorios.length==0) this.genCuaMedios();
    var res=0;
    if(this.pos<this.numAleatorios.length){
     res=this.numAleatorios[this.pos];
     this.pos++;
   }
   else{
     this.pos=0;
     res=this.numAleatorios[this.pos];
   }
   return res;
  }
  
  
 genCuaMedios(){
   var n=4312;
  for(var i=0;i<100&& n!=0;i++){
    var numA=n*n;//elava al cuadrado
    while(numA<10000000) {
      numA*=10;} //debe ser minimo 8 cifras
    var strA = "n"+numA; //convierto en string
    n = parseInt(strA.substring(3,7));//extrae las cifras centrales
    var r=n/10000;
    this.numAleatorios.push(r);
  }
 }
  


}
