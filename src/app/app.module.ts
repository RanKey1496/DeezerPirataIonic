import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { CancionesPage } from '../pages/canciones/canciones';
import { PlaylistsPage } from '../pages/playlists/playlists';
import { PerfilDetallePage } from '../pages/perfil-detalle/perfil-detalle';
import { CancionPopoverPage } from '../pages/cancion-popover/cancion-popover';
import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';

import { TecnoPlayerComponent } from '../components/tecno-player/tecno-player';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    PerfilDetallePage,
    CancionPopoverPage,
    TecnoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    CancionPopoverPage,
    PerfilDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider
  ]
})
export class AppModule {}
