import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entreprise } from '../model/entreprise.model';
import { EntrepriseService } from '../services/entreprise.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entreprises',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './entreprises.component.html'
})
export class EntreprisesComponent implements OnInit {

  entreprises: Entreprise[];

  constructor(private entrepriseService: EntrepriseService) {
    this.entreprises = entrepriseService . listeEntreprises();
  }

  

  supprimerEntreprise(ent: Entreprise) {

    let conf = confirm("etes-vous sur ?");

    if (conf) {
      this.entrepriseService.supprimerEntreprise(ent);
    }
  }
  ngOnInit() {
    //this.entreprises = this.entrepriseService.listeEntreprises();
  }
}