import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
declare var jquery: any;
declare var $: any;

var is_keyboard = false;
var is_landscape = false;
var initial_screen_size = window.innerHeight;

window.addEventListener('resize', function()  {
  is_keyboard = (window.innerHeight < initial_screen_size);
  is_landscape = (screen.height < screen.width);
  updateViews();
}, false);

function updateViews()  {
  
}

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.css']
})
export class WishCardComponent implements OnInit {

  username = '';
  createCard = true;
  cardUrl;
  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    this.form = new FormGroup({
      'username': new FormControl('')
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username);
  }

  shareCard() {
    this.createCard = false;
    this.cardUrl = this.sanitizeUrl('whatsapp://send?text=http://jubileehills.info/card/' + this.form.value.username);
  }

  shareOnFb() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://jubileehills.info/card/' + this.form.value.username,
        'facebook-share-dialog',
        'width=800,height=600'
    );
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  newSender() {
    this.username = this.form.value.username;

    if (this.username === '') {
      this.username = this.route.snapshot.paramMap.get('username');
    }
  }

}
