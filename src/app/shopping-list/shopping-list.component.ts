import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



interface ShoppingItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatSelectModule,],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  title = 'Lista de la Compra';
  newItem = '';
  newItemQuantity = 1;
  items: ShoppingItem[] = [];
  showTicket = false;
  selectedItem: string = '';
  customItemMode = false; 


  currentDate: string = new Date().toLocaleDateString();

  constructor() {}

  addItem(): void {
    if (this.newItem && this.newItemQuantity > 0) {
      this.items.push({ name: this.newItem, quantity: this.newItemQuantity });
      this.newItem = '';
      this.newItemQuantity = 1;
    }
  }

  toggleTicket(): void {
    this.showTicket = !this.showTicket;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}

