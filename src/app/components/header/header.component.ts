import { Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible :boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  goToMain() {
    this.router.navigate(['/']).then(r => {})
  }

  onShowMenu($event: MouseEvent) {
    console.log(this.isVisible)
    this.isVisible = !this.isVisible;
  }
}
