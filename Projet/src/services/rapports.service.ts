import { Injectable } from '@angular/core';
import { RAPPORT } from 'src/modeles/rapport';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  constructor(private http:HttpClient) { }

  getAllRapports(): Observable<RAPPORT[]>{
    return this.http.get<RAPPORT[]>('http://localhost:3000/Rapport');
  }

  getRapportById(id:number): Observable<RAPPORT>{
    const rapport = this.http.get<RAPPORT>('http://localhost:3000/Rapport/'+id);

    if (rapport != undefined) {
      return rapport;
    } else {
      throw new Error('Rapport introuvable');
    }
  }

  createRapport(rapport:RAPPORT): Observable<RAPPORT>{
    // On recupere l'id max
    this.getAllRapports().pipe(
      map(rapports => [...rapports].sort((a, b) => a.id - b.id)),
      map(rapports_tries => rapports_tries[rapports_tries.length - 1].id),
      map(rapport_max => (rapport.id = rapport_max + 1)),
      switchMap(() => this.http.post<RAPPORT>('http://localhost:3000/Rapport', rapport))
    );

    return this.http.post<RAPPORT>('http://localhost:3000/Rapport', rapport);
  }
}
