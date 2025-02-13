// src/app/core/core.module.ts

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { CustomPreloadingStrategy } from '../Preloading/custom-preloading-strategy';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  providers: [
    CustomPreloadingStrategy,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}