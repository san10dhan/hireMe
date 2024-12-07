import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addNewAppointment(): void {
    if(this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      const newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
    }
  }

  deleteAnAppointment(index: number): void {
    this.appointments.splice(index, 1);
  }
}
