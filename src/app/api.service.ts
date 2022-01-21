import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Visit } from './visit';
import { Doctor } from 'src/doctor';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public registerDoctor(doctor: any) {
    return this.http.post("http://localhost:8087/saveDoctor", doctor, { responseType: 'text' as 'json' });
  }

  public registerPatient(patient: any) {
    return this.http.post("http://localhost:8087/savePatient", patient, { responseType: 'text' as 'json' });
  }

  public registerVisit(id: number, visit: any) {
    return this.http.post(`${"http://localhost:8087/saveVisit"}/${id}`, visit, { responseType: 'text' as 'json' });
  }

  public getAllDoctors() {
    return this.http.get("http://localhost:8087/getAllDoctors");
  }


  public getAllDepartments() {
    return this.http.get("http://localhost:8087/getAllDepartments");
  }


  public getAllPatients() {
    return this.http.get("http://localhost:8087/getAllPatients");
  }

  public showVisit(id: number) {
    return this.http.get(`${"http://localhost:8087/allVisitsByPatientId"}/${id}`);
  }

  public getVisitById(id: number): Observable<Object> {
    return this.http.get(`${"http://localhost:8087/getVisitById"}/${id}`);
  }

  public getPatientIdFromVisit(id: number) {
    return this.http.get(`${"http://localhost:8087/getPatientIdFromVisit"}/${id}`);
  }

  public addPrescription(id: number, visit: Visit): Observable<Object> {
    return this.http.put(`${"http://localhost:8087/update"}/${id}`, visit);
  }

  public getDoctorByName(name: any) {
    return this.http.get("http://localhost:8087/getDoctorByName/" + name);
  }

  public deleteDoctorById(id: number) {
    return this.http.delete("http://localhost:8087/deleteDoctor/" + id);
  }

  public getPatientById(id: any) {
    return this.http.get("http://localhost:8087/getPatientById/" + id);
  }

  public getAllDiseases()
  {
    return this.http.get("http://localhost:8087/getAllDiseases");
  }

  public getName() {
    return 'surya';
  }

}
