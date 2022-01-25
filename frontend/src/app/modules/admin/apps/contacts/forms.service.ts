import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormsService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    getFormsData(filter = 'pending', page = 0, size = 30, name = '', start='', end=''): Promise<any> {

        return new Promise((resolve, reject) => {
            this._httpClient.get((<any>window).appBaseUrl + `/forms?start=${start}&end=${end}&filter=${filter}&page=${page}&size=${size}&name=${name}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getFormData(id): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get((<any>window).appBaseUrl + '/forms/' + id)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    updateFormResults(id, data): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.put((<any>window).appBaseUrl + '/forms/' + id, data)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    sendReportEmail(data): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post((<any>window).appBaseUrl + '/forms/emailReport', { contact: data })
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    downloadFile(data, filename='data') {
        let csvData = this.ConvertToCSV(data, ['Full Name','Address', 'DOB', 'Collection Date', 'Test Done', 'Insurance ID', 'Email', 'Phone']);
        console.log(csvData)
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }

    ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'S.No,';

         for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];

                 line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         return str;
     }

}
