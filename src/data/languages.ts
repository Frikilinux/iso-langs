const languages = [
  {
    language: 'Abkhaz',
    code: 'ab',
  },
  {
    language: 'Afar',
    code: 'aa',
  },
  {
    language: 'Africanos',
    code: 'af',
  },
  {
    language: 'Akan',
    code: 'ak',
  },
  {
    language: 'Albania',
    code: 'sq',
  },
  {
    language: 'Amárico',
    code: 'am',
  },
  {
    language: 'Árabe',
    code: 'ar',
  },
  {
    language: 'Aragonés',
    code: 'an',
  },
  {
    language: 'Armenio',
    code: 'hy',
  },
  {
    language: 'Assamese',
    code: 'as',
  },
  {
    language: 'Avaric',
    code: 'av',
  },
  {
    language: 'Avestan',
    code: 'ae',
  },
  {
    language: 'Aymara',
    code: 'ay',
  },
  {
    language: 'Azerbaiyán',
    code: 'az',
  },
  {
    language: 'Bambara',
    code: 'bm',
  },
  {
    language: 'Bashkir',
    code: 'ba',
  },
  {
    language: 'Vasco',
    code: 'eu',
  },
  {
    language: 'Belarús',
    code: 'be',
  },
  {
    language: 'Bengalí',
    code: 'bn',
  },
  {
    language: 'Bihari',
    code: 'bh',
  },
  {
    language: 'Bislama',
    code: 'bi',
  },
  {
    language: 'Bosnia',
    code: 'bs',
  },
  {
    language: 'Breton',
    code: 'br',
  },
  {
    language: 'Búlgaro',
    code: 'bg',
  },
  {
    language: 'Burmese',
    code: 'my',
  },
  {
    language: 'Catalán',
    code: 'ca',
  },
  {
    language: 'Chamorro',
    code: 'ch',
  },
  {
    language: 'Chechenio',
    code: 'ce',
  },
  {
    language: 'Chichewa, Chewa, Nyanja',
    code: 'ny',
  },
  {
    language: 'Chino',
    code: 'zh',
  },
  {
    language: 'Chuvashia',
    code: 'cv',
  },
  {
    language: 'Cornualles',
    code: 'kw',
  },
  {
    language: 'Corso',
    code: 'co',
  },
  {
    language: 'Cree',
    code: 'cr',
  },
  {
    language: 'Croacia',
    code: 'hr',
  },
  {
    language: 'Checo',
    code: 'cs',
  },
  {
    language: 'Danés',
    code: 'da',
  },
  {
    language: 'Divehi, Dhivehi, Maldivas',
    code: 'dv',
  },
  {
    language: 'Holandés',
    code: 'nl',
  },
  {
    language: 'Dzongkha',
    code: 'dz',
  },
  {
    language: 'Inglés',
    code: 'en',
  },
  {
    language: 'Esperanto',
    code: 'eo',
  },
  {
    language: 'Estonia',
    code: 'et',
  },
  {
    language: 'Ewe',
    code: 'ee',
  },
  {
    language: 'Faroese',
    code: 'fo',
  },
  {
    language: 'Fiji',
    code: 'fj',
  },
  {
    language: 'Finlandés',
    code: 'fi',
  },
  {
    language: 'Francés',
    code: 'fr',
  },
  {
    language: 'Fula, Fulah, Pulaar, Pular',
    code: 'ff',
  },
  {
    language: 'Galicia',
    code: 'gl',
  },
  {
    language: 'Georgiano',
    code: 'ka',
  },
  {
    language: 'Alemán',
    code: 'de',
  },
  {
    language: 'Griego Moderno',
    code: 'el',
  },
  {
    language: 'Guaraní',
    code: 'gn',
  },
  {
    language: 'Gujarati',
    code: 'gu',
  },
  {
    language: 'Haitiano, creole haitiano',
    code: 'ht',
  },
  {
    language: 'Hausa',
    code: 'ha',
  },
  {
    language: 'Hebreo (moderno)',
    code: 'he',
  },
  {
    language: 'Herero',
    code: 'hz',
  },
  {
    language: 'Hindi',
    code: 'hi',
  },
  {
    language: 'Hiri Motu',
    code: 'ho',
  },
  {
    language: 'Húngaro',
    code: 'hu',
  },
  {
    language: 'Interlingua',
    code: 'ia',
  },
  {
    language: 'Indonesio',
    code: 'id',
  },
  {
    language: 'Interlingue',
    code: 'ie',
  },
  {
    language: 'Irlanda',
    code: 'ga',
  },
  {
    language: 'Igbo',
    code: 'ig',
  },
  {
    language: 'Inupiaq',
    code: 'ik',
  },
  {
    language: 'Ido',
    code: 'io',
  },
  {
    language: 'Islandés',
    code: 'is',
  },
  {
    language: 'Italiano',
    code: 'it',
  },
  {
    language: 'Inuktitut',
    code: 'iu',
  },
  {
    language: 'Japonés',
    code: 'ja',
  },
  {
    language: 'Javanés',
    code: 'jv',
  },
  {
    language: 'Kalaallisut, Groenlandia',
    code: 'kl',
  },
  {
    language: 'Canarés',
    code: 'kn',
  },
  {
    language: 'Kanuri',
    code: 'kr',
  },
  {
    language: 'Cachemira',
    code: 'ks',
  },
  {
    language: 'Kazajstán',
    code: 'kk',
  },
  {
    language: 'Khmer',
    code: 'km',
  },
  {
    language: 'Kikuyu, Gikuyu',
    code: 'ki',
  },
  {
    language: 'Kinyarwanda',
    code: 'rw',
  },
  {
    language: 'Kirguises, Kirguistán',
    code: 'ky',
  },
  {
    language: 'Komi',
    code: 'kv',
  },
  {
    language: 'Kongo',
    code: 'kg',
  },
  {
    language: 'Corea',
    code: 'ko',
  },
  {
    language: 'Kurdo',
    code: 'ku',
  },
  {
    language: 'Kwanyama, Kuanyama',
    code: 'kj',
  },
  {
    language: 'Latin',
    code: 'la',
  },
  {
    language: 'Luxemburgués, Luxemburgués',
    code: 'lb',
  },
  {
    language: 'Luganda',
    code: 'lg',
  },
  {
    language: 'Limburgués, Limburgan, Limburger',
    code: 'li',
  },
  {
    language: 'Lingala',
    code: 'ln',
  },
  {
    language: 'Lao',
    code: 'lo',
  },
  {
    language: 'Lituano',
    code: 'lt',
  },
  {
    language: 'Luba-Katanga',
    code: 'lu',
  },
  {
    language: 'Letonia',
    code: 'lv',
  },
  {
    language: 'Manx',
    code: 'gv',
  },
  {
    language: 'Macedonia',
    code: 'mk',
  },
  {
    language: 'Madagascar',
    code: 'mg',
  },
  {
    language: 'Malayo',
    code: 'ms',
  },
  {
    language: 'Malayalam',
    code: 'ml',
  },
  {
    language: 'Maltés',
    code: 'mt',
  },
  {
    language: 'Māori',
    code: 'mi',
  },
  {
    language: 'Maratí (Marathi)',
    code: 'mr',
  },
  {
    language: 'De las Islas Marshall',
    code: 'mh',
  },
  {
    language: 'Mongolia',
    code: 'mn',
  },
  {
    language: 'Nauru',
    code: 'na',
  },
  {
    language: 'Navajo, Navaho',
    code: 'nv',
  },
  {
    language: 'Noruego Bokmål',
    code: 'nb',
  },
  {
    language: 'Ndebele del Norte',
    code: 'nd',
  },
  {
    language: 'Nepali',
    code: 'ne',
  },
  {
    language: 'Ndonga',
    code: 'ng',
  },
  {
    language: 'Noruego Nynorsk',
    code: 'nn',
  },
  {
    language: 'Noruego',
    code: 'no',
  },
  {
    language: 'Nuosu',
    code: 'ii',
  },
  {
    language: 'Ndebele del sur',
    code: 'nr',
  },
  {
    language: 'Occitano',
    code: 'oc',
  },
  {
    language: 'Ojibwe, Ojibwa',
    code: 'oj',
  },
  {
    language:
      'Antiguo eslavo eclesiástico, Iglesia eslava, eslavo eclesiástico, antiguo Búlgaro, Esclavo viejo',
    code: 'cu',
  },
  {
    language: 'Oromo',
    code: 'om',
  },
  {
    language: 'Oriya',
    code: 'or',
  },
  {
    language: 'Osetia del Sur, osetio',
    code: 'os',
  },
  {
    language: 'Panjabi, Punjabi',
    code: 'pa',
  },
  {
    language: 'Pāli',
    code: 'pi',
  },
  {
    language: 'Persa',
    code: 'fa',
  },
  {
    language: 'Polaco',
    code: 'pl',
  },
  {
    language: 'Pashto, Pushto',
    code: 'ps',
  },
  {
    language: 'Portugués',
    code: 'pt',
  },
  {
    language: 'Quechua',
    code: 'qu',
  },
  {
    language: 'Romanche',
    code: 'rm',
  },
  {
    language: 'Kirundi',
    code: 'rn',
  },
  {
    language: 'Rumania, Moldavia, Moldavan',
    code: 'ro',
  },
  {
    language: 'Ruso',
    code: 'ru',
  },
  {
    language: 'Sánscrito (samskrta)',
    code: 'sa',
  },
  {
    language: 'Sardo',
    code: 'sc',
  },
  {
    language: 'Sindhi',
    code: 'sd',
  },
  {
    language: 'Sami del norte',
    code: 'se',
  },
  {
    language: 'Samoa',
    code: 'sm',
  },
  {
    language: 'Sango',
    code: 'sg',
  },
  {
    language: 'Serbio',
    code: 'sr',
  },
  {
    language: 'Gaélico escocés, gaélico',
    code: 'gd',
  },
  {
    language: 'Shona',
    code: 'sn',
  },
  {
    language: 'Cingalés, singalés',
    code: 'si',
  },
  {
    language: 'Eslovaca',
    code: 'sk',
  },
  {
    language: 'Esloveno',
    code: 'sl',
  },
  {
    language: 'Somalí',
    code: 'so',
  },
  {
    language: 'Southern Sotho',
    code: 'st',
  },
  {
    language: 'Español, castellano',
    code: 'es',
  },
  {
    language: 'Sundanese',
    code: 'su',
  },
  {
    language: 'Swahili',
    code: 'sw',
  },
  {
    language: 'Swati',
    code: 'ss',
  },
  {
    language: 'Sueco',
    code: 'sv',
  },
  {
    language: 'Tamil',
    code: 'ta',
  },
  {
    language: 'Telugu',
    code: 'te',
  },
  {
    language: 'Tayikistán',
    code: 'tg',
  },
  {
    language: 'Tailandia',
    code: 'th',
  },
  {
    language: 'Tigrinya',
    code: 'ti',
  },
  {
    language: 'Tibetano estándar, Tibetano, Central',
    code: 'bo',
  },
  {
    language: 'Turkmenistán',
    code: 'tk',
  },
  {
    language: 'Tagalo',
    code: 'tl',
  },
  {
    language: 'Tswana',
    code: 'tn',
  },
  {
    language: 'Tonga (Islas Tonga)',
    code: 'to',
  },
  {
    language: 'Turco',
    code: 'tr',
  },
  {
    language: 'Tsonga',
    code: 'ts',
  },
  {
    language: 'Tártara',
    code: 'tt',
  },
  {
    language: 'Twi',
    code: 'tw',
  },
  {
    language: 'Tahitian',
    code: 'ty',
  },
  {
    language: 'Uighur, Uyghur',
    code: 'ug',
  },
  {
    language: 'Ucrania',
    code: 'uk',
  },
  {
    language: 'Urdu',
    code: 'ur',
  },
  {
    language: 'Uzbeko',
    code: 'uz',
  },
  {
    language: 'Venda',
    code: 've',
  },
  {
    language: 'Vietnamita',
    code: 'vi',
  },
  {
    language: 'Volapük',
    code: 'vo',
  },
  {
    language: 'Valonia',
    code: 'wa',
  },
  {
    language: 'Galés',
    code: 'cy',
  },
  {
    language: 'Wolof',
    code: 'wo',
  },
  {
    language: 'Oeste de Frisia',
    code: 'fy',
  },
  {
    language: 'Xhosa',
    code: 'xh',
  },
  {
    language: 'Yiddish',
    code: 'yi',
  },
  {
    language: 'Yoruba',
    code: 'yo',
  },
  {
    language: 'Zhuang, Chuang',
    code: 'za',
  },
  {
    language: 'Zulu',
    code: 'zu',
  },
]

interface Language {
  language: string
  code: string
}

export { languages, Language }
