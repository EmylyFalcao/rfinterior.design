// All site copy and data lives here. Edit this file, then run `npm run build`.

const CDN = 'https://images.squarespace-cdn.com/content/v1/6831f0353be0374b88ad685f/';
const cdn = (path) => CDN + path;

export const site = {
  name: 'Rodolfo Falcao Interior Design',
  shortName: 'RF Interior Design',
  legalName: 'RF Interior Design Ltd',
  registered: 'Registered in England and Wales',
  companyNo: '17224035',
  url: 'https://rfinterior.design',
  email: 'hello@rfinterior.design',
  privacyEmail: 'privacy@rfinterior.design',
  phone: '(+44) 7490028696',
  phoneHref: '+447490028696',
  whatsapp: 'https://wa.me/447490028696',
  location: 'London – UK',
  tagline: 'Elevated interiors for real living',
  subtext:
    'Thoughtful, character-driven design for London homes: Blending vintage, modern, and timeless influences.',
  bio: 'Rodolfo Falcao is a London interior designer creating thoughtful, character-driven homes. Blending vintage, modern and timeless influences for real living.',
  // Set to a Calendly (or similar) link to send every “Book intro call” button straight to booking.
  bookingUrl: '/contact/#enquiry',
  // Set to a form backend (Formspree, Basin, Netlify Forms…) to post enquiries.
  // Left empty, the form opens the visitor's email app with the enquiry pre-filled.
  formEndpoint: '',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/rfinterior.design/' },
    { label: 'Pinterest', href: 'https://www.pinterest.com/RFInteriorDesign' },
    { label: 'Houzz', href: 'https://www.houzz.co.uk/pro/rodolfo-falcao-interior-design' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rfinteriordesign' },
  ],
};

