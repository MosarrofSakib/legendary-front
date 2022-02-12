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
      to: `${adminRoot}/events/view`,
  },
  {
    id: 'employees',
    icon: 'iconsminds-user',
    label: 'menu.employees',
    to: `${adminRoot}/employees/view`,
  },
  {
    id: 'companies',
    icon: 'iconsminds-hotel',
    label: 'menu.restaurant',
    to: `${adminRoot}/companies/view`,
  },
  {
    id: 'invoices',
    icon: 'iconsminds-folder',
    label: 'Invoices',
    to: `${adminRoot}/invoices`,
  },
];
export default data;
