const bot = {
  displayName: 'hellobot',
  photoUrl: '/icons/earth.svg',
  uid: 'hellobot',
  status: {
    lastChanged: new Date(),
    state: 'online'
  },
  channels: {
    general: true
  }
};

const greetings = [
  {
    language: 'Arabic',
    country: 'Egypt',
    code: 'ar',
    flag: '🇪🇬',
    formal: 'Asalaam',
    informal: 'Ahlan'
  },
  {
    language: 'Chinese',
    country: 'China',
    code: 'zh',
    flag: '🇨🇳',
    formal: 'Nǐn hǎo',
    informal: 'Nǐ hǎo'
  },
  {
    language: 'Danish',
    country: 'Denmark',
    code: 'da',
    flag: '🇩🇰',
    formal: 'Goddag',
    informal: 'Hej, Halløj'
  },
  {
    language: 'Dutch',
    country: 'Netherlands',
    code: 'nl',
    flag: '🇳🇱',
    formal: 'Goedendag',
    informal: 'Hoi, Hallo'
  },
  {
    language: 'English',
    country: 'United States',
    code: 'en',
    flag: '🇺🇸',
    formal: 'Hello',
    informal: 'Hey, Hi'
  },
  {
    language: 'French',
    country: 'France',
    code: 'fr',
    flag: '🇫🇷',
    formal: 'Bonjour',
    informal: 'Salut'
  },
  {
    language: 'German',
    country: 'Germany',
    code: 'de',
    flag: '🇩🇪',
    formal: 'Guten Tag',
    informal: 'Hallo, Hi'
  },
  {
    language: 'Greek',
    country: 'Greece',
    code: 'el',
    flag: '🇬🇷',
    formal: 'Yassas',
    informal: 'Yassou'
  },
  {
    language: 'Hebrew',
    country: 'Israel',
    code: 'he',
    flag: '🇮🇱',
    formal: 'Shalom',
    informal: 'Hey'
  },
  {
    language: 'Hindi',
    country: 'India',
    code: 'hi',
    flag: '🇮🇳',
    formal: 'Namaste, Namaskar',
    informal: 'Hai, Helo'
  },
  {
    language: 'Italian',
    country: 'Italy',
    code: 'it',
    flag: '🇮🇹',
    formal: 'Salve',
    informal: 'Ciao'
  },
  {
    language: 'Japanese',
    country: 'Japan',
    code: 'ja',
    flag: '🇯🇵',
    formal: 'Konnichiwa',
    informal: 'Yā, Yō'
  },
  {
    language: 'Korean',
    country: 'South Korea',
    code: 'ko',
    flag: '🇰🇷',
    formal: 'Anyoung haseyo',
    informal: 'Anyoung'
  },
  {
    language: 'Indonesian',
    country: 'Indonesia',
    code: 'id',
    flag: '🇮🇩',
    formal: 'Selamat siang',
    informal: 'Halo'
  },
  {
    language: 'Norwegian',
    country: 'Norway',
    code: 'nb',
    flag: '🇳🇴',
    formal: 'God dag',
    informal: 'Hei'
  },
  {
    language: 'Polish',
    country: 'Poland',
    code: 'pl',
    flag: '🇵🇱',
    formal: 'Dzień dobry',
    informal: 'Cześć, Witaj'
  },
  {
    language: 'Portuguese',
    country: 'Brazil',
    code: 'pt',
    flag: '🇧🇷',
    formal: 'Olá',
    informal: 'Oi'
  },
  {
    language: 'Russian',
    country: 'Russia',
    code: 'ru',
    flag: '🇷🇺',
    formal: 'Zdravstvuyte',
    informal: 'Privet'
  },
  {
    language: 'Spanish',
    country: 'Mexico',
    code: 'es',
    flag: '🇲🇽',
    formal: 'Hola',
    informal: '¿Qué tal?'
  },
  {
    language: 'Swedish',
    country: 'Sweden',
    code: 'sv',
    flag: '🇸🇪',
    formal: 'God dag',
    informal: 'Hej, Tjena'
  },
  {
    language: 'Turkish',
    country: 'Turkey',
    code: 'tr',
    flag: '🇹🇷',
    formal: 'Merhaba',
    informal: 'Selam'
  }
];

module.exports = { bot, greetings };
