import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulacion } from '../models/postulacion.model';

const baseURL="http://localhost:8090/practiquant/postulacion"

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  constructor(private http:HttpClient) { }

  listaPostulacionPerfil(codperfil:number): Observable<any>{

  const params = new HttpParams()
  .set("codperfil",codperfil);

  return this.http.get(baseURL+"/porPerfil",{params})

  }

  postular(data:Postulacion):Observable<any>{
    return this.http.post(baseURL,data)
  } 

}
