import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { singer, SongListDTO, SongUpsertDTO } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  getallAPi: string = 'https://localhost:44362/api/Song/GetAll'
  deleteApi : string = 'https://localhost:44362/api/Song/Delete'
  getallserviceapi: string = 'https://localhost:44362/api/Singer/GetAllSinger'
  addsingerapi : string = 'https://localhost:44362/api/Song/Insert'

  constructor(private http: HttpClient) { }

  addSong(formData: FormData): Observable<any> {
    return this.http.post<any>(this.addsingerapi ,formData);
  }

  getAllSinger():Observable<singer[]>{
    return this.http.get<singer[]>(this.getallserviceapi)
  }
  getAllData():Observable<SongListDTO[]>{
    return this.http.get<SongListDTO[]>(this.getallAPi)
  }


  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteApi}/${id}`);
  }
}
