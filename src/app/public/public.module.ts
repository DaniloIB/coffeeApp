//Modules
import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";

//Component
import { PublicComponent } from "./public.component";

@NgModule({
    imports: [
        PublicRoutingModule,
        SharedModule
    ],
    declarations: [
        PublicComponent
    ],
    exports: [],
    providers: []
})

export class PublicModule{
    constructor(){}
}