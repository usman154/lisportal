
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class ToasterService {
    constructor(public _snackBar: MatSnackBar) {

    }
    open(message) {
        this._snackBar.open(message);
    }

}