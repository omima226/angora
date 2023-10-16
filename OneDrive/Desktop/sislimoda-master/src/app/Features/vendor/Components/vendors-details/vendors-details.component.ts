import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vendors-details',
  templateUrl: './vendors-details.component.html',
  styleUrls: ['./vendors-details.component.scss'],
})
export class VendorDetailsComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
