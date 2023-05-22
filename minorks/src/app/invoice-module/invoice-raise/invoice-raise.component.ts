import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-raise',
  templateUrl: './invoice-raise.component.html',
  styleUrls: ['./invoice-raise.component.css']
})
export class InvoiceRaiseComponent {

  raisedDetails = [
    { projectId:'No Record Found',projectManager:'No Record Found',delivaryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found',raiseInvoice:'No Record Found'},
    { projectId:'No Record Found',projectManager:'No Record Found',delivaryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found',raiseInvoice:'No Record Found' },
    { projectId:'No Record Found',projectManager:'No Record Found',delivaryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found',expectedDate:'No Record Found' ,raiseInvoice:'No Record Found'}

  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this. raisedDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}
}
