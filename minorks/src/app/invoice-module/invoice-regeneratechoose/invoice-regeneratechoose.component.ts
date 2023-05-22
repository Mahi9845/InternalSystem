import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-regeneratechoose',
  templateUrl: './invoice-regeneratechoose.component.html',
  styleUrls: ['./invoice-regeneratechoose.component.css']
})
export class InvoiceRegeneratechooseComponent {
  regenerateDetails = [
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found',action:'No Record Found' },
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found',action:'No Record Found' },
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found',action:'No Record Found' }
    

  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this. regenerateDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}
}
