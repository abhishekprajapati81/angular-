import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { singer, SongListDTO, SongUpsertDTO } from 'src/app/model/song.model';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  singerList$!: Observable<singer[]>;

  ngOnInit(): void {
    this.singerList$ = this.service.getAllSinger();
  }

  constructor(
    private service: TestService,
    private router: Router
  ) {
    this.addForm = new FormGroup({
      song: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      selectedSong: new FormControl('')
    });
  }

  onSubmit(): void {
    console.log(this.addForm.value)
    if (this.addForm.valid) {
      const songUpsertDTO: SongUpsertDTO = {
        song: this.addForm.value.song,
        releaseDate: this.addForm.value.releaseDate,
        selectedSong: this.addForm.value.singers
      };

      const formData = new FormData();
      formData.append('song', songUpsertDTO.song);
      formData.append('releaseDate', songUpsertDTO.releaseDate);
      formData.append('selectedSong', JSON.stringify(songUpsertDTO.selectedSong));

      this.service.addSong(formData).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}

