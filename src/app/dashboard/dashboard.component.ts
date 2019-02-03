import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {GetResponse} from '../model/getres.model';
import {ColModel} from '../model/col.model';
import {TicketOrderModel} from '../model/ticketorder.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  public cols: ColModel[];
  public data: TicketOrderModel[] = [];
  public selectedData: TicketOrderModel[] = [];
  public summaJegy = 0;

  public ngOnInit(): void {
    this.cols = [
      { field: 'vezeteknev', header: 'Vezetéknév' },
      { field: 'keresztnev', header: 'Keresztnév' },
      { field: 'email', header: 'Email-cím' },
      { field: 'telefonszam', header: 'Telefonszám' },
      { field: 'jegy', header: 'Jegyek száma' },
      { field: 'datum', header: 'Rendelés dátuma' }
    ];
    this.loadOreders();
  }

  private loadOreders(): void {
    this.summaJegy = 0;
    this.dataService.getOrders().subscribe( (response: GetResponse) => {
      if (response.data) {
        response.data.forEach( rendeles => {
          this.summaJegy += Number(rendeles.jegy);
        });
        console.log(response.data);
        this.data = response.data;
      }
    });
  }

  public deleteSelectedData(): void {
    console.log(this.selectedData);
    if (this.selectedData.length > 0) {
      this.selectedData.forEach( (item, index) => {
        this.dataService.deleteOrder(item.id).subscribe( response => {
          console.log(response);
          if (index === this.selectedData.length - 1) {
            this.selectedData = [];
            this.loadOreders();
          }
        });
      });
    }
  }

  public logout(): void {
    this.router.navigate(['/admin']);
  }

}
