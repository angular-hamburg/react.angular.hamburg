
export const nextMeetup = {
  date: 'December 14, 2016',
  link: 'https://www.meetup.com/Hamburg-AngularJS-Meetup/events/234414316/'
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
    name: 'Lars Fluffypaws',
    job: 'Codeaholic',
    company: 'Treehouse',
    twitter: 'TreeHugger42',
    avatar: 'media/team1.jpg'
  },
  {
    name: 'Lilly Cuddlefur',
    job: 'DevOps Bear',
    company: 'TechTribe',
    twitter: 'Code4Coffee',
    avatar: 'media/team2.jpg'
  },
  {
    name: 'Ted Blacknose',
    job: 'Cloud Admirer',
    company: 'Blue^2 Sky',
    twitter: 'RealTeddyBear',
    avatar: 'media/team3.jpg'
  },
  {
    name: 'Mark Tiedemann',
    job: 'Code Ninja',
    company: 'HQLabs, maybe',
    twitter: 'MarkTiedemannDE',
    avatar: 'media/team4.jpg'
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
    url: 'https://github.com/MarkTiedemann/angular.hamburg'
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
