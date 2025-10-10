type BlogContentBlock =
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "image"; src: string; alt?: string };

export interface BlogPost {
  id: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  authur?: string;
  authurOccupation?: string;
  authurEmail?: string;
  title: string;
  content: BlogContentBlock[];
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    image: "/images/blogs/blog1.png",
    category: "Article",
    date: "August 28. 2025",
    readTime: "6 MIN READ",
    authur: "Walters Kuma",
    authurOccupation: "Founder & CEO, Ethics Consulting Partners",
    authurEmail: "Email: info@theecp.com | Visit: theecp.com",
    title: "UNLOCKING TOMORROW: THE POSSIBILITIES OF PRINCIPLED INNOVATION",
    content: [
      {
        type: "paragraph",
        text: "By Walters Kuma, Founder of Ethics Consulting Partners",
      },

      {
        type: "paragraph",
        text: "Every breakthrough in history has started with a question: What if?",
      },

      {
        type: "paragraph",
        text: "What if businesses could embrace artificial intelligence without losing the trust of their people?",
      },

      {
        type: "paragraph",
        text: "What if innovation weren’t a leap into the unknown but a series of carefully designed steps?",
      },

      {
        type: "paragraph",
        text: "What if technology didn’t just automate tasks but actually unlocked human potential at scale?",
      },

      {
        type: "paragraph",
        text: "At Ethics Consulting Partners (ECP), these are not distant hypotheticals. They are possibilities waiting for leaders brave enough to explore them.",
      },

      {
        type: "paragraph",
        text: "I founded ECP because too often, leaders are told they have to choose between chasing bold innovation and risking collapse. Or staying safe and risking irrelevance. That false choice has paralyzed entire industries. However, the truth is that principled, progressive innovation enables you to do both. Stay safe and leap ahead.",
      },

      {
        type: "subtitle",
        text: "THE POWER OF POSSIBILITY",
      },

      {
        type: "paragraph",
        text: "Technology is reshaping our world faster than any boardroom can track. Artificial intelligence, automation, data analytics, and digital platforms are rewriting business models in real time. But the real story is not the tools themselves. It’s the possibilities they create when applied with wisdom.",
      },
      {
        type: "paragraph",
        text: "Possibility is not about chasing shiny objects or “the next big thing.” It is about unlocking new ways of working, new markets to serve, and new capabilities to unleash. It’s about seeing beyond today’s constraints to imagine what your organization could be, and then building the bridge to get there.",
      },
      {
        type: "paragraph",
        text: "At ECP, this is where the Voice of Possibility comes in. It’s the voice that challenges “we’ve always done it this way.” It’s the voice that looks past the noise of trends and hype to ask, “What if this technology could create real, measurable value for your people and your customers?”",
      },

      {
        type: "subtitle",
        text: "A SAFER PATH TO BOLD INNOVATION",
      },

      {
        type: "paragraph",
        text: "The fear leaders face is real: a bet on the wrong technology can cost millions, break trust, and damage reputations. That’s why our innovation model is built not on blind leaps. 	But on progressive, structured steps that de-risk the future.",
      },

      {
        type: "list",
        title:
          "Our Progressive Innovation Journey ensures every leap is grounded in stability:",
        items: [
          "Fortify the Foundation: We begin with operational clarity and efficiency.",
          "Unlock Potential: We introduce bold new technologies and strategies, tested through pilot programs that allow experimentation without catastrophic risk.",
          "Lead the Frontier: We scale proven successes into lasting industry leadership.",
        ],
      },

      {
        type: "paragraph",
        text: "This rhythm to stabilize, experiment, then scale, turns possibility into reality without the chaos that too often comes with “innovation at any cost.”",
      },

      {
        type: "subtitle",
        text: "TECHNOLOGY AS AN ENABLER, NOT A THREAT",
      },
      {
        type: "paragraph",
        text: "For many, the word “technology” sparks anxiety. Will AI replace jobs? Will automation make people obsolete? Will innovation disconnect companies from their human side?",
      },
      {
        type: "paragraph",
        text: "At ECP, we see something different. Technology, applied ethically, is a great empowerment tool.",
      },
      {
        type: "paragraph",
        text: "It removes repetitive drudgery so people can focus on higher-value work. It turns overwhelming amounts of data into actionable insight. This gives leaders the clarity to act with confidence. It opens doors to new markets, new customer experiences, and entirely new ways of leading organizations.",
      },
      {
        type: "paragraph",
        text: "Most importantly, it makes work more human, not less. By designing technology that is transparent, fair, and aligned with people’s needs, we ensure that innovation enhances human capability instead of eroding it.",
      },
      {
        type: "paragraph",
        text: "This is why ethics is inseparable from possibility. Every tool we introduce, every roadmap we design, is grounded in principled transformation. Because the future of business is not just about what’s possible. It’s about what’s responsible.",
      },
      {
        type: "subtitle",
        text: "THE HORIZON OF POSSIBILITY",
      },
      {
        type: "paragraph",
        text: "The greatest leaders I’ve met are not satisfied with what is. They are moved by what could be. They know that the greatest risk is not trying something new, it’s standing still while the world races ahead.",
      },
      {
        type: "paragraph",
        text: "At ECP, we exist to be the guide on that journey. To take the possibility out of the realm of “someday” and bring it into the realm of “today”. To help leaders move beyond survival and toward a future where principled innovation is not just a strategy but a competitive advantage.",
      },
      {
        type: "paragraph",
        text: "The horizon is wide open. The tools are here. The possibilities are real. The only question is: are you ready to unlock them?",
      },
      {
        type: "paragraph",
        text: "Let’s architect what’s next, together.",
      },
    ],
    excerpt:
      "Every breakthrough in history has started with a question: What if?",
  },

  {
    id: "6",
    image: "/images/landingPage/blog4.png",
    category: "Article",
    date: "August 15. 2025",
    readTime: "5 MIN READ",
    authur: "Walters Kuma",
    authurOccupation: "Founder & CEO, Ethics Consulting Partners",
    authurEmail: "Email: info@theecp.com | Visit: theecp.com",
    title:
      "ARCHITECTING WHAT’S NEXT: WHY PRINCIPLED TRANSFORMATION IS THE FUTURE OF BUSINESS",
    content: [
      {
        type: "paragraph",
        text: "By Walters Kuma, Founder of Ethics Consulting Partners.",
      },

      {
        type: "paragraph",
        text: "Every morning, somewhere in the world, a leader wakes to find the rules of their industry have changed overnight. Artificial intelligence has rewritten the rules of competition. Digital-first business models are reshaping every industry. The demands on leaders are expanding in every direction: more growth, more innovation, more responsibility, more accountability.",
      },

      {
        type: "paragraph",
        text: "It’s a paradox of our time: while we have more tools, data, and possibilities than ever before. Many leaders feel less certain about how to move forward. From the many conversations I had with executives over the years, I revealed the same pattern: they were surrounded by noise but starving for clarity. They were being pitched miracle technologies without the operational stability to make them work. They were facing high-stakes choices in the dark, with little time to get them right.",
      },

      {
        type: "paragraph",
        text: "That is the gap that inspired Ethics Consulting Partners (ECP).",
      },

      {
        type: "paragraph",
        text: "I founded this firm because I believed there was a better way to navigate transformation, a way that puts people before processes, principles before profits, and clarity before complexity. I wanted to build not just another consulting firm, but a partner that leaders could trust at the most critical inflection points of their careers.",
      },

      {
        type: "paragraph",
        text: "Our mission is simple but ambitious: to replace anxiety with confidence, confusion with clarity, and short-term wins with lasting transformation.",
      },

      {
        type: "subtitle",
        text: "THE PROMISE IN OUR NAME",
      },

      {
        type: "paragraph",
        text: `Our name is not a marketing decision; it’s our constitution.
        `,
      },
      {
        type: "paragraph",
        text: `Ethics is our first word for a reason. In an era of AI-powered decision-making and global-scale algorithms, ethics is not a compliance checkbox, it is the foundation of trust. For us, ethics means having the courage to give clients the hard truths, even when it risks short-term discomfort. It means ensuring every innovation serves the people it touches, not just the balance sheet. It means designing solutions that are as transparent and fair as they are effective.
        `,
      },
      {
        type: "paragraph",
        text: `Consulting is what we do, but not how most of the world does it. Too often, consulting means delivering a thick report that sits on a shelf. At ECP, consulting is an act of collaboration. We enter every engagement with curiosity, not assumptions. We listen deeply, ask the right questions, and co-create solutions that work in the real world. Not just in PowerPoint slides.`,
      },
      {
        type: "paragraph",
        text: `Partners reflect the most important part of our identity. We do not stand at arm’s length. We embed ourselves with our clients, sharing their goals, their challenges, and their accountability. We celebrate their wins as if they were our own because, in truth, they are. And when the path gets difficult, we stay in the trenches, shoulder to shoulder, until the outcome is secured.
        `,
      },
      {
        type: "subtitle",
        text: "HOW WE WORK: THE ECP BLUEPRINT",
      },

      {
        type: "list",
        title:
          "At the heart of our practice is a framework we call the Progressive Innovation Journey. This is our three-phase process for de-risking transformation:",
        items: [
          "Fortify the Foundation: Before we talk about “the future,” we ensure the present is strong. We stabilize operations, remove inefficiencies, and create a foundation leaders can trust. Without this stability, innovation collapses under its own weight.",
          "Unlock Potential: With stability in place, we strategically introduce innovation, targeted technologies, growth strategies, and operational improvements that create momentum without disruption.",
          "Lead the Frontier: Finally, we scale these innovations in a way that positions our clients as leaders in their industries. This is where vision becomes reality and transformation becomes legacy.",
        ],
      },

      {
        type: "list",
        title: "We power this process with The Three Voices Model:",
        items: [
          "The Voice of Experience: veteran executives who ensure every idea is practical, profitable, and sustainable.",
          "The Voice of Possibility: seasoned technologists who separate real innovation from hype. They apply technology for maximum ROI.",
          "The Voice of Vision: expert strategists who ensure every step aligns with the client’s ultimate long-term goal.",
        ],
      },

      {
        type: "paragraph",
        text: "With the blend of these perspectives, we deliver solutions that are imaginative but grounded, ambitious yet achievable.",
      },

      {
        type: "image",
        src: "/images/landingPage/blog1.png",
        alt: "Team meeting",
      },
      {
        type: "image",
        src: "/images/landingPage/blog4.png",
        alt: "Product discussion",
      },
      {
        type: "subtitle",
        text: "THE EMPOWERMENT APPROACH",
      },
      {
        type: "paragraph",
        text: "Too many consulting engagements make the consultant the hero of the story. At ECP, the hero is always the client.",
      },
      {
        type: "paragraph",
        text: "We see every leader’s organization as a story in motion. The talented employees are the protagonists. The inefficiencies and outdated systems are the villains. And AI and smart technology are the tools that will empower the heroes to succeed.",
      },
      {
        type: "paragraph",
        text: "We are the guide, the seasoned navigator who helps the hero cross the bridge from where they are to where they want to be.",
      },
      {
        type: "paragraph",
        text: "Our Empowerment Approach means we don’t “sell” in the traditional sense. We educate. We build trust. We leave organizations not just better off, but more capable than when we arrived. The ultimate proof of our value is not that our clients need us forever, but that we’ve given them the clarity, confidence, and capability to continue leading without us.",
      },
      {
        type: "subtitle",
        text: "BEYOND THE PRESENT",
      },
      {
        type: "paragraph",
        text: "Our 40-year vision is as ambitious as our daily work. We aim to grow from a premier advisory firm into a global capital and influence engine, an institution that not only advises leaders but actively shapes the future of business and technology at the highest levels.",
      },
      {
        type: "paragraph",
        text: "But the real measure of success will not be our size or revenue. It will be the trust we’ve earned. The leaders we’ve empowered, and the legacy of principled transformation we’ve left behind.",
      },
      {
        type: "paragraph",
        text: "Suppose you are a leader standing at the threshold of change. Whether you’re carrying a bold vision, battling operational issues, or weighing a high-stakes decision. Know this: you don’t have to navigate that journey alone.",
      },
      {
        type: "paragraph",
        text: "The path forward is clearer than you think. Let’s architect what’s next, together.",
      },
    ],
    excerpt:
      "Every morning, somewhere in the world, a leader wakes to find the rules of their industry have changed overnight. Artificial intelligence has rewritten the rules of competition. Digital-first business models are reshaping every industry. The demands on leaders are expanding in every direction: more growth, more innovation, more responsibility, more accountability.",
  },
];

