import { Component, OnInit } from '@angular/core';
import {DetailComponent} from '../../others/detail/detail.component';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openDetail(): void {
    this.bottomSheet.open(DetailComponent);
  }

}
