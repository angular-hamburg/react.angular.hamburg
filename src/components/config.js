
export const nextMeetup = {
  date: 'January 11, 2017',
  link: 'https://www.meetup.com/Hamburg-AngularJS-Meetup/events/234414320/'
}

export const nextTalks = [
  {
    reserved: false
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
