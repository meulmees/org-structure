module.exports = Object.freeze({
  structure: [{
    id: 1,
    name: 'Georgianne Stark',
    email: 'georgianne.stark@company.com',
    title: 'CEO',
    avatar: 'https://api.adorable.io/avatars/128/1.png',
    reports: [{
      id: 2,
      name: 'Sterling Nienow',
      email: 'sterling.nienow@company.com',
      title: 'CFO',
      avatar: 'https://api.adorable.io/avatars/128/2.png',
      reports: [{
        id: 5,
        name: 'Brain Daugherty',
        email: 'brain.daugherty@company.com',
        title: 'Employee',
        avatar: 'https://api.adorable.io/avatars/128/5.png',
        reports: [{
          id: 8,
          name: 'Kenneth Thompson',
          email: 'kenneth.thompson@company.com',
          title: 'Employee',
          avatar: 'https://api.adorable.io/avatars/128/8.png',
          reports: [{
            id: 9,
            name: 'Alejandro Rohan',
            email: 'alejandro.rohan@company.com',
            title: 'Employee',
            avatar: 'https://api.adorable.io/avatars/128/9.png',
            reports: []
          }]
        }]
      }, {
        id: 6,
        name: 'Florinda Larkin',
        email: 'florinda.larkin@company.com',
        title: 'CTO',
        avatar: 'https://api.adorable.io/avatars/128/6.png',
        reports: []
      }]
    }, {
      id: 3,
      name: 'Lesa Franecki',
      email: 'lesa.franecki@company.com',
      title: 'COO',
      avatar: 'https://api.adorable.io/avatars/128/3.png',
      reports: [{
        id: 7,
        name: 'Dr. Joe Kessler',
        email: 'joe.kessler@company.com',
        title: 'Employee',
        avatar: 'https://api.adorable.io/avatars/128/7.png',
        reports: []
      }]
    }, {
      id: 4,
      name: 'Glenda Krajcik',
      email: 'glenda.krajcik@company.com',
      title: 'Employee',
      avatar: 'https://api.adorable.io/avatars/128/4.png',
      reports: []
    }]
  }]
});
