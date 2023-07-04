import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class UrlSafe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {

    console.log("entra o no entra?")
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}