import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import {Router} from '@angular/router';
import {AuthService} from "../shared/services/auth.service";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private readonly auth: AngularFireAuth, private readonly router: Router, private readonly authService: AuthService, private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res: any) => {
      console.log('res: ',res)
      if (res) {
        const {uid, email, displayName} = res.user;
        const customUser: CustomUser = {
          id: uid,
          displayName: displayName,
          email: email
        }
        this.userService.addUser(uid, customUser).then(()=> {
          console.log('done')
        })
      }

      this.router.navigate(['private']);
    }).catch(err => {
      console.log('There was an error on logging in: ', err);
    });
  }
}


export class CustomUser {
  id: string | null | undefined;
  email: string | null | undefined;
  displayName: string | null | undefined;
}
