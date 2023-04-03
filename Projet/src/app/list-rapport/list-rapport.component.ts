import { Component, OnInit } from '@angular/core';
import { RAPPORT } from 'src/modeles/rapport';
import { RapportsService } from 'src/services/rapports.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-rapport',
  templateUrl: './list-rapport.component.html',
  styleUrls: ['./list-rapport.component.scss']
})
export class ListRapportComponent {

  listRapports$!: Observable<RAPPORT[]>;

  constructor(private myRapportService: RapportsService) { }
  ngOnInit():void {
    this.listRapports$ = this.myRapportService.getAllRapports();
  }

}
