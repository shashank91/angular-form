import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
declare var jquery: any;
declare var $: any;


if(screen.width <=767)  {
var is_keyboard = false;
var is_landscape = false;
var initial_screen_size = window.innerHeight;

window.addEventListener('resize', function()  {
  is_keyboard = (window.innerHeight < initial_screen_size);
  is_landscape = (screen.height < screen.width);
  updateViews();
}, false);
}

function updateViews()  {
  if(!is_landscape)  {
      if (is_keyboard)  {
        document.getElementsByClassName("overlay")[0].classList.add('keyboard');
    }  else  {
        document.getElementsByClassName("overlay")[0].classList.remove('keyboard');
    }
  }
  
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
    if (this.route.snapshot.paramMap.get('username')) {
      this.username = this.route.snapshot.paramMap.get('username').split('wishcardstringsubstitute').join(' ');
    }
    console.log(this.username);
  }

  shareCard() {
    this.createCard = false;
    const username = this.form.value.username.replace(/\s/g, 'wishcardstringsubstitute');
    this.cardUrl = this.sanitizeUrl('whatsapp://send?text=http://jubileehills.info/card/' + username);
  }

  shareOnFb() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://jubileehills.info/card/' + encodeURI(this.form.value.username),
        'facebook-share-dialog',
        'width=800,height=600'
    );
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  replaceAll(str, term, replacement) {
    return str.replace(new RegExp(term, 'g'), replacement);
  }

  newSender() {
    this.username = this.form.value.username;

    if (this.username === '') {
      if (this.route.snapshot.paramMap.get('username')) {
        this.username = this.route.snapshot.paramMap.get('username').split('wishcardstringsubstitute').join(' ');
      }
        console.log(this.username);
    }
  }

}
