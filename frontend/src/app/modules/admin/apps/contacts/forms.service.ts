import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormsService
{
    constructor(
        private _httpClient: HttpClient
    ) {}

    getFormsData(filter='pending'): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get((<any>window).appBaseUrl + `/forms?filter=${filter}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    getFormData(id): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get((<any>window).appBaseUrl + '/forms/'+id)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    updateFormResults(id,data): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.put((<any>window).appBaseUrl + '/forms/'+id , data)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    sendReportEmail(data): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post((<any>window).appBaseUrl + '/forms/emailReport' , {contact: data})
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
