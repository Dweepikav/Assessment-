import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { EditPrescriptionComponent } from './edit-prescription/edit-prescription.component';
import { HomeComponent } from './home/home.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { RegisterVisitComponent } from './register-visit/register-visit.component';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';
import { ShowPatientsComponent } from './show-patients/show-patients.component';
import { ShowVisitComponent } from './show-visit/show-visit.component';

const routes: Routes = [
  {path:'registerDoctor',component:DoctorRegistrationComponent},
  {path:'registerPatient',component:PatientRegistrationComponent},
  {path:'showDoctor',component:ShowDoctorsComponent},
  {path:'showPatient',component:ShowPatientsComponent},
  {path:'showVisit/:id',component:ShowVisitComponent},
  {path:'addVisit/:id',component:RegisterVisitComponent},
  {path:'addPrescription/:id',component:EditPrescriptionComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
