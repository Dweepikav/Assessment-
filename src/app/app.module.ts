import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { ShowPatientsComponent } from './show-patients/show-patients.component';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { ShowVisitComponent } from './show-visit/show-visit.component';
import { RegisterVisitComponent } from './register-visit/register-visit.component';
import { EditPrescriptionComponent } from './edit-prescription/edit-prescription.component';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { FilterIdPipe } from './filter-id.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientRegistrationComponent,
    DoctorRegistrationComponent,
    ShowPatientsComponent,
    ShowDoctorsComponent,
    ShowVisitComponent,
    RegisterVisitComponent,
    EditPrescriptionComponent,
    FilterPipe,
    HomeComponent,
    FilterIdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
