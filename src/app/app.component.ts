import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, RouterLink, CommonModule, MatCardModule, ShoppingListComponent]
})
export class AppComponent {
  title = 'Lista de la Compra';
}
