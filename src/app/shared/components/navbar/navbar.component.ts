import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef | undefined ;
  @ViewChild('navMenu') navMenu: ElementRef | undefined ;


  constructor(private readonly afAuth: AngularFireAuth, private readonly router: Router) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navBurger?.nativeElement.classList.toggle('is-active');
    this.navMenu?.nativeElement.classList.toggle('is-active');
  }

  onLogout(): void {
    this.afAuth.signOut().then(()=> {
      this.router.navigate(['authentication'])
    })
  }

}
