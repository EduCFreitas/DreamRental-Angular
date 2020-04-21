import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http: HttpClient) { }

  getAllMensagens(){
    return this.http.get('http://31.220.57.14:8080/mensagens')
  }
}
