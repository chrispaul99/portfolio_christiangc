import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'downloadCV'
})
export class DownloadCVPipe implements PipeTransform {

  transform(lang:string): string {
    switch(lang){
      case "es": return "https://drive.google.com/uc?export=download&id=1dTxnb_tIc0d5dohhc_GvxKzgDiLwBiRS";
      case "en": return "https://drive.google.com/uc?export=download&id=1uUajQifwPvcpGjateOkkOMK2MpykKHMQ";
      default:return "";
    }
  }

}