export const nav = [
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const images = {
  hero: {
    src: cdn('68080b2d-78d4-4dc2-b3cc-ef1b58b21dec/rodolfo-falcao-interior-design-london-living-room.jpg'),
    alt: 'Living room designed by Rodolfo Falcao Interior Design, featuring vintage furniture, warm textures, and layered styling in an East London home',
  },
  sketch: {
    src: cdn('e122af26-8b61-4ac6-822f-537e08e87f14/interior-design-floor-plan-sketching.jpg'),
    alt: 'Hand-drawn furniture design sketches with detailed measurements and annotations, with a metal ruler nearby',
  },
  bedroom: {
    src: cdn('66df0786-03b5-4d18-9c2c-7dbe15ef7c87/east-london-bedroom-styling-vintage-accent-wall.jpg'),
    alt: 'Bedroom with a neatly made bed, beige pillow with black piping and a walnut bedside table against an ikat-print feature wall',
  },
  portrait: {
    src: cdn('d630e9a6-e792-4bda-8a3b-a0eb67c1b74a/Rodolfo+Falcao%2C+London+interior+designer%2C+portrait+photo'),
    alt: 'Rodolfo Falcao smiling, in a blue blazer and light blue shirt, sitting in a living room with a bookshelf behind him',
  },
  chair: {
    src: cdn('6bec59f9-d99a-4f96-98a6-c0f2376f7b33/Black+Windsor+chair+with+grey+striped+cushion%2C+eclectic+interior+styling+by+Rodolfo+Falcao+London+interior+designer'),
    alt: 'Black Windsor chair with a grey striped cushion, set against a brown wall and hardwood floor',
  },
};

export const services = [
  {
    id: 'full-service',
    number: '01',
    title: 'Full Service Interior Design',
    lead: 'For renovations and complete redesigns, from the first conversation to the final cushion.',
    body: 'One point of contact, guiding every decision and keeping you informed at each stage. Creative direction and project management come together, so your home is finished on time, within budget, and above expectations.',
    image: images.sketch,
    includes: [
      { title: 'Full Concept & Layout', text: 'A clear creative direction, colour palette and space plan that brings function and beauty together.' },
      { title: 'Sourcing & Personal Shopping', text: 'Furniture, materials, fabrics and finishes from trusted suppliers and independent makers, matched to your budget.' },
      { title: 'Unique Items', text: 'Original pieces and vintage finds that give a home its character. Nothing picked from a catalogue.' },
      { title: 'Furniture & Styling', text: 'Every piece placed, every surface layered, until the room feels finished.' },
    ],
    process: [
      { title: 'Initial Consultation', price: '£250', text: 'In person or virtually, we explore your space, your lifestyle and your vision.' },
      { title: 'Concept & Mood Board', text: 'A creative direction, colour palette and design narrative, shared before any decisions are made.' },
      { title: 'Space Planning', text: 'Furniture placement, flow, lighting and proportion, planned so function and beauty work together.' },
      { title: 'Sourcing & Procurement', text: 'Pieces from trusted suppliers, independent makers and vintage markets, matched to your budget.' },
      { title: 'On-Site Management', text: 'Contractors, deliveries and trades coordinated for you, so you never chase a timeline.' },
      { title: 'Final Installation & Styling', text: 'The finishing layer. The project is complete only when the room feels right.' },
    ],
  },
  {
    id: 'styling-refresh',
    number: '02',
    title: 'Styling & Refresh',
    lead: 'Meaningful change without a full renovation: focused, considered and kinder on budget.',
    body: 'For rooms that need a new direction rather than a rebuild. We work with what you already own, editing, recomposing and adding only what makes the difference. Ideal for rented homes.',
    image: images.bedroom,
    includes: [
      { title: 'Lower Budget Option', text: 'A lighter, more focused service that delivers real change for a smaller investment.' },
      { title: 'New Room Concept and Layout', text: 'A fresh concept that rethinks flow, proportion and focal points.' },
      { title: 'Reuse + Upgrade', text: 'Existing pieces repositioned, repurposed or refreshed with new fabric, paint or detail.' },
      { title: 'Styling', text: 'Accessories, textures and finishing details, chosen with care to complete the room.' },
    ],
    process: [
      { title: 'Consultation & Brief', price: '£250', text: 'An honest conversation about your space, budget and problem areas. No pressure, no upselling.' },
      { title: 'New Room Concept & Layout', text: 'A new layout that rethinks flow, proportion and where the eye lands.' },
      { title: 'Reuse & Upgrade', text: 'We assess what you have, then reposition, repurpose or update it with targeted changes.' },
      { title: 'Styling', text: 'Carefully chosen accessories, textures and details to finish the room.' },
    ],
  },
];

export const values = [
  { title: 'Empathy', text: 'Every project begins by understanding how you feel in your home and how you want to live in it.' },
  { title: 'Design for everyone', text: 'Good design and real comfort belong at every budget. Understated elegance comes from thoughtful choices, not big spending.' },
  { title: 'Intentionality', text: 'Every decision is deliberate, from the first mood board to the final installation.' },
];

export const about = {
  story: [
    'Rodolfo’s love of interiors began in childhood in Brazil, where each year before Christmas his family would repaint and rearrange their home. As a teenager he was already redesigning bedrooms for his sister and his aunt.',
    'He came back to design after a career spanning client management, sales, event operations and residential projects in London and across the UK. That experience shapes how he works today: calm, organised and genuinely attentive to the people he designs for.',
  ],
  aesthetic:
    'His style is eclectic and personal. He believes understated elegance is possible at any budget, and that it depends on thoughtful choices rather than large spending.',
  influences: ['Art Deco geometry', 'Industrial textures', 'Vintage finds', 'Scandinavian restraint', 'Souvenirs from many cultures'],
  approach:
    'Rodolfo works closely with each client to understand what they really need, not only what they ask for. He handles the whole process, from the first conversation to final installation, combining creative direction with project management so that projects finish on time, within budget and above expectations.',
  credentials: [
    'Executive MBA, Warwick Business School',
    'Postgraduate Diploma in Interior Design, British Academy of Interior Design (in progress)',
  ],
};

export const faqs = [
  { q: 'How much does a consultation cost?', a: 'An initial consultation is £250, held in person or virtually. We talk through your space, your lifestyle and your vision, and it becomes the foundation for everything that follows.' },
  { q: 'What’s the difference between Full Service and Styling & Refresh?', a: 'Full Service covers everything from initial concept to final installation, including space planning, sourcing, procurement and on-site management. Styling & Refresh is a lighter option for rooms that need a new direction without a full redesign: it works with what you already own and adds new pieces where they matter.' },
  { q: 'Do you work with rented properties?', a: 'Yes. Styling & Refresh is especially well suited to rentals, because it focuses on furniture arrangement, accessories and styling rather than structural changes.' },
  { q: 'Can you work with my existing furniture?', a: 'Absolutely. Your existing pieces are assessed first and may be repositioned, repurposed or refreshed before anything new is sourced. Editing what you have usually costs less than replacing it.' },
  { q: 'How long does a project take?', a: 'It depends on scope and complexity. A Styling & Refresh can take a few weeks, while a Full Service project can run for several months. The timeline is agreed with you at the start.' },
  { q: 'Do you work outside London?', a: 'Yes. The studio is based in East London and mainly serves London clients, but projects further afield are considered. Project Oxford, a family home, is one example.' },
  { q: 'Do you offer virtual consultations?', a: 'Yes. Initial consultations can be held in person or virtually.' },
  { q: 'How do you source furniture and accessories?', a: 'Each piece is chosen deliberately, from trusted suppliers, independent makers, vintage markets and original finds from across the country. Nothing is picked from a catalogue.' },
];

export const projects = [
  {
    slug: 'bow-east-london-apartment-interior-design',
    title: 'Bow',
    location: 'Bow, East London',
    property: 'Three-bedroom apartment',
    seoTitle: 'Project Bow – East London Apartment Interior Design',
    excerpt: 'A three-bedroom apartment layered with colour, vintage pieces and a collector’s library.',
    brief: 'A primary ensuite bedroom, a welcoming guest bedroom and a third room turned into a functional home office, all held together by one cohesive feel across the home.',
    story: [
      'Existing pieces were reworked alongside sourced vintage and restored furniture, curated artwork and a rich layering of colour, texture and material.',
      'The guest bedroom pairs forest green walls with Art Deco wallpaper; the primary bedroom is wrapped in aubergine with an ikat feature wall. In the living room, black walls frame an olive green lounge chair, while the kitchen stays restrained and clean. The home office houses a large book collection behind glazed cabinetry.',
    ],
    scope: ['Concept & colour', 'Vintage sourcing', 'Art curation', 'Styling'],
    palette: [
      { name: 'Forest green', hex: '#2F4A3A' },
      { name: 'Aubergine', hex: '#4A2C3B' },
      { name: 'Teal', hex: '#2E6A6C' },
      { name: 'Olive', hex: '#6B6A3A' },
      { name: 'Black', hex: '#1E1B18' },
    ],
    cover: { src: cdn('96a59b88-027a-41d6-8989-a8caebd4e984/ILY_9224+copy+3-.jpg'), alt: 'Open plan living room with city views and eclectic furniture, Bow East London apartment by Rodolfo Falcao' },
    gallery: [
      ['1774106887778-2TNLF64G6RCM3RZX6GZ9/ILY_9302-HDR%2Bcopy.jpg', 'Guest bedroom detail with Art Deco geometric wallpaper and teal bedside table'],
      ['a59f653c-629e-4641-9f7a-26ee87c17a50/ILY_9294+copy.jpg', 'Guest bedroom with forest green walls, Art Deco wallpaper and city views'],
      ['99e9bbfb-132d-46b3-8481-d0ba9e7502b6/ILY_9326-HDR+copy+2+%281%29.jpg', 'Guest bedroom with built-in wardrobes and eclectic vintage styling'],
      ['c2d2702c-a2eb-4505-89fa-29e9508fee38/ILY_8974+copy.jpg', 'Home office with glazed wooden bookcases and exhibition poster artwork'],
      ['1774366941443-P3D53VGISDQ2T7X2LYU5/ILY_9029%252Bcopy.jpg', 'Vintage black sideboard with ceramic vase and dried stems'],
      ['80b48e2d-eb39-42fd-bf66-dbc1d39e4174/ILY_8932+copy+2+%281%29.jpg', 'Styled surface with ribbed vase, coastal artwork and teal curtains'],
      ['6b0b3b2f-a22a-441d-82ac-1c8542f4a7fc/ILY_8850+copy+%281%29.jpg', 'Primary bedroom with aubergine walls, ikat-print feature wall and teal curtains'],
      ['942b746d-6874-420d-b5d5-e6946b46fc3d/ILY_8888+copy+%281%29.jpg', 'Primary bedroom detail with ikat wallpaper and walnut bedside table'],
      ['28ac092b-f070-417b-870e-c658fa463af9/ILY_8912+copy+2+%281%29.jpg', 'Vintage teak chest of drawers with brass pulls and black Windsor chair'],
      ['c3b78e4f-ee16-4cf9-9103-364614d01b5a/ILY_9080+copy--.jpg', 'Vintage sideboard with floral arrangement and mirror'],
      ['dad90acd-5000-4712-96f6-a51d08cd53f7/ILY_9106+copy.jpg', 'Styled console table with ceramic vessels and framed artwork'],
      ['d2adbc14-b8e4-4646-a58c-6867ff688fd0/ILY_9123+copy+2.jpg', 'Clean white kitchen with bold neon pink artwork'],
      ['5be0b991-cdae-43e7-866b-482a437d69d9/ILY_9140+copy+2.jpg', 'Dining area with black drinks cabinet and woven pendant light'],
      ['96a59b88-027a-41d6-8989-a8caebd4e984/ILY_9224+copy+3-.jpg', 'Open plan living room with city views and eclectic furniture'],
      ['720dfb6d-28cd-4ffd-b6f0-68fac673b26b/ILY_9251+copy+2.jpg', 'Living space with olive green lounge chair and black walls'],
      ['1774021357099-00KICKXT91BWO87UZEA4/ILY_9198%2Bcopy%2B%25281%2529.jpg', 'Neutral linen sofa with textured cushions and side table'],
    ],
  },
  {
    slug: 'oxford-family-home-interior-design',
    title: 'Oxford',
    location: 'Oxford',
    property: 'Family home',
    seoTitle: 'Project Oxford – Family Home Interior Design',
    excerpt: 'Order, warmth and elegance restored to an open-plan family space.',
    brief: 'An open-plan kitchen, dining and children’s play area had been overwhelmed by family life. The aim: restore balance, sophistication and comfort for the adults without pushing the children out, so the space could support everyday living and hosting alike.',
    story: [
      'The whole space was repainted white as a calm base, letting colour arrive through furniture, artwork and accessories. The layout was reconfigured into distinct kitchen, dining and play zones.',
      'A freestanding blackboard became two blackboards painted directly onto the wall, freeing up floor space. New toy storage and decoratively displayed pieces reduced clutter, and the palette was drawn from the existing ball pit. The walnut dining table was restored as a centrepiece, joined by a dedicated children’s table for crafts, homework and meals. Counters and the island were decluttered with better storage and finished with Art Deco-inspired accessories.',
    ],
    scope: ['Space planning', 'Zoning', 'Storage', 'Restoration', 'Styling'],
    palette: [
      { name: 'Walnut', hex: '#5A3B26' },
      { name: 'Forest green', hex: '#2F4A3A' },
      { name: 'Chalk white', hex: '#F4F1EA' },
      { name: 'Mustard', hex: '#C9A13B' },
      { name: 'Coral', hex: '#D9785F' },
    ],
    cover: { src: cdn('43ab400e-1716-4947-8054-f648c7382513/32D9E487-BC94-4CA5-B288-930E1F79A81E.jpg'), alt: 'Walnut dining table with mid-century chairs and bold artwork, Oxford family home interior design by Rodolfo Falcao' },
    gallery: [
      ['43ab400e-1716-4947-8054-f648c7382513/32D9E487-BC94-4CA5-B288-930E1F79A81E.jpg', 'Walnut dining table with mid-century chairs and bold artwork'],
      ['c75f9f38-04d5-46a0-a184-31353c5d3be6/ChatGPT+Image+Mar+21%2C+2026%2C+05_59_29+PM.png', 'Open plan living and dining area with vaulted ceiling and Velux skylights'],
      ['4f898e6d-97f7-4c7b-bb8d-773588134abe/ChatGPT+Image+Mar+21%2C+2026%2C+05_09_34+PM.png', 'Open plan kitchen with island and dining area'],
      ['3627d465-5867-4958-bc81-d2df5661abe7/ChatGPT+Image+Mar+21%2C+2026%2C+05_52_02+PM.png', 'Bright kitchen with Velux skylights and floral arrangement'],
      ['2b6daead-122c-4d10-bed8-236244500716/ChatGPT+Image+Mar+21%2C+2026%2C+05_49_32+PM.png', 'Forest green shelving unit with styled accessories'],
      ['4312ef5b-266c-4245-b8d2-12cbeee417c5/7AC8FAE9-A14F-4EC3-9575-F9BDBD292ED4.jpg', 'Children’s play and learning area with colourful storage'],
      ['1774364183563-UTNZ9A4SIEITFE683VHR/ChatGPT%2BImage%2BMar%2B24%252C%2B2026%252C%2B02_55_18%2BPM.png', 'Children’s area with ball pit and colourful modular shelving'],
      ['84763731-8d58-4126-8ec2-9734f7904863/ChatGPT+Image+Mar+21%2C+2026%2C+05_11_15+PM.png', 'Dedicated children’s craft and homework table'],
      ['1774365686397-J83T11DHDSGICNPL3XMU/WhatsApp%252BImage%252B2026-03-24%252Bat%252B14.48.05.jpg', 'Bright open plan kitchen with skylights and garden views'],
      ['322eabe4-e77e-4dc0-9035-1778b066f52a/ChatGPT+Image+Mar+21%2C+2026%2C+05_14_28+PM.png', 'Styled kitchen counter with wooden board and condiment bottles'],
      ['3ab4a357-8af5-4780-b975-211e8a1ea38d/ChatGPT+Image+Mar+21%2C+2026%2C+05_13_26+PM.png', 'White kitchen with central island and Velux skylights'],
      ['1774365577458-XBXJTX1EGVJ3OQWX729U/ChatGPT%2BImage%2BMar%2B24%252C%2B2026%252C%2B03_17_19%2BPM.png', 'Kitchen island with woven tray and floral arrangement'],
      ['3367fbed-4cef-4964-80ca-32facad35ec0/ChatGPT+Image+Mar+24%2C+2026%2C+03_06_00+PM.png', 'Kitchen worktop with abstract artwork and garden window'],
      ['1774364587673-88ARBZPGVJO7TNLTJE01/ChatGPT%2BImage%2BMar%2B24%252C%2B2026%252C%2B03_00_00%2BPM.png', 'Open plan kitchen, dining and children’s area'],
      ['1774371145641-5HX412XMT7GV9YIW5YLR/WhatsApp%2BImage%2B2026-03-24%2Bat%2B16.51.27.jpg', 'Art Deco inspired crystal decanter and glassware styling'],
      ['1774371479130-U82UFOMTZQZ0ORY54ERC/WhatsApp%252BImage%252B2026-03-24%252Bat%252B16.45.55.jpg', 'Hallway with industrial wine rack and styled accessories'],
    ],
  },
  {
    slug: 'limehouse-cut-london-apartment-interior-design',
    title: 'Limehouse Cut',
    location: 'Limehouse, East London',
    property: 'Two-bedroom apartment',
    seoTitle: 'Project Limehouse Cut – London Apartment Interior Design',
    excerpt: 'Warm minimalism above the canal: reuse what works, elevate what doesn’t.',
    quote: 'Reuse what works; elevate what doesn’t.',
    brief: 'A two-bedroom apartment overlooking Canary Wharf and the Limehouse Cut canal, for a client who wanted a grounded approach: keep what works, and elevate what doesn’t.',
    story: [
      'Room-by-room styling, custom wall colours, wallpaper selections and bespoke picture framing were all developed around a single original artwork that ties the flat together.',
      'The scheme is warm eclectic, built on warm minimalism: rattan, wicker, jute, linen and raw wood over a neutral base with black and charcoal accents, and colour stories in teal, slate blue, duck egg and forest green. A collector’s sensibility runs throughout, with travel artworks, a Cycladic chess set, crystal decanters and layered ceramics.',
    ],
    scope: ['Styling', 'Wall colour', 'Wallpaper', 'Bespoke framing'],
    credit: 'Ilyas Yasin',
    palette: [
      { name: 'Teal', hex: '#2E6A6C' },
      { name: 'Slate blue', hex: '#5B6E80' },
      { name: 'Duck egg', hex: '#BFD3CF' },
      { name: 'Forest green', hex: '#2F4A3A' },
      { name: 'Rattan', hex: '#C6A26B' },
    ],
    cover: { src: cdn('41198beb-db2e-4e37-bee5-62c9bea445af/ILY_9590+copy+%281%29.jpeg'), alt: 'Open plan living room with balcony and canal views, Limehouse Cut London apartment by Rodolfo Falcao' },
    gallery: [
      ['79b6b65b-a626-435a-bd64-18895ec4696b/ILY_9546+copy+%281%29.jpg', 'Styled side table with rattan lamp and dark ceramic vase'],
      ['39d731c2-7c3c-4713-9e33-669f2dc7d872/ILY_9580-+copy+%281%29.jpg', 'Hallway with patterned wallpaper, mirror and natural textures'],
      ['104e8bbd-f064-4e0e-bc6c-0bf5f73d09f5/ILY_9481+copy+%281%29.jpg', 'Calm neutral bedroom with rattan chest of drawers and landscape artwork'],
      ['f3951daa-4589-468f-adf2-adc3871f6674/ILY_9524+copy+2.jpg', 'Bedroom with deep green velvet headboard and layered neutral cushions'],
      ['41198beb-db2e-4e37-bee5-62c9bea445af/ILY_9590+copy+%281%29.jpeg', 'Open plan living room with balcony and canal views'],
      ['ea7dc47f-b947-4cf9-8d36-8b03a6fa9d25/ILY_9645+copy+%281%29.jpeg', 'Living room with Cycladic chess set and layered textile styling'],
      ['c337b8bd-1b6a-48a8-8f15-e8ba5a4a5d7e/ILY_0054+copy.jpg', 'Styled drinks trolley with crystal decanter'],
      ['cdb91014-f0d7-42e2-8355-d815e8ccfb79/ILY_9621+copy+2.jpeg', 'Neutral armchair with woven footstool and black side table'],
      ['0051f017-7d97-490b-b16f-0ff0029f2d48/ILY_9780+copy.jpg', 'Dining area with sculptural pendant light and velvet chairs'],
      ['a5928589-6003-4627-baa3-e7a9fafdf6e3/ILY_9826+copy.jpg', 'Black console table with gold framed mirror and globe lamp'],
      ['e9af88ba-35a9-4a3f-869b-5d7208b74cea/ILY_9937+copy+2.jpg', 'Bedroom detail with teal and rust cushions on a grey upholstered headboard'],
      ['ff4104f8-064b-498a-ab10-4702f5f5de38/ILY_9928+copy.jpeg', 'Second bedroom with soft blue and teal palette and gallery artwork'],
      ['6b517f88-46cf-476b-85d6-07f254245f8b/ILY_9950+copy.jpg', 'Styled surface with striped ceramic vase and dried lavender'],
      ['c11b5ea9-bb00-490d-aff7-cd0b6ee911d2/ILY_9987+copy.jpeg', 'Bedroom with travel artwork gallery wall and rattan chest of drawers'],
      ['1986ea64-ae94-40f9-85d6-5a6b06fb8f5e/ILY_9883+copy+%281%29.jpg', 'Organic shaped mirror above ribbed sideboard with ceramic accessories'],
      ['51b246a8-5893-48cb-a008-84aa6abb6123/ILY_9910+copy.jpg', 'Kitchen sink area with duck egg blue walls and rattan shoe rack'],
    ],
  },
  {
    slug: 'battersea-london-flat-interior-design',
    title: 'Battersea',
    location: 'Battersea, London',
    property: 'One-bedroom flat',
    seoTitle: 'Project Battersea – London Flat Interior Design',
    excerpt: 'Refine, layer, recompose: Scandinavian calm with bohemian warmth.',
    quote: 'Refine, layer, and recompose.',
    brief: 'A one-bedroom flat for a single professional, elevated through considered, design-led changes rather than a full overhaul, and working with what the client already owned.',
    story: [
      'The starting point was a worn burnt orange rug: too tired for the final scheme, but the inspiration for its palette of warm browns, creamy neutrals, soft greens and orange accents.',
      'Interventions centred on reuse and styling, with a few new pieces. The design blends Scandinavian simplicity (clean lines, light wood and uncluttered calm) with bohemian warmth in layered textures, greenery and artwork. A forest green feature wall anchors the living area, and the bathroom was reimagined as a calm, spa-inspired retreat.',
    ],
    scope: ['Reuse + upgrade', 'Colour', 'Styling', 'Bathroom refresh'],
    palette: [
      { name: 'Burnt orange', hex: '#B5592A' },
      { name: 'Warm brown', hex: '#6E4B32' },
      { name: 'Cream', hex: '#EFE6D3' },
      { name: 'Soft green', hex: '#9AA587' },
      { name: 'Forest green', hex: '#2F4A3A' },
    ],
    cover: { src: cdn('61246529-1dd0-41b0-89c0-94a7fad4a97e/WhatsApp+Image+2026-03-24+at+12.49.41.jpeg'), alt: 'Living room with forest green accent wall, patterned rug and city views, Battersea London flat by Rodolfo Falcao' },
    gallery: [
      ['a28caeb1-1fc3-4982-bbed-fb1201d63da7/Battersea+1.jpg', 'Battersea flat interior styled by Rodolfo Falcao'],
      ['07edfacc-4f1a-4362-b4b9-e2e0f579d71a/802D6D62-7403-4028-AEC6-B496579192CB.jpg', 'Neutral bedroom with burnt orange accents and textured pendant light'],
      ['1774354540382-YM5165BNA053VCMFDWK2/WhatsApp%2BImage%2B2026-03-24%2Bat%2B12.14.29.jpg', 'Bright bedroom with white chest of drawers and layered neutral styling'],
      ['1774354165206-A2C02K0IIAB2W917EQRE/WhatsApp%2BImage%2B2026-03-24%2Bat%2B12.08.24.jpg', 'Styled white dresser with floral arrangement and abstract artwork'],
      ['a48c1a3d-ee75-4b1e-ab63-75992f4b2202/WhatsApp+Image+2026-03-24+at+12.18.43.jpeg', 'Home workspace with arch mirror and indoor plants'],
      ['1774363409587-SR1UZ4T8KU2EM352DBRV/WhatsApp%2BImage%2B2026-03-24%2Bat%2B14.42.17.jpg', 'Bedroom with black iron bed frame, orange cushion and lavender bedside styling'],
      ['1774363145912-UNWWN6J8T1L664D46CVR/WhatsApp%252BImage%252B2026-03-24%252Bat%252B14.36.27.jpg', 'Vintage French Riviera travel poster above black console table'],
      ['c0a71fcd-bb17-4ff8-b2ba-63e9c0e20e7e/WhatsApp+Image+2026-03-24+at+12.43.22.jpeg', 'Warm taupe hallway with round mirror and white dresser'],
      ['34cf0b22-7ad5-4587-b47a-708d98420e97/WhatsApp+Image+2026-03-24+at+12.00.01+%281%29.jpeg', 'Styled console table with white orchid and organic mirror'],
      ['1774355286496-MFTQF0YC0W63RUIUHNN6/WhatsApp%2BImage%2B2026-03-24%2Bat%2B12.26.45.jpg', 'Living room with city views at sunset and colourful abstract artwork'],
      ['1774355857228-ISXW5FB5VAKYOL0RH8DU/WhatsApp%2BImage%2B2026-03-24%2Bat%2B12.36.37.jpg', 'Open plan dining and living area with city views and orange accents'],
      ['1774361817560-6231LY8GEG1PU6GQH01U/WhatsApp%2BImage%2B2026-03-24%2Bat%2B14.15.25.jpg', 'Living room with gold pendant lights and forest green cabinetry'],
      ['040fb5b4-b97b-4aae-b930-bd180fa8b78e/WhatsApp+Image+2026-03-24+at+12.32.44.jpeg', 'Grey kitchen with rattan storage cabinet and sculptural accessory'],
      ['1774357185454-5CYJY7BJLDS39EVT4X0J/WhatsApp%2BImage%2B2026-03-24%2Bat%2B12.58.07.jpg', 'Open plan living and dining space with forest green feature wall'],
      ['61246529-1dd0-41b0-89c0-94a7fad4a97e/WhatsApp+Image+2026-03-24+at+12.49.41.jpeg', 'Living room with forest green accent wall, patterned rug and city views'],
      ['1774361919024-NOX5HN9ZO5MGHKF7NN31/WhatsApp%252BImage%252B2026-03-24%252Bat%252B13.57.23.jpg', 'Spa-inspired bathroom with heated towel rail and framed artwork'],
      ['f97b0ad4-37ba-4e1e-84d2-e694d943d7f7/WhatsApp+Image+2026-03-24+at+13.53.14.jpeg', 'Styled bathroom vanity with sink, mirror and fresh flowers'],
    ],
  },
].map((p) => ({
  ...p,
  gallery: p.gallery.map(([path, alt]) => ({ src: cdn(path), alt: `${alt}, Project ${p.title} by Rodolfo Falcao` })),
}));
