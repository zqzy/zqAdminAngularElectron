import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpService } from '../../service/httpService';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    // moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent {
    constructor(
        private fb:FormBuilder,
        private http:HttpClient,
        private router:Router
    ){
 
    }
    userForm:FormGroup;
    isdisable=true


    ngOnInit(): void {
        this.initUserForm();
    }
    initUserForm(){
        this.userForm=this.fb.group({
            userName:['',Validators.required],
            password:['',Validators.required]
        })
    }
    // login
    login(){
        // this.userForm.getRawValue/;
        this.isdisable=false;
        console.log(this.userForm.getRawValue())
        this.http.get('account/login',this.userForm.getRawValue()).subscribe(res=>{
            console.log(res)
        })
        this.router.navigate(['/pages'])
    }
}
