import { Component, Input, OnInit } from '@angular/core';
import { RAPPORT} from "../../modeles/rapport";
import { RapportsService } from "../../services/rapports.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {

  @Input() leRapport!: RAPPORT;
  unrapport!: RAPPORT;
  idrapport!: string;

  constructor(private rapportsService: RapportsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idrapport = this.route.snapshot.params['id'];
    if (this.idrapport) {
      this.rapportsService.getRapportById(+this.idrapport).subscribe(rapport => this.unrapport = rapport);
    }
    else {
      this.unrapport = this.leRapport;
    }
  }
}
