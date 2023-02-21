//Modules
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from "@angular/router";

//Components
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProductsComponent } from "./components/products/products.component";
import { CardsComponent } from "./components/products/cards/cards.component";
import { DescriptionCardComponent } from "./components/products/descriptionCard/descriptionCard.component";

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        ProductsComponent,
        CardsComponent,
        DescriptionCardComponent,
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        NotFoundComponent
    ],
    providers: []
})

export class SharedModule{
    constructor(){}
}