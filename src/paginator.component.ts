import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'fi-paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
    
    @Input() 
    totalRecords: number;

    @Input() 
    pageSize: number;

    @Output() 
    pageChange = new EventEmitter();

    private currentPage: number;
    private totalPages: number;

    constructor() 
    {

    }

    // ngOnInit() 
    // { 
    //     this.totalPages = this.totalRecords/this.pageSize;
        
    //     this.currentPage = 0;

    //     //alert(this.totalPages);
    // }

    ngOnChanges(changes: any) {
        //alert(JSON.stringify(changes));

        this.totalRecords = changes.totalRecords.currentValue;

        this.totalPages = Math.ceil(this.totalRecords/this.pageSize);        
        this.currentPage = 0;        

        //alert(this.totalPages);
    }    

    pageChanged(direction: number)
    {
        if(direction == 0 && this.currentPage != 0)
        {
            this.currentPage--;
            this.emitPageChangeEvent();
        }
        else if(direction == 1 && this.currentPage != this.totalPages - 1)
        {   
            this.currentPage++;
            this.emitPageChangeEvent();
        }        
    }

    goToFirst()
    {
        if(this.currentPage != 0)
        {
            this.currentPage = 0;
            this.emitPageChangeEvent();
        }

    }

    goToLast()
    {
        if(this.currentPage != this.totalPages -1)
        {
            this.currentPage = this.totalPages - 1;
            this.emitPageChangeEvent();
        }
    }

    emitPageChangeEvent()
    {
        this.pageChange.emit({
            value: {
                'skip': this.currentPage * this.pageSize,
                'take': this.pageSize
            }
        });        
    }
}