export const countryOptions = [
  { title: "Afghanistan", value: "AF" },
  { title: "Albania", value: "AL" },
  { title: "Algeria", value: "DZ" },
  { title: "Andorra", value: "AD" },
  { title: "Angola", value: "AO" },
  { title: "Argentina", value: "AR" },
  { title: "Armenia", value: "AM" },
  { title: "Australia", value: "AU" },
  { title: "Austria", value: "AT" },
  { title: "Azerbaijan", value: "AZ" },
  { title: "Bahamas", value: "BS" },
  { title: "Bahrain", value: "BH" },
  { title: "Bangladesh", value: "BD" },
  { title: "Belarus", value: "BY" },
  { title: "Belgium", value: "BE" },
  { title: "Belize", value: "BZ" },
  { title: "Benin", value: "BJ" },
  { title: "Bhutan", value: "BT" },
  { title: "Bolivia", value: "BO" },
  { title: "Bosnia and Herzegovina", value: "BA" },
  { title: "Botswana", value: "BW" },
  { title: "Brazil", value: "BR" },
  { title: "Brunei", value: "BN" },
  { title: "Bulgaria", value: "BG" },
  { title: "Burkina Faso", value: "BF" },
  { title: "Burundi", value: "BI" },
  { title: "Cabo Verde", value: "CV" },
  { title: "Cambodia", value: "KH" },
  { title: "Cameroon", value: "CM" },
  { title: "Canada", value: "CA" },
  { title: "Central African Republic", value: "CF" },
  { title: "Chad", value: "TD" },
  { title: "Chile", value: "CL" },
  { title: "China", value: "CN" },
  { title: "Colombia", value: "CO" },
  { title: "Comoros", value: "KM" },
  { title: "Congo (Brazzaville)", value: "CG" },
  { title: "Congo (Kinshasa)", value: "CD" },
  { title: "Costa Rica", value: "CR" },
  { title: "Croatia", value: "HR" },
  { title: "Cuba", value: "CU" },
  { title: "Cyprus", value: "CY" },
  { title: "Czech Republic", value: "CZ" },
  { title: "Denmark", value: "DK" },
  { title: "Djibouti", value: "DJ" },
  { title: "Dominica", value: "DM" },
  { title: "Dominican Republic", value: "DO" },
  { title: "Ecuador", value: "EC" },
  { title: "Egypt", value: "EG" },
  { title: "El Salvador", value: "SV" },
  { title: "Equatorial Guinea", value: "GQ" },
  { title: "Eritrea", value: "ER" },
  { title: "Estonia", value: "EE" },
  { title: "Eswatini", value: "SZ" },
  { title: "Ethiopia", value: "ET" },
  { title: "Fiji", value: "FJ" },
  { title: "Finland", value: "FI" },
  { title: "France", value: "FR" },
  { title: "Gabon", value: "GA" },
  { title: "Gambia", value: "GM" },
  { title: "Georgia", value: "GE" },
  { title: "Germany", value: "DE" },
  { title: "Ghana", value: "GH" },
  { title: "Greece", value: "GR" },
  { title: "Guatemala", value: "GT" },
  { title: "Guinea", value: "GN" },
  { title: "Guinea-Bissau", value: "GW" },
  { title: "Guyana", value: "GY" },
  { title: "Haiti", value: "HT" },
  { title: "Honduras", value: "HN" },
  { title: "Hungary", value: "HU" },
  { title: "Iceland", value: "IS" },
  { title: "India", value: "IN" },
  { title: "Indonesia", value: "ID" },
  { title: "Iran", value: "IR" },
  { title: "Iraq", value: "IQ" },
  { title: "Ireland", value: "IE" },
  { title: "Israel", value: "IL" },
  { title: "Italy", value: "IT" },
  { title: "Jamaica", value: "JM" },
  { title: "Japan", value: "JP" },
  { title: "Jordan", value: "JO" },
  { title: "Kazakhstan", value: "KZ" },
  { title: "Kenya", value: "KE" },
  { title: "Kiribati", value: "KI" },
  { title: "Kuwait", value: "KW" },
  { title: "Kyrgyzstan", value: "KG" },
  { title: "Laos", value: "LA" },
  { title: "Latvia", value: "LV" },
  { title: "Lebanon", value: "LB" },
  { title: "Lesotho", value: "LS" },
  { title: "Liberia", value: "LR" },
  { title: "Libya", value: "LY" },
  { title: "Liechtenstein", value: "LI" },
  { title: "Lithuania", value: "LT" },
  { title: "Luxembourg", value: "LU" },
  { title: "Madagascar", value: "MG" },
  { title: "Malawi", value: "MW" },
  { title: "Malaysia", value: "MY" },
  { title: "Maldives", value: "MV" },
  { title: "Mali", value: "ML" },
  { title: "Malta", value: "MT" },
  { title: "Mauritania", value: "MR" },
  { title: "Mauritius", value: "MU" },
  { title: "Mexico", value: "MX" },
  { title: "Moldova", value: "MD" },
  { title: "Monaco", value: "MC" },
  { title: "Mongolia", value: "MN" },
  { title: "Montenegro", value: "ME" },
  { title: "Morocco", value: "MA" },
  { title: "Mozambique", value: "MZ" },
  { title: "Myanmar", value: "MM" },
  { title: "Namibia", value: "NA" },
  { title: "Nepal", value: "NP" },
  { title: "Netherlands", value: "NL" },
  { title: "New Zealand", value: "NZ" },
  { title: "Nicaragua", value: "NI" },
  { title: "Niger", value: "NE" },
  { title: "Nigeria", value: "NG" },
  { title: "North Korea", value: "KP" },
  { title: "North Macedonia", value: "MK" },
  { title: "Norway", value: "NO" },
  { title: "Oman", value: "OM" },
  { title: "Pakistan", value: "PK" },
  { title: "Palestine", value: "PS" },
  { title: "Panama", value: "PA" },
  { title: "Papua New Guinea", value: "PG" },
  { title: "Paraguay", value: "PY" },
  { title: "Peru", value: "PE" },
  { title: "Philippines", value: "PH" },
  { title: "Poland", value: "PL" },
  { title: "Portugal", value: "PT" },
  { title: "Qatar", value: "QA" },
  { title: "Romania", value: "RO" },
  { title: "Russia", value: "RU" },
  { title: "Rwanda", value: "RW" },
  { title: "Saudi Arabia", value: "SA" },
  { title: "Senegal", value: "SN" },
  { title: "Serbia", value: "RS" },
  { title: "Seychelles", value: "SC" },
  { title: "Sierra Leone", value: "SL" },
  { title: "Singapore", value: "SG" },
  { title: "Slovakia", value: "SK" },
  { title: "Slovenia", value: "SI" },
  { title: "Somalia", value: "SO" },
  { title: "South Africa", value: "ZA" },
  { title: "South Korea", value: "KR" },
  { title: "South Sudan", value: "SS" },
  { title: "Spain", value: "ES" },
  { title: "Sri Lanka", value: "LK" },
  { title: "Sudan", value: "SD" },
  { title: "Suriname", value: "SR" },
  { title: "Sweden", value: "SE" },
  { title: "Switzerland", value: "CH" },
  { title: "Syria", value: "SY" },
  { title: "Taiwan", value: "TW" },
  { title: "Tajikistan", value: "TJ" },
  { title: "Tanzania", value: "TZ" },
  { title: "Thailand", value: "TH" },
  { title: "Togo", value: "TG" },
  { title: "Tonga", value: "TO" },
  { title: "Trinidad and Tobago", value: "TT" },
  { title: "Tunisia", value: "TN" },
  { title: "Turkey", value: "TR" },
  { title: "Turkmenistan", value: "TM" },
  { title: "Uganda", value: "UG" },
  { title: "Ukraine", value: "UA" },
  { title: "United Arab Emirates", value: "AE" },
  { title: "United Kingdom", value: "GB" },
  { title: "United States", value: "US" },
  { title: "Uruguay", value: "UY" },
  { title: "Uzbekistan", value: "UZ" },
  { title: "Vanuatu", value: "VU" },
  { title: "Venezuela", value: "VE" },
  { title: "Vietnam", value: "VN" },
  { title: "Yemen", value: "YE" },
  { title: "Zambia", value: "ZM" },
  { title: "Zimbabwe", value: "ZW" },
];
