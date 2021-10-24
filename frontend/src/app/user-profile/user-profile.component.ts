import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Employees', cols: 1, rows: 1 },
          { title: 'Patiants', cols: 1, rows: 1 },
          { title: 'Events', cols: 1, rows: 1 },
          { title: 'Cars', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Employees', cols: 1, rows: 1 },
        { title: 'Patiants', cols: 1, rows: 1 },
        { title: 'Events', cols: 1, rows: 1 },
        { title: 'Cars', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
