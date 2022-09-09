import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgLanguage'
})
export class ImgLanguagePipe implements PipeTransform {

  transform(lang:string): string {
    switch(lang){
      case "es": return "../../../assets/img/espana.png";
      case "en": return "../../../assets/img/reino-unido.png";
      default:return "";
    }
  }

}
