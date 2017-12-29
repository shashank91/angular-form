import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.css']
})
export class WishCardComponent implements OnInit {

  username = '';
  public form: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.form = new FormGroup({
      'username': new FormControl('')
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username);
  }

  newSender() {
    this.username = this.form.value.username;

    if (this.username === '') {
      this.username = this.route.snapshot.paramMap.get('username');
    }
  }

}
