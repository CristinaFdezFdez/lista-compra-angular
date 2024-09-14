import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  title = 'Lista de la Compra';
  showTicket = false;
  newItem: string = '';
  newItemQuantity: number = 1;
  quantityUnit: string = 'unidad'; // Default unit
  items: { name: string, quantity: number, unit: string }[] = [];
  currentDate: string = new Date().toLocaleDateString();
  
  // Define itemOptions array
  itemOptions: string[] = [
    'Manzanas', 'Plátanos', 'Naranjas', 'Tomates', 'Lechuga', 'Zanahorias', 
    'Patatas', 'Cebollas', 'Pimientos', 'Leche', 'Yogur', 'Queso', 
    'Mantequilla', 'Pollo', 'Carne de res', 'Cerdo', 'Pescado', 
    'Gambas', 'Atún', 'Tomate triturado', 'Maíz', 'Garbanzos', 
    'Judías verdes', 'Pan', 'Arroz', 'Pasta', 'Avena', 'Cereales', 
    'Agua', 'Jugo de naranja', 'Café', 'Té', 'Refrescos', 
    'Detergente', 'Suavizante', 'Limpiador multiusos', 'Bolsas de basura', 
    'Huevos', 'Aceite de oliva', 'Sal', 'Azúcar', 'Harina'
  ];

  @ViewChild('ticketDisplay', { static: false }) ticketDisplay: ElementRef | undefined;

  addItem() {
    if (this.newItem && this.newItemQuantity > 0) {
      this.items.push({ name: this.newItem, quantity: this.newItemQuantity, unit: this.quantityUnit });
      this.newItem = '';
      this.newItemQuantity = 1;
      this.quantityUnit = 'unidad'; // Reset unit after adding item
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleTicket() {
    this.showTicket = !this.showTicket;
  }

  downloadTicket() {
    if (this.ticketDisplay) {
      html2canvas(this.ticketDisplay.nativeElement, { useCORS: true }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('ticket.pdf');
      });
    }
  }
}
