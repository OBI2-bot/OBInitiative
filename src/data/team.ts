import type { ImageMetadata } from 'astro';
import moses from '../assets/team/mbalire-moses.jpg';
import nachipa from '../assets/team/nachipa-flavia-diana.jpg';
import catherine from '../assets/team/catherine-kariuki.jpg';
import levi from '../assets/team/buyinza-levi.jpg';
import barbra from '../assets/team/mirembe-barbra.jpg';
import maimuna from '../assets/team/maimuna-nakanwagi.jpg';
import athalia from '../assets/team/kataike-athalia-lenny.jpg';
import kaone from '../assets/team/kaone-selebogo.jpg';
import mohamad from '../assets/team/mohamad-fouad-arabi.jpg';
import angela from '../assets/team/angela-chongo.jpg';
import zheng from '../assets/team/zheng-li.jpg';
import irene from '../assets/team/irene-baena-garcia.jpg';
import ignatius from '../assets/team/ignatius-neshena.jpg';
import karabelo from '../assets/team/karabelo-rose-ralesai.jpeg';
import jacob from '../assets/team/jacob-kumenda.jpg';
import zoe from '../assets/team/zoe-akinbodunse.jpg';
import bayabonga from '../assets/team/bayabonga-nhlabatsi.jpg';

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata;
  /** CSS object-position, to keep faces in frame when the photo is cropped square. */
  focus?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Mbalire Moses',
    role: 'Founder / Team Leader',
    bio: "With a passion for community transformation, leads Obuyisi bw'Omu Initiative, focusing on bridging access gaps for sustainable, impactful change across Uganda.",
    photo: moses,
    focus: '50% 22%',
  },
  {
    name: 'Nachipa Flavia Diana',
    role: 'Co-Founder',
    bio: '"This challenge that I went through at a young age compels me to work hard and tell my story." Community work brings positive change and great impact in daily lives; it is a catalyst.',
    photo: nachipa,
    focus: '50% 25%',
  },
  {
    name: 'Catherine Kariuki',
    role: 'Board Member',
    bio: 'A social impact advisor and changemaker with over 20 years of experience and skills in leadership, coaching, marketing and strategy development.',
    photo: catherine,
    focus: '50% 10%',
  },
  {
    name: 'Buyinza Levi',
    role: 'Administration Officer',
    bio: 'Buyinza Levi brings on board a vast wealth of experience in Administration, Logistics and Human Resource Management.',
    photo: levi,
    focus: '50% 15%',
  },
  {
    name: 'Mirembe Barbra',
    role: 'Legal Officer',
    bio: "Deeply passionate about children's rights and advancing equality, Barbra brings a compassionate approach to her work.",
    photo: barbra,
    focus: '50% 15%',
  },
  {
    name: 'Maimuna Nakanwagi',
    role: 'Human Resources Manager',
    bio: "Responsible for aligning HR practices with the organisation's overall goals to achieve long-term success, proactively linking HR activities to our mission, vision and objectives.",
    photo: maimuna,
    focus: '50% 20%',
  },
  {
    name: 'Kataike Athalia Lenny',
    role: 'Social Media Manager',
    bio: 'I focus on developing visual standards that amplify our advocacy and impact. I am dedicated to building authentic digital relationships and conducting the research necessary to ensure our community remains connected and empowered.',
    photo: athalia,
    focus: '50% 25%',
  },
  {
    name: 'Kaone Selebogo',
    role: 'Assistant Social Media Manager',
    bio: 'I have practical experience in creating email campaigns, managing audience data, and supporting content strategies for nonprofit work. I am particularly interested in helping organisations expand their online presence and connect more effectively with their communities.',
    photo: kaone,
    focus: '50% 20%',
  },
  {
    name: 'Mohamad Fouad Arabi',
    role: 'Operations Manager',
    bio: 'A board member, management consultant and philanthropist with experience across more than 12 countries, advising leaders on governance, business development and strategic partnerships, and championing youth empowerment and community impact.',
    photo: mohamad,
    focus: '50% 15%',
  },
  {
    name: 'Angela Chongo',
    role: 'Program Officer, W.A.S.H.',
    bio: 'A programme management and MEAL professional with experience in public health, data management and community development, passionate about programmes that meet the needs of every individual, with a growing focus on sustainable water, sanitation and hygiene.',
    photo: angela,
    focus: '50% 25%',
  },
  {
    name: 'Dr. Zheng Li',
    role: 'Program Officer, Climate Resilience',
    bio: 'A UK-based legal and policy researcher with a background in engineering and international environmental and energy law. Zheng supports our environmental education, climate clubs and community fruit-tree planting.',
    photo: zheng,
  },
  {
    name: 'Irene Baena Garcia',
    role: 'Program Officer, Mental Health / Institutional Fundraiser',
    bio: 'Committed to intersectional justice and community-led solutions to structural inequalities, Irene brings close to 20 years of experience in international regulatory affairs. She is currently studying African Studies in Basel.',
    photo: irene,
  },
  {
    name: 'Karabelo Rose Ralesai',
    role: 'Program Officer, Education Support',
    bio: 'A South African passionate about the power of education to change the course of a life, whatever the circumstances. Karabelo helps make learning materials accessible to students, and away from work enjoys a good book or a hike.',
    photo: karabelo,
    focus: '50% 25%',
  },
  {
    name: 'Ignatius Neshena',
    role: 'Grant Writer and Fundraising Donor Relations Officer',
    bio: 'A seasoned finance and business strategy professional with over 15 years of experience across corporate and development sectors, dedicated to driving sustainable growth and financial strategy for our community programmes.',
    photo: ignatius,
  },
  {
    name: 'Jacob Kumenda',
    role: 'Business Development Officer',
    bio: 'With a background in economics and finance, Jacob builds sustainable financial systems for our work: designing donor packages, engaging partners and aligning our programmes with long-term impact goals.',
    photo: jacob,
  },
  {
    name: 'Zoe Akinbodunse',
    role: 'Public Relations, Communications and Media Officer / Brand Ambassador',
    bio: "Deeply passionate about public relations and experienced in the field, Zoe believes in giving back and is doing so through her work with Obuyisi bw'Omu Initiative.",
    photo: zoe,
    focus: '66% 50%',
  },
  {
    name: 'Bayabonga Nhlabatsi',
    role: 'IT Specialist / Web Developer',
    bio: 'An IT professional with a passion for leveraging technology to drive social impact. His commitment to combining tech expertise with meaningful causes fuels his dedication to making a difference through innovation.',
    photo: bayabonga,
    focus: '50% 20%',
  },
];
