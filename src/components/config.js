
export const nextMeetup = {
  date: 'January 11, 2017',
  link: 'https://www.meetup.com/Hamburg-AngularJS-Meetup/events/234414320/'
}

export const nextTalks = [
  {
    reserved: true,
    title: 'Epic Framework Battles of The Frontend: Angular vs React',
    speaker: 'Mark Tiedemann',
    banner: 'media/talk1.png',
    description: "To start off, we'll build a simple demo app in both " +
      "Angular and React. Afterwards, we'll discuss the differences in depth."
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
    avatar: 'media/john.jpeg'
  },
  {
    name: 'David Müllerchen',
    role: '// Co-Organizor // Website',
    description: 'JavaScript Dev, Software Trainer</br>[webdave.de](https://www.webdave.de/)',
    twitter: 'webdave_de',
    avatar: 'media/dave.jpg'
  },
  {
    name: 'Mark Tiedemann',
    role: '// Website',
    description: 'new FullStackDev({ at:</br> \'[hellohq.io](https://hellohq.io)\' })',
    twitter: 'MarkTiedemannDE',
    avatar: 'media/mark.jpg'
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
