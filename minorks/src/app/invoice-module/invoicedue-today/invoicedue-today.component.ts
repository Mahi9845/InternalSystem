import { Component } from '@angular/core';

@Component({
  selector: 'app-invoicedue-today',
  templateUrl: './invoicedue-today.component.html',
  styleUrls: ['./invoicedue-today.component.css']
})
export class InvoicedueTodayComponent {

  currentDetails = [
    { projectId:'No Record Found',projectManager:'No Record Found',deliveryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', expectedDate:'No Record Found'},
    { projectId:'No Record Found',projectManager:'No Record Found',deliveryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', expectedDate:'No Record Found'},
    { projectId:'No Record Found',projectManager:'No Record Found',deliveryManager:'No Record Found',milestoneName:'No Record Found', percentage:'No Record Found', milestoneAmount:'No Record Found', expectedDate:'No Record Found'}

  ];


itemsPerPage = 10;
currentPage = 1;
totalItems = this.currentDetails.length;

PerPage: number = 100;
itemsPerPageOptions: number[] = [10, 25, 50, 100];
onItemsPerPageChange(): void {
  this.currentPage = 1;

}
}
