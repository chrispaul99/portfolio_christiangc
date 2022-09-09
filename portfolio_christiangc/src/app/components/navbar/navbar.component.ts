import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  locale = ['es','en'];
  selectedLanguage = 'es';
  constructor(public translate: TranslateService, public languageService: LanguageService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.use('es');
    this.translate.setDefaultLang('es');
    this.languageService.currentLanguage.subscribe(lang => {
      this.translate.use(lang);
    })
   }

  ngOnInit(): void {
  }

  changeLanguage():void {
    const index = this.locale.findIndex(e=>e==this.selectedLanguage);
    this.selectedLanguage = index+1==this.locale.length?this.locale[0]:this.locale[index+1];
    this.languageService.changeSelectedLangage(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

}
