import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment.development';
import { initializeApp } from 'firebase/app';

const app = initializeApp(environment.firebaseConfig);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
