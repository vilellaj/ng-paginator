"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PaginatorComponent = (function () {
    function PaginatorComponent() {
        this.pageChange = new core_1.EventEmitter();
    }
    // ngOnInit() 
    // { 
    //     this.totalPages = this.totalRecords/this.pageSize;
    //     this.currentPage = 0;
    //     //alert(this.totalPages);
    // }
    PaginatorComponent.prototype.ngOnChanges = function (changes) {
        //alert(JSON.stringify(changes));
        this.totalRecords = changes.totalRecords.currentValue;
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        this.currentPage = 0;
        //alert(this.totalPages);
    };
    PaginatorComponent.prototype.pageChanged = function (direction) {
        if (direction == 0 && this.currentPage != 0) {
            this.currentPage--;
            this.emitPageChangeEvent();
        }
        else if (direction == 1 && this.currentPage != this.totalPages - 1) {
            this.currentPage++;
            this.emitPageChangeEvent();
        }
    };
    PaginatorComponent.prototype.goToFirst = function () {
        if (this.currentPage != 0) {
            this.currentPage = 0;
            this.emitPageChangeEvent();
        }
    };
    PaginatorComponent.prototype.goToLast = function () {
        if (this.currentPage != this.totalPages - 1) {
            this.currentPage = this.totalPages - 1;
            this.emitPageChangeEvent();
        }
    };
    PaginatorComponent.prototype.emitPageChangeEvent = function () {
        this.pageChange.emit({
            value: {
                'skip': this.currentPage * this.pageSize,
                'take': this.pageSize
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginatorComponent.prototype, "totalRecords", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginatorComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginatorComponent.prototype, "pageChange", void 0);
    PaginatorComponent = __decorate([
        core_1.Component({
            selector: 'fi-paginator',
            templateUrl: 'paginator.component.html',
            styleUrls: ['paginator.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());
exports.PaginatorComponent = PaginatorComponent;
//# sourceMappingURL=paginator.component.js.map