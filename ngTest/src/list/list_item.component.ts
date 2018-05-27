import { Component } from '@angular/core';

@Component({
    selector: 'listItem',
    templateUrl: './list_item.component.html',
    inputs: ['data', 'item','section', 'data1']
})
export class ListItemComponent{
    private data;
    private item;
    private section;
    private data1;
}