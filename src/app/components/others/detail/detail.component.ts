import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<DetailComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
