import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project";

@Component({
  selector: 'projet-item',
  templateUrl: './projet-item.component.html',
  styleUrls: ['./projet-item.component.scss']
})
export class ProjetItemComponent implements OnInit {

  @Input()
  project!:Project

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string):void{
    window.open(url, "_blank");
  }

}
