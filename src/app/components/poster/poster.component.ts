import { Component } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  vacomment(){
    let row_cmnt = document.getElementById("row_cmnt") as HTMLDivElement;
    let txt_vac = document.getElementById("txt_vac") as HTMLDivElement;
    row_cmnt.style.display= "block";
    txt_vac.style.display= "none";
    
  }
}
