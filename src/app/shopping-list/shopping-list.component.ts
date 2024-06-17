import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface ShoppingItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  newItem: string = '';
  newItemQuantity: number = 1;
  items: ShoppingItem[] = [];

  ngOnInit() {
    const savedItems = localStorage.getItem('shoppingList');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem.trim(), quantity: this.newItemQuantity });
      this.saveItems();
      this.newItem = '';
      this.newItemQuantity = 1;
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.saveItems();
  }

  saveItems() {
    localStorage.setItem('shoppingList', JSON.stringify(this.items));
  }
}
