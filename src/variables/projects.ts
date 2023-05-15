import { Project } from '@/types';

const projects: Project[] = [
   {
      name: 'Movix',
      description:
         'Movix is a web app to get movies and TV show reviews, releases, recommendations for the day and week and details. It uses TMDB API. The app is built on React Typescript V18.2, with main libraries like Axios, Redux Toolkit and Styled Components. It also includes unit testing with Jest.',
      status: 'finished',
      site_url: 'https://jpuente25.github.io/movix/',
      repo_url: 'https://github.com/JPuente25/movix/',
      background_color: '#04152d60',
      text_color: '#fff',
      images: {
         desktop: [
            'https://i.gyazo.com/21563e14d56ff84f94ddfddc04228c33.jpg',
            'https://i.gyazo.com/89c611e91323b3618ebacc0b72c44787.jpg',
            'https://i.gyazo.com/74fbf23d30c3345c03f8a6dc2564ed7d.jpg',
         ],
         mobile: [
            'https://i.gyazo.com/47112bb31034613bcf8f8072ac012ea4.jpg',
            'https://i.gyazo.com/2cab015527504900d28cfdd8440a7d07.jpg',
            'https://i.gyazo.com/1ae086a5430856b957e012fde8942c5e.jpg',
         ],
      },
      key: 'movix',
   },
   {
      name: 'Kings League',
      description:
         "Kings league is a clone web app created for educational-purpouses. Since Kings League web doesn't have a public API, all the information was obtained by web scrapping and stored in a fake database. It showcases games, players, and team information from the Kings League played in Spain as of March 3rd. The app is built on React Typescript V18.2, with main libraries like Axios, Redux Toolkit and Styled Components.",
      status: 'finished',
      site_url: 'https://jpuente25.github.io/cloned-kings-league/',
      repo_url: 'https://github.com/JPuente25/cloned-kings-league/',
      background_color: '#04152d60',
      text_color: '#fff',
      images: {
         desktop: [
            'https://i.gyazo.com/6e628bc2df9ff6e7b79ec607b43eebe7.jpg',
            'https://i.gyazo.com/71bdbf0c643eca0dbc0107aad5be7749.jp',
            'https://i.gyazo.com/000ed7c29895b73025439845abb57d23.jpg',
         ],
         mobile: [
            'https://i.gyazo.com/7b5a6009a5e22239890eac5ead76012e.jpg',
            'https://i.gyazo.com/77a39d9fb271dd661a398e50b669b854.jpg',
            'https://i.gyazo.com/1850480ad2eb185cf4c3e7352d2a47bf.jpg',
         ],
      },
      key: 'kingsLeague',
   },
   {
      name: 'Platzi Shop',
      description:
         'Platzi Shop is a web app to buy any article you want, with user authentication, user creation and shopping cart. It uses Platzi Fake Store API. The app is built on React Typescript V18.2, with main libraries like Axios, React Toastify and Styled Components.',
      status: 'finished',
      site_url: 'https://jpuente25.github.io/platzishop/',
      repo_url: 'https://github.com/JPuente25/platzishop/',
      background_color: '#04152d60',
      text_color: '#fff',
      images: {
         desktop: [
            'https://i.gyazo.com/574dc892f0c6e58c7c461168cfdfd0e7.jpg',
            'https://i.gyazo.com/704fe636e9c50d20eb1a77a2258ba966.jpg',
            'https://i.gyazo.com/551413aee903ee3e75d4e60c5dd4d507.jpg',
         ],
         mobile: [
            'https://i.gyazo.com/e5b615d90fbd8d796bb4c7af5bec0f30.jpg',
            'https://i.gyazo.com/7cdb2a8a75bf2ab60f40a3ae52eb08b0.jpg',
            'https://i.gyazo.com/086f2ba6283758eeaf5886e6d97dd87b.jpg',
         ],
      },
      key: 'platziShop',
   },
];

export default projects;
