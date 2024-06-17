    import { Injectable } from '@angular/core';

    @Injectable({
    providedIn: 'root'
    })
    export class ShoppingListService {
    private storageKey = 'shoppingLists';

    constructor() {}

    getLists(): any[] {
        const lists = localStorage.getItem(this.storageKey);
        return lists ? JSON.parse(lists) : [];
    }

    saveLists(lists: any[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(lists));
    }

    addList(list: any): void {
        const lists = this.getLists();
        lists.push(list);
        this.saveLists(lists);
    }

    deleteList(index: number): void {
        const lists = this.getLists();
        lists.splice(index, 1);
        this.saveLists(lists);
    }

    addItemToList(listIndex: number, item: string): void {
        const lists = this.getLists();
        lists[listIndex].items.push({ name: item, purchased: false });
        this.saveLists(lists);
    }

    toggleItemPurchased(listIndex: number, itemIndex: number): void {
        const lists = this.getLists();
        lists[listIndex].items[itemIndex].purchased = !lists[listIndex].items[itemIndex].purchased;
        this.saveLists(lists);
    }

    deleteItem(listIndex: number, itemIndex: number): void {
        const lists = this.getLists();
        lists[listIndex].items.splice(itemIndex, 1);
        this.saveLists(lists);
    }
    }
