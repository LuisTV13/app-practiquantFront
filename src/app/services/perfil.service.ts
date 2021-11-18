import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

const baseURL= "http://localhost:8090/practiquant/perfil"


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }

  registrarPerfil(data:Perfil):Observable<any>{
    return this.http.post(baseURL,data);
  }

}
