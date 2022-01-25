import { Route } from '@angular/router';
import { CanDeactivateContactsDetails } from 'app/modules/admin/apps/users/contacts.guards';
import { ContactsContactResolver, ContactsCountriesResolver, ContactsResolver, ContactsTagsResolver } from 'app/modules/admin/apps/users/contacts.resolvers';
import { UsersComponent } from 'app/modules/admin/apps/users/contacts.component';
import { UsersListComponent } from 'app/modules/admin/apps/users/list/list.component';
import { UsersDetailsComponent } from 'app/modules/admin/apps/users/details/details.component';

export const usersRoutes: Route[] = [
    {
        path     : '',
        component: UsersComponent,
        resolve  : {
            tags: ContactsTagsResolver
        },
        children : [
            {
                path     : '',
                component: UsersListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : UsersDetailsComponent,
                       
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]
    }
];
