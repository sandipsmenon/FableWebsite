import { Team } from '../match/Teams';

export const TEAMS: Team[] = [
  {
    name: 'India Blue',
    shortName: 'IND',
    primaryColor: 0x1860c4,
    secondaryColor: 0xff9933,
    players: [
      { name: 'R. Sharma', batting: 92, bowling: 20, fielding: 78, role: 'bat' },
      { name: 'S. Iyer', batting: 86, bowling: 15, fielding: 82, role: 'bat' },
      { name: 'V. Kapoor', batting: 94, bowling: 25, fielding: 85, role: 'bat' },
      { name: 'A. Nair', batting: 88, bowling: 30, fielding: 80, role: 'bat' },
      { name: 'K. Pillai', batting: 84, bowling: 18, fielding: 88, role: 'wk' },
      { name: 'H. Patel', batting: 80, bowling: 78, fielding: 84, role: 'all', bowlStyle: 'spin' },
      { name: 'R. Verma', batting: 65, bowling: 82, fielding: 76, role: 'all', bowlStyle: 'pace' },
      { name: 'J. Mehta', batting: 45, bowling: 88, fielding: 72, role: 'bowl', bowlStyle: 'pace' },
      { name: 'Y. Singh', batting: 38, bowling: 90, fielding: 70, role: 'bowl', bowlStyle: 'spin' },
      { name: 'M. Khan', batting: 30, bowling: 92, fielding: 68, role: 'bowl', bowlStyle: 'pace' },
      { name: 'D. Joshi', batting: 25, bowling: 86, fielding: 66, role: 'bowl', bowlStyle: 'pace' },
    ],
  },
  {
    name: 'Australia Gold',
    shortName: 'AUS',
    primaryColor: 0xe6b800,
    secondaryColor: 0x0a5c2e,
    players: [
      { name: 'D. Walker', batting: 91, bowling: 22, fielding: 84, role: 'bat' },
      { name: 'T. Brooks', batting: 87, bowling: 16, fielding: 80, role: 'bat' },
      { name: 'S. Maxfield', batting: 90, bowling: 40, fielding: 86, role: 'bat' },
      { name: 'L. Harper', batting: 85, bowling: 20, fielding: 82, role: 'bat' },
      { name: 'B. Carey', batting: 83, bowling: 12, fielding: 90, role: 'wk' },
      { name: 'C. Greene', batting: 78, bowling: 80, fielding: 85, role: 'all', bowlStyle: 'pace' },
      { name: 'M. Stoinford', batting: 72, bowling: 76, fielding: 78, role: 'all', bowlStyle: 'pace' },
      { name: 'P. Cumberland', batting: 42, bowling: 93, fielding: 74, role: 'bowl', bowlStyle: 'pace' },
      { name: 'J. Hazelton', batting: 35, bowling: 89, fielding: 70, role: 'bowl', bowlStyle: 'pace' },
      { name: 'A. Zampella', batting: 28, bowling: 87, fielding: 68, role: 'bowl', bowlStyle: 'spin' },
      { name: 'N. Lyonel', batting: 24, bowling: 85, fielding: 65, role: 'bowl', bowlStyle: 'spin' },
    ],
  },
];
