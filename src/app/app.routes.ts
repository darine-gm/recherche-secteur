import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { RechercheParSecteurComponent } from './recherche-par-secteur/recherche-par-secteur.component';
export const routes: Routes = [
    {path: "entreprises",component : EntreprisesComponent},
    {path: "add-entreprise",component : AddEntrepriseComponent},
    {path: "updateEntreprise/:id", component: UpdateEntrepriseComponent},
    {path: "rechercheParSecteur", component: RechercheParSecteurComponent},
    {path: '',redirectTo:"entreprises", pathMatch: "full"}
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
