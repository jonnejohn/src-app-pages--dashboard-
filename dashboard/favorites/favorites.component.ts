import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-favorites',
  styleUrls: ['./favorites.component.scss'],
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
	
	favorites:any[];
	
	  ngOnInit() {
		      this.favorites = [
      { text: 'Favorite item 1' },
      { text: 'Favorite item 2' },
      { text: 'Favorite item 3' },
    ];
	  //alert($(".task-todo-container").html());
  }
  
}