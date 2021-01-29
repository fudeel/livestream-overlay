import { Component, OnInit } from '@angular/core';
import {MainSectionCard} from "../shared/models/MainSectionCard";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  isEdit: boolean = false;

  teamOneName: string = '--';
  teamOneScore: string = '0';
  teamTwoName: string = '--';
  teamTwoScore: string = '0';

  mainSectionCards: MainSectionCard[] = [{
    text: 'Update Score',
    image: ''
  }]


  currentMatchForm = this.fb.group({
    teamOneName: ['', Validators.required],
    teamTwoName: ['', Validators.required],
    teamOneScore: ['', Validators.required],
    teamTwoScore: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.isEdit = true;
  }

  onCancelFormEdit() {
    this.isEdit = false;
  }

  onConfirmCurrentMatchForm() {
    this.teamOneName = this.currentMatchForm.controls.teamOneName.value;
    this.teamTwoName = this.currentMatchForm.controls.teamTwoName.value;
    this.teamOneScore = this.currentMatchForm.controls.teamOneScore.value;
    this.teamTwoScore = this.currentMatchForm.controls.teamTwoScore.value;
    this.isEdit = false;
  }

}
