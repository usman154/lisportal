import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToasterService } from '../services/toaster.service';
import { Router } from "@angular/router";
import { LocalstorageService } from '../services/local-storage-service';

@Injectable()
export class ErrorInterceptorApp implements HttpInterceptor {
    constructor(
        public toasterService: ToasterService,
        private router: Router,
        private _localstorageService: LocalstorageService
    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.body && evt.body) {
                        let meta = evt.body.responseMetaData;
                        if (meta && meta.action != 'DB') {
                            this.toasterService.open(meta.source + ' ' + meta.action);
                        }
                    }

                }
            }),
            catchError((err: any) => {
                //hide progress bar
                if (err instanceof HttpErrorResponse) {
                    try {
                        if (err.error && err.error.exception == 'Credentials verification failed') {
                            this._localstorageService.clearStorage();
                            this.router.navigate(['/auth/signin']);
                        }
                        this.toasterService.open(err.error.exception);
                    } catch (e) {
                        this.toasterService.open('An error occurred');
                    }
                }
                return of(err);
            }));

    }

}