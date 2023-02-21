//Modules
import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";

//Component
import { HomeComponent } from "./home/containers/home.component";
import { SliderComponent } from "./home/components/slider/slider.component";
import { PublicComponent } from "./public.component";

@NgModule({
    imports: [
        PublicRoutingModule,
        SharedModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        SliderComponent
    ],
    exports: [
    ],
    providers: []
})

export class PublicModule{
    constructor(){}
}