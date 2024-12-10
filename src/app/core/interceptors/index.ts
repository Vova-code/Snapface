import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './aut.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
]
