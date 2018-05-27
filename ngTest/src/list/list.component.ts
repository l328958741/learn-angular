import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
    selector: 'listComp',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    private arr = [6,5,4,3,2,1,6];
    private arr1: Array<number>;

    private show:boolean = true;

    boxDisappear(){
        this.show = !this.show;
    }

    constructor(private http:Http){
        this.http.get('http://localhost:8080').toPromise().then(res =>{
            this.arr1 = res.json();
            console.log(this.arr1);
            
        }, err=>{
            console.log(err);
        });
    }

    // 在组件加载前完成，用于从数据库拉取数据
    ngOnInit(){
        // alert(this.arr1);
    }
}