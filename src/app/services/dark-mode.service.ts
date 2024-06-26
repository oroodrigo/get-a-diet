import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private localStorageKey = 'darkMode';

  constructor() {}

  setDarkMode(isDarkMode: boolean) {
    const value = isDarkMode ? 'enabled' : 'disabled';
    localStorage.setItem(this.localStorageKey, value);
    this.applyDarkMode(isDarkMode);
  }

  getDarkMode(): boolean {
    const value = localStorage.getItem(this.localStorageKey);
    return value === 'enabled';
  }

  applyDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}







// import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

// @Injectable({
//   providedIn: 'root'
// })
// export class DarkModeService {
//   private cookieName = 'darkMode';

//   constructor(private cookieService: CookieService) {}

//   setDarkMode(isDarkMode: boolean) {
//     const value = isDarkMode ? 'enabled' : 'disabled';
//     this.cookieService.set(this.cookieName, value, { path: '/', expires: 365 });
  
//     this.applyDarkMode(isDarkMode);
//   }

//   getDarkMode(): boolean {
//     const value = this.cookieService.get(this.cookieName);
//     return value === 'enabled';
//   }

//   applyDarkMode(isDarkMode: boolean) {
//     if(isDarkMode){
//       document.body.setAttribute('color-theme','dark')
//     }else {
//       document.body.setAttribute('color-theme','light')
//     };
//   }
// }
