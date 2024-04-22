import {computed, effect, Injectable, signal} from "@angular/core";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  public auth = signal<boolean>(false)

  public getAuth(){
      return this.auth;
  }

  public login() {
    this.auth.update((prev)=>prev=true)
  }

  public logout() {
    this.auth.update((prev)=>prev=false)
  }
}
