import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poster } from 'src/app/interfaces/poster';
import { PosterService } from 'src/app/services/poster.service';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent {

  constructor(
    private router: Router,
    private posterService: PosterService
  ) { }

  post(poster: Poster) {
    this.posterService.createPoster(poster)
      .subscribe({
        next: () => {
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          
          },
        error: (error) => {
          alert("Failed to login");
          console.error(error);
        }
      });
  }

}
