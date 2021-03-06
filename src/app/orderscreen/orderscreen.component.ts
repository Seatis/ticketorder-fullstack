import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../utils/validators.util';
import {MessageService} from 'primeng/api';
import {TicketOrderModel} from '../model/ticketorder.model';
import {DataService} from '../data.service';
import {PostResponse} from '../model/postres.model';

@Component({
  selector: 'app-orderscreen',
  templateUrl: './orderscreen.component.html',
  styleUrls: ['./orderscreen.component.css']
})
export class OrderscreenComponent implements OnInit {

  public ticketForm: FormGroup;
  public msgs: any[] = [];
  private ticketOrder: TicketOrderModel;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private dataService: DataService) { }

  public ngOnInit(): void {
    this.ticketForm = this.formBuilder.group({
      'vezeteknev': [''],
      'keresztnev': [''],
      'email': [''],
      'telefonszam': ['', [Validators.required, Validators.pattern('^[\+]?[0-9\-/ ()]*')]],
      'jegy': ['', [Validators.required, AppValidators.numberValidator]]
    });
  }

  public postForm(): void {
    if (this.checkValidForm()) {
      this.ticketOrder = <TicketOrderModel>this.ticketForm.value;
      this.ticketOrder.datum = new Date().toLocaleString();
      const body: string = JSON.stringify(this.ticketOrder);
      this.dataService.postOrder(body).subscribe( (response: PostResponse) => {
        if (!response.error) {
          this.messageService.add({severity: 'success', summary: 'Sikeres jegyrendelés!', detail: 'Kérem, ellenőrizze email fiókját!'});
          this.ticketForm.reset();
        } else {
          this.messageService.add({severity: 'error', summary: 'Sikertelen!', detail: 'A jegyrendelés háttérrendszeri hiba miatt nem valósult meg, kérem próbálja újra később!'});
        }
      });
    }
  }

  private checkValidForm(): boolean {
    if (this.ticketForm.controls.email.value && this.ticketForm.controls.email.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'Az email-cím formátuma nem megfelelő!'});
      return false;
    } else if (this.ticketForm.controls.telefonszam.value && this.ticketForm.controls.telefonszam.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'Érvénytelen telefonszám!'});
      return false;
    } else if (this.ticketForm.controls.jegy.value && this.ticketForm.controls.jegy.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'A jegyek száma csak pozitív egész szám lehet!'});
      return false;
    } else if (this.ticketForm.invalid) {
      this.messageService.add({severity: 'error', summary: 'Figyelem!', detail: 'A csillaggal jelölt mezők kitöltése kötelező!'});
      return false;
    } else {
      return true;
    }
  }

}
