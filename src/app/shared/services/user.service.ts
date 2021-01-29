import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import User = firebase.User;
import {CustomUser} from "../../authentication/authentication.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly afs: AngularFirestore) { }


  async addUser(uid: string | undefined, data: CustomUser | null) {
    await this.afs.collection('users').doc(uid).set(data);
  }


}
