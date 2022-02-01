import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'menu.analytics',
    to: `${adminRoot}/dashboards/default`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
      id: 'events',
      icon: 'iconsminds-book',
      label: 'menu.events',
      to: `${adminRoot}/events/add`,
      subs: [
          {
              id: 'events-types',
              label: 'menu.events',
              to: `${adminRoot}/events/add`,
              subs: [
                    {
                        id: 'create-event',
                        label: 'menu.new-event',
                        to: `${adminRoot}/events/add`,
                        icon: 'iconsminds-book',

                    },
                    {
                        id: 'View Events',
                        label: 'View Events',
                        to: `${adminRoot}/events/view`,
                        icon: 'iconsminds-book',

                    },
                    {
                        id: 'generate-event-report',
                        label: 'Reports',
                        to: `${adminRoot}/events/reports`,
                        icon: 'iconsminds-book',
                    }
                ]
          }
      ]
  },
  {
    id: 'pages',
    icon: 'iconsminds-user',
    label: 'menu.employees',
    to: `${adminRoot}/adminRoot`,
    subs: [
      {
        id: 'pages-authorization',
        label: 'menu.employees',
        to: '/employees',
        subs: [
          {
            icon: 'simple-icon-user-following',
            label: 'menu.new-employee',
            to: `${adminRoot}/employees/add`,
          },
          {
            icon: 'simple-icon-user-following',
            label: 'menu.employees',
            to: `${adminRoot}/employees/view`,
          },
          {
            icon: 'simple-icon-user-following',
            label: 'Reports',
            to: `${adminRoot}/employees/reports`,
          },
        ],
      },
    ],
  },
  {
    id: 'companies',
    icon: 'iconsminds-hotel',
    label: 'menu.restaurant',
    to: `${adminRoot}/companies`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'menu.new-company',
        to: `${adminRoot}/companies/add`,
      },
    ],
  },
  {
    id: 'invoices',
    icon: 'iconsminds-folder',
    label: 'Invoices',
    to: `${adminRoot}/invoices`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'menu.new-company',
        to: `${adminRoot}/companies/add`,
      },
    ],
  },
];
export default data;
