import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "firstLetterToUpperCase",
  standalone: true,
  pure: true
})
export class firstLetterToUpperCase implements PipeTransform{

  transform(value: any, ...args: any[]): any {
    let newWrd = value.split("");
    newWrd[0] = value.split(" ")[0].split("")[0].toUpperCase();
    return newWrd.join("")
  }
}
