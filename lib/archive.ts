export type Era = 'Streets Ahead' | 'Citywide' | 'Beyond Manchester';

export interface ArchiveItem {
  slug: string;
  title: string;
  years: string;
  place: string;
  era: Era;
  /* flat duotone stand-in, used when no photograph has been recovered */
  art: string;
  /* recovered archive photograph, served from /public/archive */
  image?: string;
  /* artist / company credit for the photograph — added as the physical archive is catalogued */
  imageCaption?: string;
  summary: string;
  body: string[];
  companies?: string[];
}

export const archiveItems: ArchiveItem[] = [
  {
    slug: 'early-years',
    title: 'Early Years',
    years: '1988 — 1994',
    place: 'Greater Manchester',
    era: 'Citywide',
    art: 'linear-gradient(135deg, #001317 0%, #65523c 60%, #fecd8c 100%)',
    image: '/archive/whirly.jpg',
    summary:
      'Manchester International Arts is founded to present international, multi-cultural street art events — mostly outdoors and mostly free.',
    body: [
      'Manchester International Arts was founded in 1988 to present ‘world music’ and performances by the many cultural communities of Greater Manchester, but soon expanded to cover all art forms and especially multi-cultural and animatory street art events and festivals — mostly outdoors and mostly free.',
      'In our early years we presented music from many countries around the world (often in association with Arts Worldwide) and a series of events featuring Manchester’s many communities under the banner ‘Rhythms of the World’. We also branched out into other art forms including drama, dance and puppetry, and presented a festival of European work to mark Britain’s presidency of the Council of the European Union in 1992.',
      'This culminated in Ona Catalana — a month-long celebration of Catalan culture, presented as a highlight of Manchester, City of Drama 1994, which laid the foundations for the large city-centre festivals that would follow.',
    ],
  },
  {
    slug: 'international-promotions',
    title: 'International Promotions',
    years: '1988 onwards',
    place: 'UK & overseas',
    era: 'Beyond Manchester',
    art: 'linear-gradient(225deg, #b9c089 0%, #001317 70%)',
    image: '/archive/rope.jpg',
    summary:
      'Bringing the world’s most imaginative street theatre companies to the UK — often for the first time.',
    body: [
      'Across all of its work, MIA brought many of the most wonderful, engaging, imaginative and colourful street theatre and outdoor performance companies from the UK and overseas, often for the first time, to Greater Manchester and the wider region.',
      'This international network underpinned every festival the company produced.',
    ],
  },
  {
    slug: 'streets-ahead-years',
    title: 'Streets Ahead',
    years: '1995 — 2000',
    place: 'Manchester city centre',
    era: 'Streets Ahead',
    art: 'linear-gradient(160deg, #001317 0%, #001317 55%, #b9c089 100%)',
    image: '/archive/stilts.jpg',
    summary:
      'Greater Manchester’s Millennial Festival: international street arts filling the squares and streets of the city every summer.',
    body: [
      'Streets Ahead was Manchester International Arts’ flagship street festival, transforming the city centre each year with large-scale spectacle, intimate walkabout performance and everything in between.',
      'The festival brought many of the most wonderful, engaging, imaginative and colourful street theatre companies from the UK and overseas — often for the first time — to Greater Manchester, animating shops, cafés, squares and open spaces. The festival grew from a weekend in Manchester and Stockport in 1995 to all ten districts of Greater Manchester and 26 locations by the year 2000.',
      '“For six years, from 1995 to 2000, the Streets Ahead Festival in Manchester transformed the thoroughfares and shopping centres of the city — and the ten metropolitan districts of Greater Manchester — to create a magical and surreal cocktail of colour, cacophony and community.” These years are recorded in Playing with Fire: Art on the Streets of Manchester, a photo book by Paul Herrmann.',
      'The concept proved so successful that it was later taken to Liverpool for European Capital of Culture 2008.',
    ],
  },
  {
    slug: 'commonwealth-games-festival',
    title: 'Commonwealth Games Festival',
    years: '2001 — 2002',
    place: 'Greater Manchester',
    era: 'Citywide',
    art: 'linear-gradient(200deg, #ffb655 0%, #001317 80%)',
    image: '/archive/dbg.jpg',
    summary:
      'Street arts programming for the cultural celebrations around the Manchester 2002 Commonwealth Games.',
    body: [
      'As Manchester prepared to host the 2002 Commonwealth Games, MIA programmed the street arts strand of the cultural festival surrounding the Games.',
      'Performances spread across Greater Manchester, bringing international companies into neighbourhoods and town centres as the city welcomed the world.',
    ],
  },
  {
    slug: 'manchester-international',
    title: 'Manchester: International',
    years: '2003',
    place: 'City centre squares',
    era: 'Citywide',
    art: 'linear-gradient(135deg, #001317 10%, #7d8688 100%)',
    image: '/archive/popup3.jpeg',
    summary:
      'A celebration of international street theatre in the heart of the city.',
    body: [
      'Building on the momentum of the Commonwealth Games year, Manchester: International continued the city’s love affair with outdoor performance, presenting international companies in the city centre’s squares and public spaces.',
    ],
  },
  {
    slug: 'garden-of-delights',
    title: 'The Garden of Delights',
    years: '2003 — 2005',
    place: 'Parks & gardens',
    era: 'Citywide',
    art: 'linear-gradient(45deg, #b9c089 0%, #001317 90%)',
    image: '/archive/popup1.jpeg',
    summary:
      'Enchanted evenings of performance and installation in Manchester’s green spaces.',
    body: [
      'The Garden of Delights years took the festival out of the streets and into parks and gardens, with evening events that mixed installation, light, music and performance.',
      'Audiences wandered transformed landscapes, encountering shows and surprises among the trees.',
    ],
  },
  {
    slug: 'enchanted-evenings-feast',
    title: 'Enchanted Evenings & Feast',
    years: '2006 — 2007',
    place: 'Platt Fields Park',
    era: 'Streets Ahead',
    art: 'linear-gradient(220deg, #001317 0%, #ffb655 100%)',
    image: '/archive/cinemarionnettes.jpeg',
    summary:
      'Feast — picnic by the lake: a free afternoon and evening of street theatre at Platt Fields.',
    body: [
      'Feast — picnic by the lake — became one of MIA’s best-loved events: a free festival by the lakeside at Platt Fields Park in Rusholme, mixing street theatre, music and food.',
      'Families brought picnics and ate their way around the world from local food stalls while performers roamed the park.',
    ],
  },
  {
    slug: 'picnic-in-the-park',
    title: 'Picnic in the Park',
    years: '2019',
    place: 'Platt Fields Lakeside',
    era: 'Streets Ahead',
    art: 'linear-gradient(200deg, #b9c089 0%, #001317 65%)',
    image: '/archive/picnic-in-the-park_220x329.jpg',
    summary:
      'Streets Ahead returns: a delightful free afternoon of street theatre, acoustic music and activities for all.',
    body: [
      'Ten years on, Streets Ahead returned to Manchester and Platt Fields Lakeside on Sunday 7 July 2019 with a delightful afternoon of street theatre, acoustic music and a host of activities for all — every show free.',
      'The day featured a dazzling, if somewhat eccentric, array of performances: inquisitive but friendly ‘dogs’, superstars of the ballroom world, a quintessentially English display of equine dressage (all the way from France), and an opportunity to join a wedding ceremony — an offer you couldn’t refuse.',
      'There were puppets and songs, circus and dance, a parent-powered carousel, and street food from all over the world by the lake.',
    ],
    companies: [
      'Kapow Dance Circus Theatre',
      'Avanti Display',
      'Molly Orange',
      'Desperate Men',
      'Big Rory & Ochie the Dog',
      'Levvy Metal',
      'Frolicked',
      'Stickleback Plasticus',
      "Dr. Butler's Hatstand Medicine Band",
      "L'Elephant Vert",
      'Whalley Range All Stars',
      'Cocoloco',
      'A Bird in the Hand',
      'Les Goulus',
      'Plunge Boom',
      'MarkMark',
    ],
  },
  {
    slug: 'lakes-alive-mintfest',
    title: 'Lakes Alive & Mintfest',
    years: '2009 — 2014',
    place: 'Kendal & Cumbria',
    era: 'Beyond Manchester',
    art: 'linear-gradient(160deg, #001317 0%, #b9c089 70%, #fafafa 100%)',
    summary:
      'A multitude of events across the Cumbrian landscape, culminating each year in Kendal’s international festival of street arts.',
    body: [
      'In partnership with Kendal Arts International, MIA worked on the Lakes Alive programme — a Legacy Trust funded programme of events across Cumbria and part of the Cultural Olympiad for the London 2012 Olympic and Paralympic Games.',
      'The programme included a contemporary circus festival in Barrow, large-scale spectacles in the harbour towns of Maryport and Whitehaven, touring events to coastal towns and villages, and unique projects in iconic locations including Furness Abbey, Carlisle Castle and an Aeolian sound installation on Birkrigg Common.',
      'Each year culminated with Mintfest, Kendal’s international festival of street arts, at the end of the summer.',
    ],
    companies: ['Transe Express', 'Theater Titanick', 'Grupo Puja'],
  },
  {
    slug: 'lakes-alive-2010',
    title: 'Lakes Alive 2010',
    years: '2010',
    place: 'Cumbria',
    era: 'Beyond Manchester',
    art: 'linear-gradient(200deg, #b9c089 0%, #65523c 50%, #001317 100%)',
    summary:
      'Spectacle comes to the Cumbrian coast, including Sarruga’s giant creatures in Whitehaven.',
    body: [
      'The 2010 edition of Lakes Alive brought UK and international street arts across the Cumbrian landscape, from harbour towns to village greens.',
      'Highlights included Spanish company Sarruga, whose giant mechanical creatures processed through Whitehaven.',
    ],
    companies: ['Sarruga'],
  },
  {
    slug: 'mobile-homme',
    title: 'Mobile Homme — Transe Express',
    years: '2013',
    place: 'Lakes Alive',
    era: 'Beyond Manchester',
    art: 'linear-gradient(210deg, #ffb655 0%, #65523c 40%, #001317 100%)',
    summary:
      'The celebrated French company’s aerial spectacle: a giant human mobile of drummers hoisted into the sky.',
    body: [
      'French company Transe Express brought their signature spectacle Mobile Homme to the Lakes Alive programme in 2013.',
      'Drummers and acrobats were hoisted high above the crowd on a giant crane-borne mobile — one of the defining images of European street spectacle.',
    ],
    companies: ['Transe Express'],
  },
  {
    slug: 'firebirds',
    title: 'Firebirds — Theater Titanick',
    years: '2013',
    place: 'Lakes Alive',
    era: 'Beyond Manchester',
    art: 'linear-gradient(20deg, #001317 0%, #65523c 50%, #ffb655 100%)',
    image: '/archive/titanick.jpeg',
    summary:
      'German masters of fire and machine spectacle light up the Lakes Alive programme.',
    body: [
      'Theater Titanick, the German company renowned for large-scale fire and machine theatre, presented Firebirds as part of Lakes Alive 2013.',
      'Flame, smoke and fantastical flying machines filled the night sky.',
    ],
    companies: ['Theater Titanick'],
  },
  {
    slug: 'capital-of-culture',
    title: 'Across the Northwest',
    years: '2008',
    place: 'Liverpool, Huddersfield & Dewsbury',
    era: 'Beyond Manchester',
    art: 'linear-gradient(180deg, #7d8688 0%, #001317 75%)',
    image: '/archive/aperuajaffr.jpeg',
    summary:
      'The Streets Ahead festival concept travels to Liverpool for European Capital of Culture 2008.',
    body: [
      'For Liverpool’s year as European Capital of Culture, MIA took the Streets Ahead festival concept across the North West, programming street theatre as part of the celebrations.',
      'The same year saw large-scale street performance programmed in Huddersfield and Dewsbury, extending the company’s network across the North of England.',
    ],
  },
  {
    slug: 'festival-of-light',
    title: 'Festival of Light & Spirit',
    years: '2010',
    place: 'Huddersfield & Dewsbury',
    era: 'Beyond Manchester',
    art: 'linear-gradient(135deg, #001317 0%, #65523c 45%, #ffb655 100%)',
    summary:
      'Programming international spectacle for Kirklees: Huddersfield’s Festival of Light and Dewsbury’s Spirit.',
    body: [
      'Working with Kirklees council, MIA programmed the street performers for Huddersfield’s Festival of Light and Dewsbury’s ‘Spirit’ event.',
      'These events brought many international artists to the UK, including Theater Tol, Transe Express and Grupo Puja.',
    ],
    companies: ['Theater Tol', 'Transe Express', 'Grupo Puja'],
  },
  {
    slug: 'fusion',
    title: 'Fusion',
    years: '2010',
    place: 'Harewood House, Leeds',
    era: 'Beyond Manchester',
    art: 'linear-gradient(45deg, #fecd8c 0%, #65523c 40%, #001317 100%)',
    summary:
      'The artists programme for Girlguiding UK’s centenary festival — 120 groups performing for 20,000 Girl Guides in one day.',
    body: [
      'As a one-off, MIA was commissioned by Girlguiding UK to manage the artists programme for their centenary festival ‘Fusion’ in August 2010.',
      'Over 120 UK and international groups performed on a single day, street-theatre-festival style, to around 20,000 Girl Guides amidst the stunning setting of Harewood House, Leeds.',
    ],
  },
  {
    slug: 'enchanted-parks',
    title: 'Enchanted Parks',
    years: '2015 — 2016',
    place: 'Gateshead & Newcastle',
    era: 'Beyond Manchester',
    art: 'linear-gradient(190deg, #001317 0%, #0d2b1f 55%, #b9c089 100%)',
    summary: 'Programming Gateshead’s annual winter lights festival.',
    body: [
      'After the end of Lakes Alive, MIA worked in Gateshead and Newcastle programming Enchanted Parks, the annual winter lights festival, in 2015 and 2016.',
      'Saltwell Park was transformed after dark with light, sound and installation.',
    ],
  },
  {
    slug: 'sirf',
    title: 'SIRF — Stockton International Riverside Festival',
    years: '2017 onwards',
    place: 'Stockton-on-Tees',
    era: 'Beyond Manchester',
    art: 'linear-gradient(230deg, #ffb655 0%, #001317 70%)',
    image: '/archive/sirf_370x220.jpg',
    summary:
      'Artistic direction of one of the biggest street festivals in the UK.',
    body: [
      'MIA took on the role of Artistic Director of the long-established Stockton International Riverside Festival (SIRF) — one of the biggest street festivals in the UK.',
      'The 2019 edition ran from 1 August: 45 groups in three days (and one evening) — a scale similar to Streets Ahead itself, making for an unforgettable weekend on Teesside.',
      'The festival continues Stockton’s decades-long tradition of international outdoor arts on the banks of the Tees.',
    ],
  },
  {
    slug: 'piece-hall',
    title: 'The Piece Hall',
    years: '2017 — 2019',
    place: 'Halifax',
    era: 'Beyond Manchester',
    art: 'linear-gradient(135deg, #ffb655 0%, #7d8688 60%, #001317 100%)',
    image: '/archive/piece-hall_370x220.jpg',
    summary:
      'Street theatre and spectacle for the opening of Halifax’s stunningly renovated Piece Hall.',
    body: [
      'MIA helped programme the street theatre and spectacle elements of the opening festivities for the newly renovated Piece Hall in Halifax in 2017, followed by the Blondin Gala in 2018 and further events in summer 2019.',
    ],
  },
  {
    slug: 'piece-hall-2019',
    title: 'Piece Hall 2019',
    years: '2019',
    place: 'Halifax',
    era: 'Beyond Manchester',
    art: 'linear-gradient(75deg, #fecd8c 0%, #7d8688 45%, #001317 100%)',
    summary:
      'A summer of street theatre in the Piece Hall courtyard, crowned by a new spectacle from French artists Quidams.',
    body: [
      'The 2019 programme at the Piece Hall brought an afternoon of street theatre to the great courtyard on 4 August.',
      'The season culminated on 13 and 14 September with the new spectacle from French artists Quidams.',
    ],
    companies: ['Quidams'],
  },
  {
    slug: 'lakes-alive-2009',
    title: 'Lakes Alive Launch & a Final Feast',
    years: '2009',
    place: 'Cumbria & Platt Fields',
    era: 'Streets Ahead',
    art: 'linear-gradient(150deg, #001317 0%, #2b251c 50%, #b9c089 100%)',
    summary:
      'The last Feast by the lake at Platt Fields, and the launch of a new chapter in Cumbria.',
    body: [
      'In 2009, Feast in Platt Fields came to an end after a final lakeside celebration — closing a chapter of free festivals in Manchester’s parks.',
      'The same year MIA launched the Lakes Alive programme with Kendal Arts International, beginning a new era of festivals and spectacles across Cumbria.',
    ],
  },
  {
    slug: 'zircus-plus',
    title: 'Zircus Plus',
    years: '2010',
    place: 'Barrow-in-Furness',
    era: 'Beyond Manchester',
    art: 'linear-gradient(320deg, #ffb655 0%, #001317 65%)',
    summary:
      'A contemporary circus festival in Barrow, part of the Lakes Alive programme.',
    body: [
      'Zircus Plus brought contemporary circus to Barrow-in-Furness as part of the Lakes Alive programme.',
      'Performers included the celebrated Gandini Jugglers.',
    ],
    companies: ['Gandini Jugglers'],
  },
  {
    slug: 'urban-moves',
    title: 'Urban Moves Dance Festival',
    years: '2010',
    place: 'Manchester, with DiGM',
    era: 'Citywide',
    art: 'linear-gradient(300deg, #001317 20%, #ffb655 100%)',
    summary:
      'Manchester’s international dance festival in public space, presented with Dance Initiative Greater Manchester.',
    body: [
      'In partnership with Dance Initiative Greater Manchester (DiGM), MIA presented the Urban Moves International Dance Festival, bringing contemporary dance out of theatres and into Manchester’s streets and squares.',
    ],
  },
  {
    slug: 'harmonic-fields',
    title: 'Harmonic Fields',
    years: '2009 — 2014',
    place: 'Birkrigg Common, Cumbria',
    era: 'Beyond Manchester',
    art: 'linear-gradient(180deg, #b9c089 0%, #7d8688 50%, #001317 100%)',
    image: '/archive/harmonic-fields-2_220x220.jpg',
    summary:
      'A special Aeolian sound installation high on Birkrigg Common — an orchestra played by the wind.',
    body: [
      'One of Lakes Alive’s most unique projects: Harmonic Fields, an Aeolian sound installation on Birkrigg Common overlooking Morecambe Bay.',
      'Hundreds of wind-driven instruments turned the open fell into a landscape-scale orchestra, played entirely by the Cumbrian weather.',
    ],
  },
  {
    slug: 'vagabonding',
    title: 'Vagabonding',
    years: '2009 — 2014',
    place: 'Cumbrian towns & villages',
    era: 'Beyond Manchester',
    art: 'linear-gradient(250deg, #65523c 0%, #001317 70%)',
    image: '/archive/vagabonding-3_220x220.jpg',
    summary:
      'Small-scale street arts touring to coastal towns and villages across Cumbria.',
    body: [
      'Vagabonding was the touring strand of the Lakes Alive programme, taking small-scale street arts to coastal towns and smaller towns and villages across Cumbria.',
      'It carried the festival spirit beyond the big set-piece events, to places large-scale touring rarely reached.',
    ],
  },
  {
    slug: 'herberts-dream',
    title: 'Herbert’s Dream',
    years: '2009 — 2014',
    place: 'Cumbria',
    era: 'Beyond Manchester',
    art: 'linear-gradient(135deg, #001317 0%, #1f1a14 50%, #fecd8c 100%)',
    summary: 'A night-time spectacle from the Lakes Alive programme.',
    body: [
      'Herbert’s Dream was one of the spectacles presented as part of the Lakes Alive programme of large-scale outdoor work, which brought UK and international street arts to audiences across Cumbria.',
    ],
  },
  {
    slug: 'whitehaven-transe-express',
    title: 'Transe Express in Whitehaven',
    years: '2009 — 2014',
    place: 'Whitehaven harbour',
    era: 'Beyond Manchester',
    art: 'linear-gradient(280deg, #b9c089 0%, #001317 75%)',
    summary: 'Large-scale French spectacle over the Whitehaven harbourside.',
    body: [
      'The harbour town of Whitehaven hosted some of Lakes Alive’s largest spectacles, including a visit from the celebrated French company Transe Express.',
    ],
    companies: ['Transe Express'],
  },
  {
    slug: 'grupo-puja-maryport',
    title: 'Grupo Puja in Maryport',
    years: '2009 — 2014',
    place: 'Maryport harbour',
    era: 'Beyond Manchester',
    art: 'linear-gradient(170deg, #7d8688 0%, #001317 60%, #b9c089 100%)',
    summary: 'Aerial spectacle over the Maryport harbourside from the acclaimed company Grupo Puja.',
    body: [
      'Maryport’s harbour became the stage for Grupo Puja, whose large-scale aerial performance was among the international highlights brought to Cumbria by the Lakes Alive programme.',
    ],
    companies: ['Grupo Puja'],
  },
  {
    slug: 'mintfest-2013',
    title: 'Mintfest 2013',
    years: '2013',
    place: 'Kendal',
    era: 'Beyond Manchester',
    art: 'linear-gradient(120deg, #b9c089 0%, #001317 80%)',
    summary:
      'Kendal’s international festival of street arts — the annual culmination of Lakes Alive.',
    body: [
      'Mintfest, Kendal’s international festival of street arts, took place each year at the end of the summer as the culmination of the Lakes Alive programme.',
      'The 2013 edition filled the town with UK and international street theatre, including Transe Express’s Mobile Homme and Theater Titanick’s Firebirds.',
    ],
  },
  {
    slug: 'mintfest-2014',
    title: 'Mintfest 2014',
    years: '2014',
    place: 'Kendal',
    era: 'Beyond Manchester',
    art: 'linear-gradient(340deg, #001317 0%, #65523c 60%, #b9c089 100%)',
    summary: 'The final edition, as austerity brought the Lakes Alive era to a close.',
    body: [
      'Mintfest 2014 marked the end of an era: the Lakes Alive activity came to a close in 2014 as austerity wrecked local authority budgets across the country.',
      'It closed five years of remarkable street arts across Cumbria.',
    ],
  },
];

export function getArchiveItem(slug: string) {
  return archiveItems.find((i) => i.slug === slug);
}
