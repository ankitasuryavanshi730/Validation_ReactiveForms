import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dataform:any;



  ngOnInit(): void {

    this.dataform = new FormGroup({

      username:new FormControl("" , Validators.compose([Validators.required , Validators.email])),
      password:new FormControl("", Validators.compose([Validators.required]))




    })


  }

  submitdata(data:any){

    if(data.username == "ankita@gmail.com" && data.password == 123456789){
      alert("WElCOME")
    }
    else{
      alert("WRONG Validation")
    }

    console.log(data);

  }



}
