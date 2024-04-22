import {Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public changeBodyBgr(cond:boolean) {
   let body = document.body;
   cond && (body.style.background = "black");
   !cond && (body.style.background = "white");
  }



  public onSubmit(form:any):void {
    form.valid &&
    this.changeBodyBgr(true);
  }

  @ViewChild("form") form:any;

  onReset() {
    this.form.onReset();
    this.changeBodyBgr(false);
  }


}
