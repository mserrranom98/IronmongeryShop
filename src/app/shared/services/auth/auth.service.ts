import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  /** Registrarse en la pagina con correo y contraseña */
  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  loginEmail(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.subscribe(auth => auth);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
