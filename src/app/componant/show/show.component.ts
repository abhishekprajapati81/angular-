import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongListDTO } from 'src/app/model/song.model';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  
  songList$!: Observable<SongListDTO[]>;

  constructor(private service: TestService) {}

  ngOnInit(): void {
    this.songList$ = this.service.getAllData();
  }

  deleteSong(id: number): void {
    this.service.deleteData(id).subscribe(() => {
      this.songList$ = this.service.getAllData();
    });

}}
