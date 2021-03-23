export const data = [
  {
    heading: "NAVIGATION",
    withIcon: true,
    items: [
      `Home`,
      ` Company Information`,
      `Management`,
      `Vision & Mission`,
      `Our Goal`,
      `Our Philosophy`,
      `Departments`,
      `Divisional Structure`,
      `Post Office Structure`,
      `Mail Route Network`,
      `Latest News`,
      `Photo Gallery`,
    ],
  },
  {
    heading: "COMMERCIAL BUSINESS UNITS",
    withIcon: true,
    items: [
      `Counters`,
      `EMS/Parcels`,
      `Mails`,
      `E-Commerce And Logistics`,
      `Financial Services`,
      `Workshop & Property`,
      `Nigerian Postal Institute`,
    ],
  },
  {
    heading: " CONTACT",
    withIcon: false,
    items: [
      `Nigerian Postal Service`,
      `Nipost Corporate Headquarters`,
      `Abubakar Musa Argungu House`,
      `Plot 1279 Muhammadu Buhari Way`,
      `PMB 12537, Garki 900001`,
      `Abuja, Nigeria`,
    ],
  },
  {
    heading: "CUSTOMER SERVICE",
    withIcon: false,
    items: [
      `Tel: 08079037402, 08115638660`,
      `E-mail: customerservice@nipost.gov.ng`,
      `mailenquiries@nipost.gov.ng`,
      `© 2020 Nipost. All rights reserved `,
    ],
  },
];

// custom function to check if heading is 'CUSTOMER SERVICE"
export const isHeadingCustomerService = (heading) => {
  return heading === "CUSTOMER SERVICE";
};
