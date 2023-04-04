import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import {map, Observable, tap} from "rxjs";
import {RAPPORT} from "../../modeles/rapport";
import {RapportsService} from "../../services/rapports.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-new-rapport',
  templateUrl: './new-rapport.component.html',
  styleUrls: ['./new-rapport.component.scss']
})
export class NewRapportComponent implements OnInit{

  formulaire!: FormGroup;
  currenRapport$!: Observable<RAPPORT>
  rapport?: RAPPORT;

  constructor(private formBuilder: FormBuilder, private rapportsService: RapportsService, private router: Router) { }

  ngOnInit(): void {
    const dateRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp|bmp|ico|tiff|jfif|pjpeg|pjp)$');

    this.formulaire = this.formBuilder.group({
      nomTechnicien: [null, [Validators.required, Validators.minLength(3)]],
      nomClient: [null, [Validators.required, Validators.minLength(1)]],
      adresseClient: [null, [Validators.required, Validators.minLength(3)]],
      marqueChaudiere: [null, [Validators.required, Validators.minLength(0)]],
      modeleChaudiere: [null, [Validators.required]],
      dateMiseEnService: [null, [Validators.required, Validators.pattern(dateRegex)]],
      dateIntervention: [null, [Validators.required, Validators.pattern(dateRegex)]],
      numeroSerie: [null, [Validators.required, Validators.min(0)]],
      descriptionIntervention: [null, [Validators.required, Validators.minLength(0)]],
      tempsPasse: [null, [Validators.required, Validators.min(0)]]
    }, {
      updateOn: 'blur'
    })

    this.currenRapport$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        nomTechnicien: formValue.nomTechnicien,
        nomClient: formValue.nomClient,
        adresseClient: formValue.adresseClient,
        marqueChaudiere: formValue.marqueChaudiere,
        modeleChaudiere: formValue.modeleChaudiere,
        dateMiseEnService: formValue.dateMiseEnService,
        dateIntervention: formValue.dateIntervention,
        numeroSerie: formValue.numeroSerie,
        descriptionIntervention: formValue.descriptionIntervention,
        tempsPasse: formValue.tempsPasse
      } as RAPPORT
    )));

  }

  addRapport() {
    // Création de l'objet RAPPORT
    this.rapport = {
      id: 0,
      nomTechnicien: this.formulaire.get('nomTechnicien')?.value,
      nomClient: this.formulaire.get('nomClient')?.value,
      adresseClient: this.formulaire.get('adresseClient')?.value,
      marqueChaudiere: this.formulaire.get('marqueChaudiere')?.value,
      modeleChaudiere: this.formulaire.get('modeleChaudiere')?.value,
      dateMiseEnService: this.formulaire.get('dateMiseEnService')?.value,
      dateIntervention: this.formulaire.get('dateIntervention')?.value,
      numeroSerie: this.formulaire.get('numeroSerie')?.value,
      descriptionIntervention: this.formulaire.get('descriptionIntervention')?.value,
      tempsPasse: this.formulaire.get('tempsPasse')?.value

    }
    // Appel du service pour ajouter le RAPPORT
    this.rapportsService.createRapport(this.rapport).pipe(tap(() => this.router.navigate(['/ListeRapport']))).subscribe();
  }


}
