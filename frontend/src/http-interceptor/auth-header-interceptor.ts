import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { LocalstorageService } from '../services/local-storage-service';
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(
        private _localstorageService: LocalstorageService
    ) { }
    getToken() {
        let user = this._localstorageService.getUserData();
        if (user) {
            return user.token;
        }
    }
    getProjectUniqueId() {
        let project = this._localstorageService.getProjectData();
        if (project) {
            return project.project_unique_id;
        }
    }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.getToken();
        const projectUniqueId = this.getProjectUniqueId();
        const authRequest = request.clone({
            setHeaders: { 
                Authorization: `Token ${token}`,
                Project: `ProjectUniqueId ${projectUniqueId}`
            }
        })
        return next.handle(authRequest);
    }
}