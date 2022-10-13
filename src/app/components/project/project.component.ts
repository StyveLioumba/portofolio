import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects:Array<Project> = new Array<Project>();

  constructor() { }

  ngOnInit(): void {
    this.projects=[
      {
        name:'attends la suite',
        link:'https://play.google.com/store/apps/details?id=cg.essengogroup.attendslasuite&gl=FR',
        description:'\n' +
          'Attends la suite vous permet de rechercher des vidéos et chansons disponibles depuis the Movie db et Deezer.\n' +
          'vous pouvez également faire des demandes et contacter les utilisateurs de la plateforme via l\'application.',
        image:'assets/wait.png'
      },
      {
        name:'BgrFacile',
        link:'https://www.bgrfacile.com',
        description:'\n' +
          'Un apprentissage de marque et un pont vers la connaissance.',
        image:'assets/bgrfacile.jpeg'
      }
    ]
  }

}
