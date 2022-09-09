import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'downloadCV'
})
export class DownloadCVPipe implements PipeTransform {

  transform(lang:string): string {
    switch(lang){
      case "es": return "https://drive.google.com/uc?export=download&id=122DQXYJi7sW1koCMCn4ZkpdSSj0Kcmac";
      case "en": return "https://drive.google.com/uc?export=download&id=1uUajQifwPvcpGjateOkkOMK2MpykKHMQ";
      default:return "";
    }
  }

}
