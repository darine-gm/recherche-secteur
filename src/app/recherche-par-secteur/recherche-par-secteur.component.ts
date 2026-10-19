import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { CommonModule, DatePipe } from '@angular/common';
import { EntrepriseService } from '../services/entreprise.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Secteur } from '../model/secteur.models';
import { SearchFilterPipe } from '../search-filter.pipe';
@Component({
  selector: 'app-recherche-par-secteur',
  standalone: true,
 imports: [RouterLink, DatePipe,FormsModule,CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-secteur.component.html',
  styles: ``
  
})
export class RechercheParSecteurComponent implements OnInit{
entreprises: Entreprise[] = [];
 secteurs : Secteur[]=[];
 IdSecteur: number = 0;
 allEntreprises! : Entreprise[];
 searchTerm!: string;
  constructor(private entrepriseService: EntrepriseService){}
  ngOnInit(): void {
  /*this.secteurs = this.entrepriseService.listeSecteurs()
  this.entreprises = [];
  console.log('Secteurs:', this.secteurs);
  //alert('Nombre de secteurs: ' + this.secteurs.length);*/
  this.secteurs = this.entrepriseService.listeSecteurs();
  this.allEntreprises = this.entrepriseService.listeEntreprises();
  this.entreprises = this.allEntreprises;
}
  
  supprimerEntreprise(ent: Entreprise) {

    let conf = confirm("etes-vous sur ?");

    if (conf) {
      this.entrepriseService.supprimerEntreprise(ent);
      this.entreprises = this.entrepriseService.rechercheParSecteur(this.IdSecteur);
    }
  }
onChange(): void {
  console.log('Secteur changé:', this.IdSecteur);
  this.entreprises = this.entrepriseService.rechercheParSecteur(this.IdSecteur);
}


onKeyUp(filterText : string){
this.entreprises = this.allEntreprises.filter(item =>item.nomEntreprise.toLowerCase().includes(filterText));
  }
  



}