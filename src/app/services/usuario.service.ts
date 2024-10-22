import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';
  private apiUrlLog = 'http://localhost:3000/api/usuarios/login';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  login(email: string, password: string): Observable<any> {
    const usuario = { email, password };
    return this.http.post(`${this.apiUrlLog}`, usuario);
  }
}