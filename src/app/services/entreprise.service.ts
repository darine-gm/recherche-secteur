import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Secteur } from '../model/secteur.models';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  entreprises: Entreprise[];
  secteurs!: Secteur[];
  entreprisesRecherche! : Entreprise[];
  constructor() {

    console.log("création du service entreprise");
    this.secteurs = [
    { idSecteur: 1, nomSecteur: "Informatique" },
    { idSecteur: 2, nomSecteur: "Commerce" }
  ];

     this.entreprises = [
  {
    idEntreprise: 1,
    nomEntreprise: "Tunisie Telecom",
    adresse: "Tunis",
    dateCreation: new Date("1995-04-17"),
    chiffreAffaires: 1200000,
    secteur:{idSecteur: 1, nomSecteur: "Informatique" } 
  },

  {
    idEntreprise: 2,
    nomEntreprise: "Carthage Solutions",
    adresse: "Sousse",
    dateCreation: new Date("2010-09-12"),
    chiffreAffaires: 750000   ,
    secteur:{ idSecteur: 2, nomSecteur: "Commerce" }
  },

  {
    idEntreprise: 3,
    nomEntreprise: "TechnoPlus",
    adresse: "Sfax",
    dateCreation: new Date("2018-02-25"),
    chiffreAffaires: 450000,
    secteur:{idSecteur: 1, nomSecteur: "Informatique" } 
  }
];
  }

  listeEntreprises(): Entreprise[] {
    console.log('Secteurs fel service:', this.secteurs);
    return this.entreprises;
  }

  ajouterEntreprise(entreprise: Entreprise) {
    this.entreprises.push(entreprise);
  }

  supprimerEntreprise(ent: Entreprise) {

    const index = this.entreprises.indexOf(ent, 0);

    if (index > -1) {
      this.entreprises.splice(index, 1);
    }
  }

  consulterEntreprise(id: number): Entreprise {
    return this.entreprises.find(e => e.idEntreprise == id)!;
  }

  updateEntreprise(ent: Entreprise) {

    const index = this.entreprises.indexOf(ent, 0);

    if (index > -1) {
      this.entreprises.splice(index, 1);
      this.entreprises.splice(index, 0, ent);
    }
  }
  
  listeSecteurs(): Secteur[] {
    return this.secteurs;
  }

  consulterSecteur(id: number): Secteur {
    return this.secteurs.find(
      sec => sec.idSecteur == id
      )!;
    }
    rechercheParSecteur(idSecteur : number): Entreprise[]{
      this.entreprisesRecherche=[];
      this.entreprises.forEach((cur , index) => {
        if(idSecteur == cur.secteur.idSecteur){
          console.log("cur "+cur);
          this.entreprisesRecherche.push(cur);
        }
      });
      return this.entreprisesRecherche;
    }

}