import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import  { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from "@angular/forms";

@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        FormsModule
    ]
})
export class MaterialModule{}