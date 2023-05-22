import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-pay',
  templateUrl: './invoice-pay.component.html',
  styleUrls: ['./invoice-pay.component.css']
})
export class InvoicePayComponent {
 
  payDetails = [
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', invoiceRaisedOn:'No Record Found', markAsPaid:'No Record Found' },
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', invoiceRaisedOn:'No Record Found', markAsPaid:'No Record Found' },
    { projectId:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', invoiceRaisedOn:'No Record Found', markAsPaid:'No Record Found' }
  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this. payDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}

}
