import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DownloadCVPipe } from 'src/app/utils/pipes/download-cv.pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
