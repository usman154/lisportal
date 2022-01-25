import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
@Component({
    selector: 'create-location',
    templateUrl: 'create-location.html',
})
export class CreateLocation {
    constructor(
        public dialogRef: MatDialogRef<CreateLocation>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}