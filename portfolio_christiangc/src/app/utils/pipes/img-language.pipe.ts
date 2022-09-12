import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgLanguage'
})
export class ImgLanguagePipe implements PipeTransform {

  transform(lang:string): string {
    switch(lang){
      case "es": return "../../../assets/img/spanish.png";
      case "en": return "../../../assets/img/english.png";
      default:return "";
    }
  }

}
