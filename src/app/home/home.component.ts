import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private pablo: InfoService) { 
  


  }

  ngOnInit(){ 
    this.pablo.getJSON().subscribe(data => { 
     console.log(data) 
    }); 
   } 

}
