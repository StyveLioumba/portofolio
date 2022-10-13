import { Pipe, PipeTransform } from '@angular/core';
import {Competence} from "../models/competence";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(competences: Competence[], filterString: string, property: string): Competence[] {
    if (competences.length === 0 || !filterString) {
      return competences;
    }
    let filteredUsers: Competence[] = [];
    for (let competence of competences) {
      if (competence.type.toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(competence);
      }
    }
    return filteredUsers;
  }
}
