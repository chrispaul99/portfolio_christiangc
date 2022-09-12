import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { DownloadCVPipe } from 'src/app/utils/pipes/download-cv.pipe';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lang = 'es';
  constructor(private translate: TranslateService) {
    
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
  downloadCV():string{
    this.lang = this.translate.currentLang;
    return new DownloadCVPipe().transform(this.lang);
  }

}
