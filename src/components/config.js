
export const nextMeetup = {
  date: 'March 08, 2017',
  link: 'https://www.meetup.com/de-DE/Hamburg-AngularJS-Meetup/events/234414332/'
}

export const nextTalks = [
  {
    reserved: true,
    title: 'Making your Angular apps fast',
    speaker: 'Pascal Precht',
    speakerLink: 'https://twitter.com/PascalPrecht',
    description: `
    In this talk we'll take a look at an unoptimized Angular application
    and analyse and discuss what can be done to make it faster. We will
    then apply different performance techniques to reach about 60 fps and
    explore their pros and cons.

    Pascal is a Software Engineer and Trainer at thoughtram, a Google
    Developer Expert for the Angular team and the creator of the popular
    angular-translate module. He has also written more than 60 articles
    on the thoughtram blog as a technical author.
    `
  },
  {
    reserved: false
  }
]

export const aboutUs = `
The angular.hamburg meetup is a meetup around the
 Angular framework which takes place in Hamburg.
 We're open to anyone interested in the topic.
 Whether you're a beginner dying to poke questions at
 someone with experience or a veteran wanting to discuss
 the finer details, everyone is welcome.`

export const team = [
  {
    name: 'John Behrens',
    role: '// Organizor',
    description: 'Coach for Agile Software</br>Development',
    twitter: 'webconsultseu',
    avatar: 'media/team-john.jpeg'
  },
  {
    name: 'David Müllerchen',
    role: '// Co-Organizor // Website',
    description: 'JavaScript Dev, Software Trainer</br>[webdave.de](https://www.webdave.de/)',
    twitter: 'webdave_de',
    avatar: 'media/team-dave.jpg'
  },
  {
    name: 'Mark Tiedemann',
    role: '// Website',
    description: 'new FullStackDev({ at:</br> \'[hellohq.io](https://hellohq.io)\' })',
    twitter: 'MarkTiedemannDE',
    avatar: 'media/team-mark.jpg'
  }
]

export const sponsors = [
  {
    name: 'POINT. Consulting GmbH',
    role: 'location and drinks',
    link: 'http://www.point-gmbh.com/home/',
    logo: 'media/sponsor-point.png'
  },
  {
    name: 'HQLabs GmbH',
    role: 'location and drinks',
    link: 'https://hellohq.io',
    logo: 'media/sponsor-hqlabs.png'
  },
  {
    name: 'WebConsults.EU',
    role: 'meetup fees',
    link: 'http://www.webconsults.eu/',
    logo: 'media/sponsor-webconsultseu.png'
  },
  {
    name: 'angularjs.de',
    role: 'giveaways',
    link: 'https://angularjs.de/',
    logo: 'media/sponsor-angularjsde.png'
  },
  {
    name: 'webdave',
    role: 'domain',
    link: 'https://www.webdave.de/',
    logo: 'media/team-dave.jpg'
  },
  {
    name: 'You?',
    role: 'become a sponsor now',
    link: 'mailto:meetup@angular.hamburg',
    logo: 'media/sponsor-wanted.png'
  }
]

export const platforms = [
  {
    title: 'angular.hamburg on Meetup',
    icon: 'fa-meetup',
    url: 'https://www.meetup.com/Hamburg-AngularJS-Meetup'
  },
  {
    title: 'angular.hamburg on Twitter',
    icon: 'fa-twitter',
    url: 'https://twitter.com/angular_hamburg'
  },
  {
    title: 'angular.hamburg on Github',
    icon: 'fa-github',
    url: 'https://github.com/angular-hamburg/'
  }
]

export const typings = [
  ' developers ☕',
  ' hackers 💀',
  ' beginners 🔥',
  ' unicorns 🦄',
  ' everyone ❤️'
]
// Unicode non-breaking space character
// http://stackoverflow.com/a/24437562
.map(text => text.replace(/ /g, '\u00a0'))
