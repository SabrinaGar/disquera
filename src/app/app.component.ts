import { Component } from '@angular/core';
import { InfoService } from './info.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
 class info{
  firstName:string ;
  LastName: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  constructor(private pablo: InfoService) { 
  


  }

  ngOnInit(){ 
    this.pablo.getJSON().subscribe(data => { 
     console.log(data) 
    }); 
  }
      
}


