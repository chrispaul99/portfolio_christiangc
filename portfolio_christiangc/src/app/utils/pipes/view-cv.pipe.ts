import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewCv'
})
export class ViewCvPipe implements PipeTransform {

  transform(lang:string): string {
    switch(lang){
      case "es": return "https://drive.google.com/file/d/1dTxnb_tIc0d5dohhc_GvxKzgDiLwBiRS/preview";
      case "en": return "https://drive.google.com/file/d/1uUajQifwPvcpGjateOkkOMK2MpykKHMQ/preview";
      default:return "";
    }
  }

}
