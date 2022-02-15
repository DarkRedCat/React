let allUsers =[
  {
    id: 1 , 
    fullName : 'Veronika',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://via.placeholder.com/100/000000/FF0000?text=WTF',

    DateOfBirth:' 2 january',
    Education: `BSU'11,`,

    Country : 'Ukraina',
    City: 'Kiev',
    WebSite: 'https://html.com',
    id_Best_Friends: ['2', '4'],
    contact : [2,3,4],
    

    _message: {
      with_user :{
        id_3 : [
          ['obtained', 1, 'Как же тяжко'],
          ['obtained', 2,'капец просто'], 
          ['Posted'  , 3,'снова проиграл в кс?'],
          ['obtained', 4,'да просто учить чешский так сложно :('],
        ],
        id_2 : [
          ['obtained', 1, 'О привет'], 
          ['obtained', 2,'Как же давно не виделесь'], 
          ['obtained', 3,'А ты как всегда игнонишь'], 
          ['obtained', 4,'все еще злишься?'],
        ],
        id_4 : [
          ['obtained', 1, '1'], 
          ['obtained', 2,'1'], 
          ['obtained', 3,'1'], 
          ['Posted', 4,'как же ты задолбал!'],
        ],
      } 
    },
    _post: [
      {
        id: "01",
        message: "Hi, how are you?"
      },{
        id: "02",
        message: "It's first post"
      },{
        id: "03",
        message: "your bunny wrote"
      }
    ],

    _getMessage() {return this._message},
    _getPost() {return this._post}
  },
  {
    id: 2, 
    fullName : 'Oleg',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://picsum.photos/50/50?random=01', 

    DateOfBirth:' 2 january',
    Education: `BSU'11,`,

    Country : 'Česká republika',
    City: 'Brněnský ',
    WebSite: 'https://NO.com',
    id_Best_Friends: ['1'],
    contact : [1],

    _message: {
      with_user :{
        id_1 : [
          ['obtained', 1, 'О привет '],
          ['obtained', 2,'давно не виделись'], 
          ['obtained', 3,'еще обижаешься да?'],
          ['obtained', 4,'а ты как всегда игноришь'],
        ],

      } 
    },
    _post: [
      {
        id: "01",
        message: "DarkRed"
      },
      
    ],

    _getMessage() {return this._message},
    _getPost() {return this._post}
  },
  {
    id: 3, 
    fullName : 'Dmirtii',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://picsum.photos/50/50?random=01F',

    DateOfBirth:' 2 january',
    Education: `BSU'11,`,

    Country : 'USA',
    City: 'Washington ',
    WebSite: 'https://NO.com',
    id_Best_Friends: ['4'],
    contact : [4],

    _message: {
      with_user :{
        id_4 : [
          ['obtained', 1, 'Как же тяжко'],
          ['obtained', 2,'капец просто'], 
          ['obtained', 3,'да просто учить чешский так сложно :('],
        ],

      } 
    },
    _post: [
      {
        id: "01",
        message: "да как же сложно"
      },{
        id: "02",
        message: "если тебя живеться тяжно , то жизнь у тебя тежеляа"
      },{
        id: "03",
        message: "..."
      }
    ],

    _getMessage() {return this._message},
    _getPost() {return this._post}
  },
  {
    id: 4, 
    fullName : '010',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://via.placeholder.com/100/FFFFFF/00000?text=001',

    DateOfBirth:'0',
    Education: '0',

    Country : 'Česká republika',
    City: 'Brněnský ',
    WebSite: '',
    id_Best_Friends: [],
    contact : [],

    _message: {
      with_user :{
      } 
    },

    _getMessage() {return this._message},

  },
  
  {
    id: 5, 
    fullName : '001',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://via.placeholder.com/100/FFFFFF/00000?text=001',

    DateOfBirth:'0',
    Education: '0',

    Country : 'Česká republika',
    City: 'Brněnský ',
    WebSite: '',
    id_Best_Friends: [],
    contact : [],

    _message: {
      with_user :{
      } 
    },

    _getMessage() {return this._message},

  },
  {
    id: 6, 
    fullName : '002',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://via.placeholder.com/100/FFFFFF/00000?text=001',

    DateOfBirth:'0',
    Education: '0',

    Country : 'Česká republika',
    City: 'Brněnský ',
    WebSite: '',
    id_Best_Friends: [],
    contact : [],

    _message: {
      with_user :{
      } 
    },

    _getMessage() {return this._message},

  },
  {
    id: 7, 
    fullName : '003',
    dignity : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    avatar : 'https://via.placeholder.com/100/FFFFFF/00000?text=001',

    DateOfBirth:'0',
    Education: '0',

    Country : 'Česká republika',
    City: 'Brněnský ',
    WebSite: '',
    id_Best_Friends: [],
    contact : [],

    _message: {
      with_user :{
      } 
    },

    _getMessage() {return this._message},

  },

]

export default allUsers




