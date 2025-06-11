import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone'; // Importa el proveedor de Ionic

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configuración de Angular
    provideRouter(routes), // Configura el enrutador
    provideIonicAngular({}), // Configura Ionic (opciones adicionales pueden ir aquí)
  ],
};