import { WorkExperience } from '@/types/experience';

export const workExperiences: WorkExperience[] = [
  {
    company: 'Mendelio',
    roles: [
      {
        name: 'Frontend developer',
        summary: [
          [
            'Contributed to the development of new sections to enhance user experience.',
            'Refactored existing sections to improve effciency and maintainability.',
            'Conducted code reviews, to ensure high quality standards are met.',
            'Redesigned existing sections to improve the overall look.',
          ],
        ],
        skillsUsed: ['React', 'GraphQL', 'TanStack', 'Tailwind CSS'],
        period: {
          started: '2023-10',
          ended: '2025-02',
        },
      },
    ],
  },
  {
    company: 'Cognizant Softvision',
    roles: [
      {
        name: 'Frontend developer',
        summary: [
          [
            "Hosted the client's application, a portal for virtual machines provisioning",
            'Developed or updated sections within the provisioning process for enhanced user experience.',
            'Led interface redesign efforts to enhance the overall look and feel of the application.',
            'Actively participated in code reviews to ensure high-quality standards were met',
          ],
        ],
        skillsUsed: [
          'Vue',
          'Quasar',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS',
          'Node',
          'Git',
        ],
        period: {
          started: '2021-05',
          ended: '2023-06',
        },
      },
    ],
  },
  {
    company: 'Boostrs',
    roles: [
      {
        name: 'Frontend developer',
        summary: [
          [
            'Rebuilt app interfaces, resulting in enhanced user experience and increased customer satisfaction.',
            'Created custom jQuery plugins.',
            'Created visually appealing and interactive charts with D3, providing valuable data insights for clients.',
            'Conducted thorough code reviews, ensuring high-quality standards and identifying areas for improvement.',
          ],
        ],
        skillsUsed: [
          'PHP',
          'MySQL',
          'jQuery',
          'jQuery UI',
          'Bootstrap',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS',
          'Vue',
          'Git',
        ],
        period: {
          started: '2019-03',
          ended: '2021-04',
        },
      },
    ],
  },
  {
    company: 'REI Development Services',
    roles: [
      {
        name: 'PHP developer',
        summary: [
          [
            'Integrated payment methods for seamless deposits and withdrawals, ensuring efficient transaction processes.',
            'Developed email templates for various operations as refunds and bonus expiration.',
            "Successfully migrated clients' portals from PHP5 to PHP7.",
          ],
        ],
        skillsUsed: ['PHP', 'MySQL', 'jQuery', 'HTML', 'CSS', 'Git'],
        period: {
          started: '2018-02',
          ended: '2019-02',
        },
      },
    ],
  },
  {
    company: 'Dreamstime',
    roles: [
      {
        name: 'PHP developer',
        summary: [
          [
            'Implemented new sections and refreshed existing content to keep the site up-to-date.',
            'Implemented newsletters to effectively communicate with users and drive engagement.',
            'Streamlined the review process for images and videos, increasing efficiency and ensuring high-quality content.',
          ],
        ],
        skillsUsed: ['PHP', 'MySQL', 'jQuery', 'HTML', 'CSS'],
        period: {
          started: '2014-10',
          ended: '2018-01',
        },
      },
    ],
  },
  {
    company: 'Tesseract Romania',
    roles: [
      {
        name: 'PHP developer',
        summary: [
          [
            "I built web applications based on customer's requirements.",
            'The experience at Tesseract Romania helped me not only acquire backend skills, but also frontend skills.',
          ],
        ],
        skillsUsed: ['PHP', 'MySQL', 'jQuery', 'HTML', 'CSS'],
        period: {
          started: '2014-06',
          ended: '2014-09',
        },
      },
    ],
  },
];
