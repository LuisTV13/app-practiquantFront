import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Practica } from '../models/practica.model';

const baseURL = "http://localhost:8090/practica"

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  constructor(private http:HttpClient) { }

  listaPorPractica(nom:string):Observable<any>{
     const params = new HttpParams()
     .set("nom",nom);
       
     return this.http.get(baseURL+"/porPractica",{params})

  }

  registrarPractica(data:Practica): Observable<any>{
  return this.http.post(baseURL,data)

  }
  
  eliminarPractica(codpractica:number): Observable<any>{
    const params = new HttpParams()
    .set("codpractica",codpractica);

    return this.http.delete(baseURL,{params})
  }

}
