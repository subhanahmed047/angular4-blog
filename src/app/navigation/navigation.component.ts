import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items = [
    {title: 'Home', icon: 'home'},
    {title: 'Posts', icon: 'newspaper'}
  ];

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  onSearch(form: HTMLFormElement) {
    this._router.navigate(['/posts'], { queryParams: { q: form.value.search }});
    form.reset();
  }

}
