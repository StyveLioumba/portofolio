import {Component, Input, OnInit} from '@angular/core';
import {Competence} from "../../models/competence";

@Component({
  selector: 'competence-item',
  templateUrl: './competence-item.component.html',
  styleUrls: ['./competence-item.component.scss']
})
export class CompetenceItemComponent implements OnInit {

  @Input()
  competence!:Competence

  constructor() { }

  ngOnInit(): void {
  }

  getClass(tag:string){
    let colorTag={};
    switch (tag.toLocaleLowerCase()) {
      case 'javascript':
        colorTag={'bg-[#f7df1e] border border-[#f7df1e]':true};
        break
      case 'typescript':
        colorTag={'bg-[#007acc] border border-[#007acc]':true};
        break
      case 'java':
        colorTag={'bg-[#f89820] border border-[#f89820]':true};
        break
      case 'python':
        colorTag={'bg-[#FFD43B] border border-[#FFD43B]':true};
        break
      case 'html':
        colorTag={'bg-[#f06529] border border-[#f06529]':true};
        break
      case 'css':
        colorTag={'bg-[#264de4] border border-[#264de4]':true};
        break
      case 'express':
        colorTag={'bg-[#68A063] border border-[#68A063]':true};
        break
      case 'gradle':
        colorTag={'bg-[#02303A] border border-[#02303A]':true};
        break
      default:
        colorTag={'bg-zinc-300 border border-zinc-300':true};
        break

    }
    return colorTag
  }

}
