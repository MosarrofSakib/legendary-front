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
              id: 'create-event',
              label: 'menu.new-event',
              to: `${adminRoot}/events/add`,
          },
          {
            id: 'generate-event-report',
            label: 'Reports',
            to: `${adminRoot}/events/reports`,
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
  //   {
  //     id: 'ui',
  //     icon: 'iconsminds-pantone',
  //     label: 'menu.ui',
  //     to: `${adminRoot}/ui`,
  //     subs: [
  //       {
  //         id: 'ui-forms',
  //         label: 'menu.forms',
  //         to: `${adminRoot}/ui/forms`,
  //         subs: [
  //           {
  //             icon: 'simple-icon-notebook',
  //             label: 'menu.layouts',
  //             to: `${adminRoot}/ui/forms/layouts`,
  //           },
  //           {
  //             icon: 'simple-icon-puzzle',
  //             label: 'menu.components',
  //             to: `${adminRoot}/ui/forms/components`,
  //           },
  //           {
  //             icon: 'simple-icon-check',
  //             label: 'menu.validations',
  //             to: `${adminRoot}/ui/forms/validations`,
  //           },
  //           {
  //             icon: 'simple-icon-magic-wand',
  //             label: 'menu.wizard',
  //             to: `${adminRoot}/ui/forms/wizard`,
  //           },
  //         ],
  //       },
  //       {
  //         id: 'ui-components',
  //         label: 'menu.components',
  //         to: `${adminRoot}/ui/components`,
  //         subs: [
  //           {
  //             icon: 'simple-icon-bell',
  //             label: 'menu.alerts',
  //             to: `${adminRoot}/ui/components/alerts`,
  //           },
  //           {
  //             icon: 'simple-icon-badge',
  //             label: 'menu.badges',
  //             to: `${adminRoot}/ui/components/badges`,
  //           },
  //           {
  //             icon: 'simple-icon-control-play',
  //             label: 'menu.buttons',
  //             to: `${adminRoot}/ui/components/buttons`,
  //           },
  //           {
  //             icon: 'simple-icon-layers',
  //             label: 'menu.cards',
  //             to: `${adminRoot}/ui/components/cards`,
  //           },
  //           {
  //             icon: 'simple-icon-picture',
  //             label: 'menu.carousel',
  //             to: `${adminRoot}/ui/components/carousel`,
  //           },
  //           {
  //             icon: 'simple-icon-chart',
  //             label: 'menu.charts',
  //             to: `${adminRoot}/ui/components/charts`,
  //           },
  //           {
  //             icon: 'simple-icon-arrow-up',
  //             label: 'menu.collapse',
  //             to: `${adminRoot}/ui/components/collapse`,
  //           },
  //           {
  //             icon: 'simple-icon-arrow-down',
  //             label: 'menu.dropdowns',
  //             to: `${adminRoot}/ui/components/dropdowns`,
  //           },
  //           {
  //             icon: 'simple-icon-book-open',
  //             label: 'menu.editors',
  //             to: `${adminRoot}/ui/components/editors`,
  //           },

  //           {
  //             icon: 'simple-icon-star',
  //             label: 'menu.icons',
  //             to: `${adminRoot}/ui/components/icons`,
  //           },
  //           {
  //             icon: 'simple-icon-note',
  //             label: 'menu.input-groups',
  //             to: `${adminRoot}/ui/components/input-groups`,
  //           },
  //           {
  //             icon: 'simple-icon-screen-desktop',
  //             label: 'menu.jumbotron',
  //             to: `${adminRoot}/ui/components/jumbotron`,
  //           },
  //           {
  //             icon: 'simple-icon-map',
  //             label: 'menu.maps',
  //             to: `${adminRoot}/ui/components/maps`,
  //           },
  //           {
  //             icon: 'simple-icon-docs',
  //             label: 'menu.modal',
  //             to: `${adminRoot}/ui/components/modal`,
  //           },
  //           {
  //             icon: 'simple-icon-cursor',
  //             label: 'menu.navigation',
  //             to: `${adminRoot}/ui/components/navigation`,
  //           },
  //           {
  //             icon: 'simple-icon-pin',
  //             label: 'menu.popover-tooltip',
  //             to: `${adminRoot}/ui/components/popover-tooltip`,
  //           },
  //           {
  //             icon: 'simple-icon-shuffle',
  //             label: 'menu.sortable',
  //             to: `${adminRoot}/ui/components/sortable`,
  //           },
  //           {
  //             icon: 'simple-icon-grid',
  //             label: 'menu.tables',
  //             to: `${adminRoot}/ui/components/tables`,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'menu',
  //     icon: 'iconsminds-three-arrow-fork',
  //     label: 'menu.menu',
  //     to: `${adminRoot}/menu`,
  //     subs: [
  //       {
  //         icon: 'simple-icon-logout',
  //         label: 'menu.types',
  //         to: `${adminRoot}/menu/types`,
  //       },
  //       {
  //         icon: 'simple-icon-layers',
  //         label: 'menu.levels',
  //         to: `${adminRoot}/menu/levels`,
  //         subs: [
  //           {
  //             icon: 'simple-icon-arrow-right',
  //             label: 'menu.third-level-1',
  //             to: `${adminRoot}/menu/levels/third-level-1`,
  //           },
  //           {
  //             icon: 'simple-icon-arrow-right',
  //             label: 'menu.third-level-2',
  //             to: `${adminRoot}/menu/levels/third-level-2`,
  //           },
  //           {
  //             icon: 'simple-icon-arrow-right',
  //             label: 'menu.third-level-3',
  //             to: `${adminRoot}/menu/levels/third-level-3`,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'blankpage',
  //     icon: 'iconsminds-bucket',
  //     label: 'menu.blank-page',
  //     to: `${adminRoot}/blank-page`,
  //   },
  //   {
  //     id: 'docs',
  //     icon: 'iconsminds-library',
  //     label: 'menu.docs',
  //     to: 'https://gogo-react-docs.coloredstrategies.com/',
  //     newWindow: true,
  //   },
];
export default data;
