import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  selectedLanguage: string = 'en'; // Default language

constructor(private translate: TranslateService) {
  translate.addLangs(['en', 'es']);
  translate.setDefaultLang('en');

  const browserLang = translate.getBrowserLang();
  translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'en');
}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
  }
}



