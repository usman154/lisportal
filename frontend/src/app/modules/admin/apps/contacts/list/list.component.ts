import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Contact, Country } from 'app/modules/admin/apps/contacts/contacts.types';
import { ContactsService } from 'app/modules/admin/apps/contacts/contacts.service';
import { FormsService } from 'app/modules/admin/apps/contacts/forms.service';

@Component({
    selector: 'contacts-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit, OnDestroy {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    contacts$: any;
    range = new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
    });
    contactsCount: number = 0;
    contactsTableColumns: string[] = ['name', 'email', 'phoneNumber', 'job'];
    countries: Country[];
    drawerMode: 'side' | 'over';
    searchTerm: any;
    isLoading: boolean = false;
    patientsFilter: any;
    contactsLoading: boolean;
    searchInputControl: FormControl = new FormControl();
    selectedContact: {};
    dateRange: any;
    pagination: {};
    patientsData: any;
    patientsFilterData: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _contactsService: ContactsService,
        private _formsService: FormsService,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    onDateChange() {

        if (!this.range.value.end || !this.range.value.start) {
            return;
        }
        const start = this.range.value.start.format('MM/DD/YYYY HH:mm:ss');
        const end = this.range.value.end.format('MM/DD/YYYY HH:mm:ss');
        this.patientsFilterData.start = start;
        this.patientsFilterData.end = end;
        this.patientsFilterRun();
    }
    async ngOnInit() {
        // Get the contacts
        this.patientsData = (await this._formsService.getFormsData());
        this.contacts$ = this.patientsData.docs;
        this.patientsFilter = 'pending';
        this.patientsFilterData = {};
        this.contactsLoading = false;


        // Get the contact
        this._contactsService.contact$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contact: Contact) => {

                // Update the selected contact
                this.selectedContact = contact;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the countries
        this._contactsService.countries$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((countries: Country[]) => {

                // Update the countries
                this.countries = countries;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                switchMap(query =>

                    // Search
                    this._contactsService.searchContacts(query)
                )
            )
            .subscribe();

        // Subscribe to MatDrawer opened change
        this.matDrawer.openedChange.subscribe((opened) => {
            if (!opened) {
                // Remove the selected contact when drawer closed
                this.selectedContact = null;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {

                // Set the drawerMode if the given breakpoint is active
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                }
                else {
                    this.drawerMode = 'over';
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Listen for shortcuts
        fromEvent(this._document, 'keydown')
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter<KeyboardEvent>(event =>
                    (event.ctrlKey === true || event.metaKey) // Ctrl or Cmd
                    && (event.key === '/') // '/'
                )
            )
            .subscribe(() => {
                this.createContact();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    async patientsFilterRun() {

        this.contactsLoading = true;
        this.patientsData = await this._formsService.getFormsData(this.patientsFilter, this.patientsFilterData.pageIndex, this.patientsFilterData.pageSize, this.patientsFilterData.first_name, this.patientsFilterData.start, this.patientsFilterData.end);
        this.contacts$ = this.patientsData.docs;
        this.contactsLoading = false;
        this._changeDetectorRef.markForCheck();
    }
    async exportData() {

        const data = await this._formsService.getFormsData(this.patientsFilter, this.patientsFilterData.pageIndex, 10000000, '', this.patientsFilterData.start, this.patientsFilterData.end);
        const dataForCsv = data?.docs?.map(point => {
            const fullName = point.first_name + " " + point.last_name;
            const address = point.address.addr_line1 + " " + point.address.city + " " + point.address.state + " " + point.address.postal;
            const DOB = point.date_of_birth.day + "/" + point.date_of_birth.month + "/" + point.date_of_birth.year;
            const collectionData = point.collection_date.day + "/" + point.collection_date.month + "/" + point.collection_date.year;
            const testDone = point.selected_tests.toString();
            const email = point.email;
            const phoneNumber = point.phone_number.full;
            const insuranceId = point.insurance_id;
            return ({
                "Full Name": fullName,
                "Address": address,
                "DOB": DOB,
                "Collection Date": collectionData,
                "Test Done": testDone,
                "Insurance ID": insuranceId,
                "Email": email,
                "Phone": phoneNumber
            })
        });
        this._formsService.downloadFile(dataForCsv, new Date().toDateString())
    }
    async paginationFilterRun(event) {
        const { pageIndex, pageSize } = event;
        this.patientsFilterData.pageIndex = pageIndex;
        this.patientsFilterData.pageSize = pageSize;
        this.patientsFilterRun();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    async filterPatients(input) {
        this.patientsFilterData.first_name = input
        await this.patientsFilterRun()
    }

    /**
     * Create contact
     */
    createContact(): void {
        // Create the contact
        this._contactsService.createContact().subscribe((newContact) => {

            // Go to the new contact
            this._router.navigate(['./', newContact.id], { relativeTo: this._activatedRoute });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
