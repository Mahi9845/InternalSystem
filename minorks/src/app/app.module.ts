import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PersonalDetailsComponent } from '../app/capture-module/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from '../app/capture-module/professional-details/professional-details.component';
import { RegisterComponent } from '../app/capture-module/register/register.component';
import { ChangePasswordComponent } from './Password-module/change-password/change-password.component';

// import { ChangePasswordComponent } from './Password-module/change-password/change-password.component';
import { ModifyProfessionalDetailsComponent } from './employee-module/modify-professional-details/modify-professional-details.component';
import { ModifyPersonalDetailsComponent } from './employee-module/modify-personal-details/modify-personal-details.component';
import { SearchEmployeeDetailsComponent } from './employee-module/search-employee-details/search-employee-details.component';
import { FilterPipe } from './filter.pipe';

import { ConfigureLeavesComponent } from '../app/holidays-module//configure-leaves/configure-leaves.component';
import { HolidaysComponent } from './holidays-module/holidays/holidays.component';
import { ModifyLeavesComponent } from '../app/holidays-module/modify-leaves/modify-leaves.component';
import { RemoveLeavesComponent } from '../app/holidays-module/remove-leaves/remove-leaves.component';
import { ListOfHolidaysComponent } from './holidays-module/list-of-holidays/list-of-holidays.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListOfLeavesComponent } from './holidays-module/viewLeaveData/list-of-leaves.component';

import { CommonCodeDetailsComponent } from './common-code-module/common-code-details/common-code-details.component';
import { CommonCodeDetailsDeleteComponent } from './common-code-module/common-code-details-delete/common-code-details-delete.component';
import { CommonCodeDetailsModifyComponent } from './common-code-module/common-code-details-modify/common-code-details-modify.component';
import { ViewCommonCodeComponent } from './common-code-module/view-common-code/view-common-code.component';

import { AssetDetailsComponent } from './asset-mangement-system-module/asset-details/asset-details.component';
import { ITAssetAllocationComponent } from './asset-mangement-system-module/itasset-allocation/itasset-allocation.component';
import { AddITAssetDetailsComponent } from './asset-mangement-system-module/add-itasset-details/add-itasset-details.component';
import { SearchAssetIdComponent } from './asset-mangement-system-module/search-asset-id/search-asset-id.component';
import { SearchEmpIdAssetComponent } from './asset-mangement-system-module/search-emp-id-asset/search-emp-id-asset.component'
import { AddNonItAssetDetailsComponent } from './asset-mangement-system-module/add-non-it-asset-details/add-non-it-asset-details.component'
import { ModifyItAssetDetailsComponent } from './asset-mangement-system-module/modify-it-asset-details/modify-it-asset-details.component';
import { ViewItAssetDetailsComponent } from './asset-mangement-system-module/view-it-asset-details/view-it-asset-details.component';
import { ModifyNonItAssetDetailsComponent } from './asset-mangement-system-module/modify-non-it-asset-details/modify-non-it-asset-details.component';
import { ViewNonItAssetDetailsComponent } from './asset-mangement-system-module/view-non-it-asset-details/view-non-it-asset-details.component';
import { ModifyItAllocationDetailsComponent } from './asset-mangement-system-module/modify-it-allocation-details/modify-it-allocation-details.component';
import { ViewItAllocationDetailsComponent } from './asset-mangement-system-module/view-it-allocation-details/view-it-allocation-details.component'

import { ApplyLeaveComponent } from './request-module/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './request-module/approve-leave/approve-leave.component';
import { LeaveBalanceComponent } from './request-module/leave-balance/leave-balance.component';
import { LeaveSummaryComponent } from './request-module/leave-summary/leave-summary.component';
import { ViewLeaveComponent } from './request-module/view-leave/view-leave.component';
import { ViewHolidaysComponent } from './request-module/view-holidays/view-holidays.component';
import { MarkLeaveComponent } from './request-module/mark-leave/mark-leave.component';
import { UnMarkLeaveComponent } from './request-module/un-mark-leave/un-mark-leave.component';


import { CacheExampleComponent } from './cache-example/cache-example.component';
import { CacheService } from './cache.service';


import { MarkDetailsComponent } from './mark-module/mark-details/mark-details.component';
import { RecallmilestoneComponent } from './mark-module/recallmilestone/recallmilestone.component';
import { SearchProjectDetailsComponent } from './mark-module/search-project-details/search-project-details.component';

import { ChooseinvoiceDetailsComponent } from './invoice-module/chooseinvoice-details/chooseinvoice-details.component';
import { GenerateinrReportComponent } from './invoice-module/generateinr-report/generateinr-report.component';
import { GenerateusdReportComponent } from './invoice-module/generateusd-report/generateusd-report.component';
import { InvoicedueListComponent } from './invoice-module/invoicedue-list/invoicedue-list.component';
import { InvoicedueTodayComponent } from './invoice-module/invoicedue-today/invoicedue-today.component';
import { InvoiceFPComponent } from './invoice-module/invoice-fp/invoice-fp.component';
import { InvoicePayComponent } from './invoice-module/invoice-pay/invoice-pay.component';
import { InvoiceRaiseComponent } from './invoice-module/invoice-raise/invoice-raise.component';
import { InvoiceRegeneratechooseComponent } from './invoice-module/invoice-regeneratechoose/invoice-regeneratechoose.component';
import { ReportComponent } from './invoice-module/report/report.component';

import { FooterComponent } from './common-module/footer/footer.component';
import { HeaderComponent } from './common-module/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ProfessionalDetailsComponent,
    RegisterComponent,

    ChangePasswordComponent,

    ModifyProfessionalDetailsComponent,
    ModifyPersonalDetailsComponent,
    SearchEmployeeDetailsComponent,
 
    FilterPipe,
    ConfigureLeavesComponent,
    HolidaysComponent,
    ModifyLeavesComponent,
    RemoveLeavesComponent,
    ListOfHolidaysComponent,
    ListOfLeavesComponent,
    CommonCodeDetailsComponent ,
    CommonCodeDetailsDeleteComponent,
    CommonCodeDetailsModifyComponent,
    ViewCommonCodeComponent,
    AssetDetailsComponent,
    ITAssetAllocationComponent,
    AddITAssetDetailsComponent,
    SearchAssetIdComponent,
    SearchEmpIdAssetComponent,
    AddNonItAssetDetailsComponent,
    ModifyItAssetDetailsComponent,
    ViewItAssetDetailsComponent,
    ModifyNonItAssetDetailsComponent,
    ViewNonItAssetDetailsComponent,
    ModifyItAllocationDetailsComponent,
    ViewItAllocationDetailsComponent,
    ApplyLeaveComponent,
    ApproveLeaveComponent,
    LeaveBalanceComponent,
    LeaveSummaryComponent,
    ViewLeaveComponent,
    ViewHolidaysComponent ,
    MarkLeaveComponent,
    UnMarkLeaveComponent,
    CacheExampleComponent,
    MarkDetailsComponent,
    RecallmilestoneComponent,
    SearchProjectDetailsComponent,
    ChooseinvoiceDetailsComponent,
    GenerateinrReportComponent,
    GenerateusdReportComponent,
    InvoicedueListComponent,
    InvoicedueTodayComponent,
    InvoiceFPComponent,
    InvoicePayComponent,
    InvoiceRaiseComponent,
    InvoiceRegeneratechooseComponent,
    ReportComponent,
    FooterComponent,
    HeaderComponent
    
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
   
  
  ],
  providers: [CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
