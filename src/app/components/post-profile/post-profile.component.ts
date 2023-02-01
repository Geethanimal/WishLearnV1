import { Component, OnInit ,EventEmitter, Input,Output} from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Poster } from 'src/app/interfaces/poster';
import { PosterService } from 'src/app/services/poster.service';

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent {
   // Creating a object for fetching post data
  posters$: Observable<Poster[]> = new Observable();

  @Input()
  initialState: BehaviorSubject<Poster> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Poster>();
  
  @Output()
  formSubmitted = new EventEmitter<Poster>();
  
  postForm: FormGroup = new FormGroup({});
 
  // Constructure
  constructor(private postersService: PosterService,private fb: FormBuilder) { }

  // Getting form values when submitted
  get title() { return this.postForm.get('title')!; }
  get question() { return this.postForm.get('question')!; }

  // Start Show hide comments
  vacomment(){
    let row_cmnt = document.getElementById("row_cmnt") as HTMLDivElement;
    let txt_vac = document.getElementById("txt_vac") as HTMLDivElement;
    row_cmnt.style.display= "block";
    txt_vac.style.display= "none";
  }
  // End Show hide comments
 
  
  ngOnInit(): void {
    this.fetchPosters();
    this.initialState.subscribe(poster => {
      this.postForm = this.fb.group({
        title: [ poster.title, [Validators.required] ],
        question: [ poster.question, [ Validators.required] ]
      });
    });
  }
 
  // Start Fetching posts method
  private fetchPosters(): void {
    this.posters$ = this.postersService.getPosters();
  }
  // End Fetching posts

  submitForm() {
    this.formSubmitted.emit(this.postForm.value);
  }

}
