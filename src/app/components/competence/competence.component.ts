import { Component, OnInit } from '@angular/core';
import {Competence} from "../../models/competence";

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  competences:Array<Competence> = new Array<Competence>();
  webType:string='web'
  mobileType:string='mobile'
  constructor() { }

  ngOnInit(): void {
    this.competences = [
      {
        image:'assets/angular.svg',
        title:'Angular',
        description:'Si vous avez besoin de devélopper une application dynamique et réactive.',
        type:"web",
        tag:[
          "typescript",
          "html",
          "css"
        ]
      },{
        image:'assets/nodejs.svg',
        title:'NodeJs',
        description:'Je crée des Api Restfull avec express et NestJS .',
        type:"web",
        tag:[
          "javascript",
          "express"
        ]
      },{
        image:'assets/python.svg',
        title:'Python',
        description:'Je crée des Api Restfull avec Flask et serverless .',
        type:"web",
        tag:[
          "python",
          "flask"
        ]
      },{
        image:'assets/android.svg',
        title:'Android ',
        description:'Je développe des applications android natives avec JAVA dépuis plus 2 ans',
        type:"mobile",
        tag:[
          "java",
          "xml",
          "gradle"
        ]
      },{
        image:'assets/react.svg',
        title:'React native',
        description:'Besoin d\'une application cross plateform, je conçois et développe des application multiplateform.',
        type:"mobile",
        tag:[
          "javascript",
          "typescript"
        ]
      }
    ]
  }

}
