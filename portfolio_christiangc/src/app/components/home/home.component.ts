import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DownloadCVPipe } from 'src/app/utils/pipes/download-cv.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lang = 'es';
  constructor(private translate: TranslateService) {
   }

  ngOnInit(): void {
  }

  downloadCV():string{
    this.lang = this.translate.currentLang;
    return new DownloadCVPipe().transform(this.lang);
  }

}
