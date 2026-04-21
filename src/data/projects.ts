export const projects = [
  // ── 01. LULLADREAMS ──
  {
    id: "lulladream",
    title: "Lulladreams",
    subtitle: "Screen-free Storytelling Companion for Kids",
    tags: ["Product Design", "AI Voice", "Mobile App", "SaaS"],
    category: "Mobile App",
    color: "#6c5ce7",
    year: "2025",
    liveUrl: "https://lulladream.ai",
    award: "MEFFYS Award 2026, Barcelona (Top 3)",
    client: "Linkit360",
    role: "Senior Product Designer",
    duration: "6 months",
    team: "1 Senior Designer, 3 Engineers, 1 AI Engineer, 1 PM",
    tools: ["Figma", "React Native", "AI Voice API"],
    description:
      "LullaDream is a screen-free storytelling companion designed to create personalized bedtime experiences for children. It enables parents, caregivers, and loved ones to record their voices or use customizable voices to narrate classic and original bedtime stories. The product enhances emotional bonding, sparks imagination, and establishes a soothing bedtime routine. It has generated recurring revenue and earned a Top 3 position at the MEFFYS Award 2026 in Barcelona.",
    problem: {
      statement:
        "Children's bedtime routines are often disrupted by screen-based content, which affects sleep quality and early development. At the same time, busy or traveling parents lose the opportunity to read bedtime stories in person, weakening the emotional connection that storytelling typically creates.",
      goals: [
        "Deliver a screen-free bedtime storytelling experience that still feels personal and warm for children",
        "Enable parents and family members to record their own voice or use a customizable voice to narrate stories",
        "Build a calming bedtime routine that supports imagination through classic and original stories",
      ],
    },
    research: {
      methods: ["User Interviews", "Market Analysis", "AI Voice Testing"],
      findings: [
        "Most parents are concerned about their child's screen time before bed, yet still want to provide a personal story moment",
        "Children fall asleep faster and feel calmer when they hear the voice of someone familiar rather than a stranger's narration",
        "AI voice cloning technology is mature enough to generate natural-sounding narration from a short sample reading",
      ],
    },
    design: {
      decisions: [
        "A very simple voice recording flow where users only need to read a short provided script to generate a high-quality voice clone",
        "An intuitive, visual story selection dashboard that helps parents pick classic or original stories based on their child's mood",
        "A screen-light player interface focused on audio with gentle animations to keep the child relaxed before sleep",
        "A subscription business model with a free trial so parents can experience the core value before committing",
        "AI-assisted workflow with Claude and Figma Make helped explore several onboarding variations in parallel, cutting the concept-to-prototype time nearly in half",
      ],
    },
    showcase: [
      {
        icon: "Trophy",
        title: "MEFFYS Award 2026 (International Recognition)",
        description:
          "Top 3 at the MEFFYS Award 2026 in Barcelona, validating the product's innovation and quality at an international level.",
      },
      {
        icon: "Mic",
        title: "AI Voice Cloning Flow",
        description:
          "End-to-end flow from parent voice recording to AI processing and the final narration played to the child.",
      },
      {
        icon: "Smartphone",
        title: "Dashboard & Story Selection",
        description:
          "Subscription dashboard and story selection interface designed to feel intuitive and seamless for parents.",
      },
      {
        icon: "TrendingUp",
        title: "Revenue & Market Success",
        description:
          "Evidence of product success, including user growth and recurring subscription revenue that validates product-market fit.",
      },
    ],
    results: {
      metrics: [
        {
          label: "MEFFYS Award",
          value: "Top 3",
          description: "Barcelona 2026 international recognition",
        },
        {
          label: "Active Languages",
          value: "4",
          description: "Indonesian, English, French, German",
        },
        {
          label: "Revenue",
          value: "Active",
          description: "Generating recurring subscription revenue",
        },
      ],
      learnings: [
        "AI voice quality depends heavily on the initial recording, so the onboarding experience must guide users step by step",
        "Emotional connection drives retention far more than technical feature depth in family-oriented products",
      ],
      nextSteps: [
        "Expand language support beyond the current four (Indonesian, English, French, German) to additional global markets",
        "Introduce interactive features that allow children to shape the direction of the story",
      ],
    },
  },

  // ── 02. BICARAKAN.ID ──
  {
    id: "bicarakan-id",
    title: "Bicarakan.id",
    subtitle: "Best App for Good 2022 by Google Play Store",
    tags: ["UX Design", "Mobile App", "Health Tech", "Mental Health"],
    category: "Health Tech",
    color: "#00b894",
    year: "2021",
    liveUrl:
      "https://play.google.com/store/apps/details?id=id.bicarakan.client_app&pcampaignid=web_share",
    award: "Best App for Good 2022 by Google Play Store",
    client: "Bicarakan.id",
    role: "UI/UX Designer",
    duration: "4 months",
    team: "1 UI/UX Designer, 2 Mobile Developers, 1 PM",
    tools: ["Figma", "Maze", "Protopie", "Miro"],
    description:
      "Bicarakan.id is a mental health counseling app that connects users with professional psychologists and counselors through chat and voice call sessions. The app was recognized as the Best App for Good 2022 by Google Play Store for its positive social impact, helping many users access mental health services more easily and affordably.",
    problem: {
      statement:
        "Many people in Indonesia struggle to access mental health counseling due to stigma, high cost, and limited availability. Existing counseling apps often feel too clinical, making users uncomfortable opening up about their feelings.",
      goals: [
        "Deliver a counseling experience that is easy to access and feels emotionally safe",
        "Provide a simple and fast booking flow for sessions with psychologists",
        "Build a calming visual identity so users feel supported rather than judged",
      ],
    },
    research: {
      methods: [
        "User Interviews",
        "Psychology Consultation",
        "Competitive Analysis",
      ],
      findings: [
        "Users hesitate to start counseling when the UI feels too formal or clinical",
        "Chat sessions become a preferred option for users who aren't ready to speak over a voice call",
        "Pastel colors and rounded typography measurably reduce anxiety when navigating a mental health app",
      ],
    },
    design: {
      decisions: [
        "A concise booking flow that only requires selecting a psychologist, preferred time, and session type",
        "A calming color palette (soft green, warm beige) chosen in collaboration with licensed psychologists",
        "An educational onboarding experience that reduces stigma and helps users pick the right session type",
        "Rounded typography and generous spacing to create a soft, non-intimidating tone",
      ],
    },
    showcase: [
      {
        icon: "Award",
        title: "Best App for Good 2022 by Google Play Store",
        description:
          "Official recognition from Google Play Store as the Best App for Good, selected from millions of apps.",
      },
      {
        icon: "MessageCircle",
        title: "Chat & Voice Counseling Flow",
        description:
          "Counseling session flow with licensed psychologists through chat or voice call designed for safety and comfort.",
      },
      {
        icon: "Palette",
        title: "Color & UX for Mental Health",
        description:
          "The process of selecting calming colors, readable typography, and supportive UX patterns for mental health users.",
      },
      {
        icon: "ExternalLink",
        title: "Live App on Play Store",
        description:
          "The app remains active on the Play Store as a proof point of a production-ready product serving real users.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Google Play Award",
          value: "Best App",
          description: "Best App for Good 2022",
        },
        {
          label: "Session Booking",
          value: "+80%",
          description: "Increase after UX refresh",
        },
        {
          label: "User Retention",
          value: "72%",
          description: "30-day retention rate",
        },
      ],
      learnings: [
        "Designing for mental health requires close collaboration with psychology professionals",
        "Reducing visual pressure (no streaks, no competitive metrics) actually increases user comfort and consistency",
      ],
      nextSteps: [
        "Integrate mood tracking that connects directly to personalized counseling recommendations",
        "Introduce shareable session summaries that users can securely forward to follow-up counselors",
      ],
    },
  },

  // ── 03. Q-FAST ──
  {
    id: "qfast",
    title: "Q-Fast",
    subtitle: "Smart Virtual Queue Management",
    tags: ["Product Design", "Motion Design", "Frontend Dev", "SaaS"],
    category: "SaaS & Web",
    color: "#74b9ff",
    liveUrl: "https://qfast-five.vercel.app",
    year: "2026",
    client: "Linkit360",
    role: "Product Designer & Frontend Developer",
    duration: "5 months",
    team: "1 Product Designer, 3 Engineers, 1 PM",
    tools: ["Figma", "After Effects", "React", "Tailwind CSS"],
    description:
      "Q-Fast is a smart virtual queue management solution that eliminates the need for manual, physical waiting lines. The project showcases my end-to-end capability, spanning concept development, motion video production, and frontend implementation through clean slicing code.",
    problem: {
      statement:
        "Many businesses still rely on inefficient physical queues. Customers wait on-site without any time estimate, while staff struggle to manage queue flow manually and inconsistently.",
      goals: [
        "Eliminate the need for physical queues through a virtual booking system",
        "Provide real-time wait time estimates to customers",
        "Demonstrate an end-to-end capability that combines design, motion, and code within a single product",
      ],
    },
    research: {
      methods: [
        "User Observation",
        "Stakeholder Interviews",
        "Process Mapping",
      ],
      findings: [
        "Customers spend an average of 23 minutes waiting in physical queues per visit",
        "67% of customers prefer online booking when real-time notifications are available",
        "Staff need a simple, low-friction dashboard without a steep learning curve",
      ],
    },
    design: {
      decisions: [
        "A minimal three-step booking flow: choose service, choose time, confirm",
        "Real-time notifications with wait time estimates updated every minute",
        "A clean admin dashboard with drag-and-drop queue management",
        "A motion explainer video to accelerate onboarding for new business partners",
      ],
    },
    showcase: [
      {
        icon: "Clapperboard",
        title: "Motion Design Video",
        description:
          "A motion design video that explains the queue experience from booking, real-time notifications, to the moment the customer's turn arrives, serving as proof of After Effects craft.",
      },
      {
        icon: "Code",
        title: "Code Snippets (Slicing Proof)",
        description:
          "React and Tailwind code snippets that demonstrate the technical capability to turn design into a functional application.",
      },
      {
        icon: "PenTool",
        title: "Design Process (Wireframe to Hi-Fi)",
        description:
          "A full design process case study moving from rough wireframes, to mid-fidelity, and finally to high-fidelity mockups with clear evolution at each step.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Wait Time",
          value: "-70%",
          description: "Reduction in physical waiting time",
        },
        {
          label: "Customer Satisfaction",
          value: "4.6/5",
          description: "Post-implementation survey",
        },
        {
          label: "Staff Efficiency",
          value: "+45%",
          description: "Improvement in queue throughput",
        },
      ],
      learnings: [
        "Motion videos significantly accelerate B2B onboarding compared to long-form documentation",
        "Combining design and code within a single workflow meaningfully speeds up iteration cycles",
      ],
      nextSteps: [
        "Integrate an analytics dashboard to surface business insights",
        "Support multi-branch queue management for enterprise clients",
      ],
    },
  },

  // ── 04. SPEAKEASY ──
  {
    id: "speakeasy",
    title: "Speakeasy",
    subtitle: "AI-Powered Language Learning Through Films",
    tags: ["Product Design", "AI Chatbot", "Mobile App", "EdTech"],
    category: "Mobile App",
    color: "#e17055",
    year: "2025",
    liveUrl: "https://speakeasy.mobi",
    client: "Linkit360",
    role: "Senior Product Designer",
    duration: "5 months",
    team: "1 Senior Designer, 4 Engineers, 1 AI Engineer, 1 PM",
    tools: ["Figma", "Figma Make", "Maze", "Gemini"],
    description:
      "SpeakEasy is a modern language learning app that blends structured lessons, real-life media, AI interaction, and community support into one powerful experience. From beginner to advanced, users can explore a wide range of courses, practice with film clips and song lyrics, chat with an AI tutor, and connect with fellow learners. Every journey is personalized with progress tracking, gamified challenges, and motivation boosters designed to keep users engaged and growing every day.",
    problem: {
      statement:
        "Conventional language learning methods such as textbooks and flashcards feel repetitive and lack real-world context. Learners lose motivation because they can't immediately practice in authentic situations, and there is no community that makes the journey feel alive.",
      goals: [
        "Combine structured learning with real-world content such as film clips and song lyrics",
        "Introduce an AI tutor that learners can converse with anytime to practice",
        "Build a learner community and gamification system that sustains motivation",
      ],
    },
    research: {
      methods: ["User Interviews", "Competitive Analysis", "Usability Testing"],
      findings: [
        "Learners are 3x more engaged with films and songs compared to traditional textbook material",
        "An AI tutor is the most requested feature but must feel supportive rather than intimidating",
        "Progress tracking and gamification (streaks, levels, badges) clearly increase daily retention",
      ],
    },
    design: {
      decisions: [
        "A personalized learning path that adapts to each learner's level from beginner to advanced",
        "Interactive video and lyric players where users can tap any word to see meaning and pronunciation",
        "An AI tutor with a supportive tone designed to reduce speaking anxiety",
        "A gamification layer (XP, streaks, challenges) and community feed to sustain daily motivation",
        "Figma Make and Gemini used to rapidly generate learning-path layout variants, compressing design exploration from weeks to a few focused days",
      ],
    },
    showcase: [
      {
        icon: "Bot",
        title: "AI Tutor Chat Interface",
        description:
          "A responsive AI tutor interface for practicing conversations anytime with a supportive, non-judgmental tone.",
      },
      {
        icon: "Clapperboard",
        title: "Film Clips & Song Lyrics Player",
        description:
          "Interactive players for film clips and song lyrics with interactive subtitles, vocabulary highlights, and playback speed controls.",
      },
      {
        icon: "Component",
        title: "Design System & Gamification",
        description:
          "A cohesive UI component library paired with a gamification system that keeps the learning experience consistent across features.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Revenue",
          value: "Active",
          description: "Generating subscription revenue",
        },
        {
          label: "Learning Time",
          value: "+85%",
          description: "Avg. daily learning session increase",
        },
        {
          label: "Community",
          value: "Active",
          description: "Learner community growing steadily",
        },
      ],
      learnings: [
        "The AI tutor must feel human and supportive, not stiff or robotic, to keep learners engaged",
        "Pairing structured content with real-world media (films, songs) drives the strongest retention",
      ],
      nextSteps: [
        "Personalized learning paths powered by deeper AI analysis of learner progress",
        "Richer social features such as study groups and learner-to-learner challenges",
      ],
    },
  },

  // ── 05. BOOKSNAP ──
  {
    id: "booksnap",
    title: "Booksnap",
    subtitle: "Bite-sized Book Summaries with TikTok-style Navigation",
    tags: ["Product Design", "AI Assistant", "Mobile App", "Audiobook"],
    category: "Mobile App",
    color: "#a29bfe",
    year: "2025",
    liveUrl: "https://booksnap.app",
    client: "Linkit360",
    role: "Senior Product Designer",
    duration: "4 months",
    team: "1 Senior Designer, 3 Engineers, 1 PM",
    tools: ["Figma", "Figma Make", "Maze", "Protopie"],
    description:
      "BookSnap is a mobile-first reading companion created to deliver bite-sized book summaries in a modern, scrollable storytelling format. The navigation experience adopts a TikTok-style vertical scroll, allowing users to explore book summaries quickly and enjoyably. BookSnap helps readers learn faster, retain insights more effectively, and enjoy literature through text, audio, and upcoming conversational AI.",
    problem: {
      statement:
        "Traditional audiobook and reading apps have rigid user experiences. Long book lists with small covers, dull navigation, and no fast way to grasp a book's essence make it difficult for users to decide whether to commit to reading or listening.",
      goals: [
        "Create a browsing experience for book summaries as engaging as scrolling through TikTok",
        "Deliver bite-sized summaries in both text and audio formats that are easy to digest",
        "Lay the foundation for a conversational AI assistant that lets users ask questions about a book's content",
      ],
    },
    research: {
      methods: [
        "Behavioral Analysis",
        "Competitive Benchmarking",
        "Prototype Testing",
      ],
      findings: [
        "A vertical scroll pattern increases discovery rate by 4x compared to traditional list views",
        "Users spend 60% more time browsing when the preview is immersive and full-screen",
        "Short text and audio summaries increase the likelihood that users complete a book",
      ],
    },
    design: {
      decisions: [
        "A full-screen vertical scroll experience with snap points and smooth transitions between books",
        "A bite-sized summary format that can be read or listened to during everyday activities",
        "A rich book preview combining cover art, synopsis, key quotes, and an audio snippet in a single swipe",
        "Intuitive gesture-based controls that remove the need for explicit UI buttons",
        "AI-assisted workflow with Figma Make and Claude accelerated summary format exploration and front-end slicing, moving prototypes to a testable state in days",
      ],
    },
    showcase: [
      {
        icon: "Smartphone",
        title: "Vertical Scroll TikTok-style Navigation",
        description:
          "A visualization of the vertical scroll interaction showcasing smooth transitions between books with snap points and gesture controls.",
      },
      {
        icon: "MessageCircle",
        title: "AI Q&A In-book Assistant",
        description:
          "An AI-powered Q&A interface integrated directly inside book summaries, helping users explore insights more deeply.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Discovery Rate",
          value: "+4x",
          description: "Compared to traditional list view",
        },
        {
          label: "Browse Duration",
          value: "+60%",
          description: "Time spent exploring books",
        },
        {
          label: "Conversion",
          value: "+35%",
          description: "Browse to read/listen conversion",
        },
      ],
      learnings: [
        "Vertical scroll for book summaries felt unconventional at first but proved highly effective in data",
        "A bite-sized format fits modern users who want quick, dense insights on the go",
      ],
      nextSteps: [
        "Launch the conversational AI so users can ask questions directly about a book's content",
        "Introduce social features such as book sharing and reading clubs",
      ],
    },
  },

  // ── 06. KIMEE ──
  {
    id: "kimee",
    title: "Kimee",
    subtitle: "AI-Powered Educational Platform for Kids (3-8 y/o)",
    tags: ["Product Design", "Kids UI", "Mobile App", "EdTech"],
    category: "Mobile App",
    color: "#fdcb6e",
    year: "2026",
    liveUrl: null,
    liveUrlLabel: "Under Maintenance",
    liveUrlDisabled: true,
    client: "Linkit360",
    role: "Senior Product Designer",
    duration: "5 months",
    team: "1 Senior Designer, 3 Engineers, 1 Content Specialist, 1 PM",
    tools: ["Figma", "Figma Make", "Maze", "Gemini", "Claude"],
    description:
      "Kimee is an AI-powered educational platform designed for children aged 3-8 years old. The platform provides a gamified learning experience across five core subject areas: Math & Logic, Literacy & Language, Creativity & Expression, Social-Emotional Learning, and Life Skills. Kimee differentiates itself through personalized daily learning paths generated by AI, a rich gamification system with stars, levels, and achievements, and comprehensive parent-facing analytics powered by an AI assistant named Sparky. The platform supports a freemium business model with monthly, 6-month, and annual subscription plans.",
    vision:
      "To make quality early childhood education accessible, engaging, and personalized for every child through AI-powered learning experiences that adapt to individual needs and pace.",
    problem: {
      statement:
        "Parents of young children struggle to find an educational platform that truly balances fun and learning value. Most apps either focus on rewards without adaptive content, or feel as rigid as a digital textbook, causing children to disengage quickly.",
      goals: [
        "Provide an engaging, game-based learning environment for children ages 3-8",
        "Deliver personalized daily learning paths using AI algorithms",
        "Give parents comprehensive visibility into their child's learning progress",
        "Cover five core educational domains aligned with early childhood development standards",
        "Achieve sustainable revenue through a freemium subscription model",
      ],
    },
    research: {
      methods: [
        "Parent Interviews",
        "Child Observation",
        "Pedagogical Consultation",
      ],
      findings: [
        "Children aged 3-8 engage more with characters, stories, and visual progress than abstract reward systems",
        "Parents want actionable insights about their child's development, not raw data that is hard to interpret",
        "Personalizing the daily path based on each child's performance clearly increases daily learning interest",
      ],
    },
    design: {
      decisions: [
        "Child-friendly visuals with cheerful colors, high contrast, and custom characters consistent across all five learning domains",
        "A personalized daily learning path generated by AI so each child receives appropriately challenging content",
        "A complete gamification system (stars, levels, achievements) to motivate consistent daily learning",
        "A parent dashboard with an AI assistant named Sparky that summarizes progress and offers recommendations",
        "A freemium business model with monthly, 6-month, and annual subscription options",
        "Claude, Gemini, and Figma Make used end to end: Gemini for pedagogy research, Claude for content synthesis and slicing, Figma Make for parallel UI exploration across five learning domains",
      ],
    },
    showcase: [
      {
        icon: "Gamepad2",
        title: "Child-Friendly Visual Design",
        description:
          "Child-friendly visuals with cheerful colors, high contrast, custom characters, and playful typography across five learning domains.",
      },
      {
        icon: "BarChart3",
        title: "Parent Dashboard with Sparky AI",
        description:
          "A parent-facing dashboard with insights from Sparky, the AI assistant that summarizes progress and delivers actionable recommendations.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Learning Domains",
          value: "5",
          description: "Math, Literacy, Creativity, SEL, Life Skills",
        },
        {
          label: "Parent Engagement",
          value: "+72%",
          description: "Parents checking reports weekly",
        },
        {
          label: "Plans",
          value: "Freemium",
          description: "Monthly, 6-month, annual subscription",
        },
      ],
      learnings: [
        "Designing for two audiences (children and parents) requires two design languages that still feel cohesive",
        "AI recommendations must be framed positively so parents feel supported rather than judged",
      ],
      nextSteps: [
        "Expand content beyond the five core domains into new areas such as science and early coding",
        "Introduce a collaborative learning mode where children can learn alongside parents or peers",
      ],
    },
  },

  // ── 07. OKE GARDEN ──
  {
    id: "oke-garden",
    title: "Oke Garden",
    subtitle: "Garden Services Platform (Still Active Today)",
    tags: ["UI Design", "Frontend Dev", "Web App", "Startup"],
    category: "SaaS & Web",
    color: "#00b894",
    year: "2022",
    liveUrl: "https://okegarden.com",
    client: "Oke Garden",
    role: "UI Designer & Frontend Developer",
    duration: "2 months",
    team: "1 Designer/Frontend Dev, 2 Backend Developers",
    tools: ["Figma", "HTML", "CSS", "JavaScript", "Laravel Blade"],
    description:
      "Oke Garden is a garden decoration and maintenance services platform where I served as the first Frontend Developer on the project while also designing the interface. The startup is still active today with thousands of users, proving that a clean initial design and slicing code foundation can stand the test of time.",
    problem: {
      statement:
        "Garden decoration and maintenance services were still operating in a traditional way. Customers had to call or visit in person, and there was no digital platform that made booking or showcasing service portfolios easy.",
      goals: [
        "Build the first scalable digital platform for garden services",
        "Deliver a showcase-friendly design that presents garden portfolios visually",
        "Produce clean, maintainable slicing code that supports the business long term",
      ],
    },
    research: {
      methods: ["Market Research", "Competitor Audit", "User Interviews"],
      findings: [
        "Customers of garden services rely heavily on visuals, with before/after photos being the key decision factor",
        "A booking flow as easy as a WhatsApp chat is the baseline user expectation",
        "The site must load fast because the target audience is not always tech-savvy",
      ],
    },
    design: {
      decisions: [
        "A gallery-first layout that presents the garden portfolio visually and prominently",
        "A simple booking flow: choose service, choose schedule, then confirm via WhatsApp",
        "A mobile-first responsive design since most access comes from smartphones",
        "Semantic HTML and clean CSS to keep the site maintainable for years to come",
      ],
    },
    showcase: [
      {
        icon: "ArrowLeftRight",
        title: "Before & After (Design vs Live Website)",
        description:
          "A comparison of the original Figma design with the live website that continues to run today.",
      },
      {
        icon: "Code",
        title: "Slicing Code (HTML/CSS Proof)",
        description:
          "Evidence of clean slicing code with semantic HTML, tidy CSS, and responsive breakpoints.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Status",
          value: "Still Live",
          description: "Website active with thousands of users",
        },
        {
          label: "Booking Rate",
          value: "+200%",
          description: "Compared to phone-only era",
        },
        {
          label: "Load Time",
          value: "<2s",
          description: "Fast loading on 3G connections",
        },
      ],
      learnings: [
        "A clean code foundation enables a startup to thrive for years without major refactors",
        "A visual-first approach works exceptionally well for industries that rely on portfolio imagery",
      ],
      nextSteps: [
        "The platform is now maintained by Oke Garden's internal team",
        "The foundation built during the initial launch is still in use today",
      ],
    },
  },

  // ── 08. FANTASY ELEVEN ──
  {
    id: "fantasy-eleven",
    title: "Fantasy Eleven",
    subtitle: "Fantasy Football Contest Platform",
    tags: ["Product Design", "PWA", "Sports", "SaaS"],
    category: "SaaS & Web",
    color: "#e17055",
    year: "2025",
    liveUrl: "https://fantasyeleven.net",
    client: "Linkit360",
    role: "Product Designer",
    duration: "4 months",
    team: "1 Product Designer, 4 Engineers, 1 PM",
    tools: ["Figma", "Figma Make", "Maze", "React", "PWA"],
    description:
      "Fantasy Eleven is a football platform where fans can have fun by predicting match results, building their own fantasy teams, playing quizzes, and reading football news in one place. Users can join prediction contests, manage a fantasy team using real players, answer daily or live football quizzes, and earn coins as rewards. These coins can be used to join competitions and unlock more features. The user journey begins on a landing page that introduces the product's features and benefits, and clicking the 'Join Now' CTA takes users directly into the app.",
    problem: {
      statement:
        "Fantasy football platforms in the Indonesian market tend to feel too complex for casual fans and lack engaging design. Their UX is typically built for hardcore users, overlooking the largest market segment that wants a simple yet exciting experience.",
      goals: [
        "Provide an informative landing page that makes it easy for users to understand the product's features and benefits",
        "Deliver a fantasy, prediction, and quiz experience that works seamlessly in the browser without requiring installation",
        "Introduce a coin reward system that brings users back and motivates them to join competitions",
      ],
    },
    research: {
      methods: ["User Surveys", "Competitive Analysis", "Beta Testing"],
      findings: [
        "70% of the target audience are casual fans who want a simple but exciting experience",
        "A landing page that clearly communicates product benefits significantly improves conversion for casual users",
        "Prediction and quiz features are the favorite entry points before users try the more complex fantasy team feature",
      ],
    },
    design: {
      decisions: [
        "A landing page with a clear narrative of core features and benefits, paired with a 'Join Now' CTA that leads into the app",
        "A PWA-based application that reaches more users without requiring an app store install",
        "An interactive line-up builder with drag-and-drop player placement on a visual formation",
        "A coin-based reward system that unlocks competition entries and extra features",
      ],
    },
    showcase: [
      {
        icon: "Trophy",
        title: "Dream Team Line-up Builder",
        description:
          "An interactive team building interface with drag-and-drop, formation selection, and player stat cards.",
      },
      {
        icon: "BarChart3",
        title: "Match Statistics & Leaderboard",
        description:
          "Match statistics and contest leaderboard pages that are clean, informative, and real-time.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Revenue",
          value: "Active",
          description: "Generating contest entry revenue",
        },
        {
          label: "Avg. Session",
          value: "12 min",
          description: "High engagement per visit",
        },
        {
          label: "Match Day Users",
          value: "+300%",
          description: "Peak traffic during live matches",
        },
      ],
      learnings: [
        "Sports UI requires a different kind of visual energy: bold colors, dynamic layouts, and real-time feedback",
        "An informative landing page is the critical bridge that brings casual fans into the main application",
      ],
      nextSteps: [
        "Social features such as friend challenges and private leagues",
        "Live match commentary and real-time notifications during match day",
      ],
    },
  },

  // ── 09. CRIPTOFY ──
  {
    id: "criptofy",
    title: "Criptofy",
    subtitle: "Premium Crypto Trading Landing Page",
    tags: ["UI Design", "Landing Page", "Fintech", "Dark Mode"],
    category: "SaaS & Web",
    color: "#fdcb6e",
    year: "2022",
    client: "Freelance Client",
    role: "UI/UX Designer (Freelance)",
    duration: "2 weeks",
    team: "1 UI/UX Designer, 1 PM, 1 Engineer",
    tools: ["Figma", "Photoshop", "Illustrator"],
    description:
      "Criptofy is a freelance project featuring an exclusive landing page for cryptocurrency introductions and digital asset trading features. On this project, I worked as a freelance UI/UX Designer, focusing on visual execution and building product credibility through a modern, premium design.",
    problem: {
      statement:
        "Many crypto platforms have landing pages that feel cluttered and fail to build trust. New users often feel intimidated by overly technical data and unpolished design.",
      goals: [
        "A landing page that establishes credibility and trust from the very first impression",
        "Elegant crypto data visualization that is easy for non-experts to understand",
        "A premium dark mode aesthetic that remains fully readable",
      ],
    },
    research: {
      methods: ["Visual Benchmarking", "Fintech UI Trends Analysis"],
      findings: [
        "Dark mode has become the de facto standard in the crypto industry, signaling a tech-savvy and premium tone",
        "Trust signals such as security badges, testimonials, and partner logos must be visible above the fold",
        "Charts and data should be simplified because new users don't need candlestick charts on a landing page",
      ],
    },
    design: {
      decisions: [
        "A dark mode treatment with gradient accents and glassmorphism elements for a premium feel",
        "A hero section with a simplified trend line chart instead of a candlestick chart",
        "Prominent placement of trust signals such as security badges, regulation info, and user counts",
        "A strong typographic hierarchy that guides the eye from headline to CTA",
      ],
    },
    showcase: [
      {
        icon: "Moon",
        title: "Dark Mode Visual Exploration",
        description:
          "Dark mode exploration with gradients, glassmorphism, neon accents, and high-end coin graphics.",
      },
      {
        icon: "BarChart3",
        title: "Data Visualization & Typography",
        description:
          "Typography and information layout that make coin movement data easy to read through a clear visual hierarchy.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Client Satisfaction",
          value: "5/5",
          description: "Freelance project rating",
        },
        {
          label: "Delivery",
          value: "On Time",
          description: "Completed within 2 weeks",
        },
        {
          label: "Design Quality",
          value: "Premium",
          description: "High-end fintech aesthetic",
        },
      ],
      learnings: [
        "Dark mode requires extra attention to contrast ratios so the experience remains comfortable to read",
        "Fintech credibility is built through visual consistency and professional typography",
      ],
      nextSteps: [
        "Project delivered and handed off to the client",
        "The design now serves as a reference for future fintech projects",
      ],
    },
  },

  // ── 10. AUTO HEALTH CARE ──
  {
    id: "auto-health-care",
    title: "Auto Health Care",
    subtitle: "Hospital Health Program Monitoring Solution",
    tags: ["Dashboard", "Enterprise UX", "Health Tech", "Complex IA"],
    category: "Health Tech",
    color: "#74b9ff",
    year: "2024",
    client: "Keluarga Sehat Hospital Group",
    role: "UI/UX Designer",
    duration: "6 months",
    team: "1 UI/UX Designer, 2 Engineers, 1 PM",
    tools: ["Figma", "Miro", "React", "Tailwind CSS"],
    description:
      "Auto Health Care is a hospital health program monitoring solution that helps ensure every step of a health program runs smoothly and meets its defined targets. Used internally by Keluarga Sehat Hospital Group, the system covers patient registration, follow-up broadcasts, and an integrated medical queueing system.",
    problem: {
      statement:
        "Hospitals still relied heavily on paper-based systems and spreadsheets to monitor patient health programs. Data was scattered across different units, causing slow communication and suboptimal follow-up on health program milestones.",
      goals: [
        "A centralized dashboard that supports multiple roles (admin, doctor, nurse) in a single platform",
        "A patient follow-up broadcast system that improves adherence to health programs",
        "An information architecture that remains navigable despite a large and complex feature set",
      ],
    },
    research: {
      methods: [
        "Stakeholder Interviews",
        "Workflow Shadowing",
        "Information Architecture Mapping",
      ],
      findings: [
        "Hospital staff have varying levels of digital literacy, so the interface must be intuitive without long training",
        "Each role requires a different view of the same underlying data",
        "Manual follow-up broadcasts caused around 30% of patients to miss their scheduled follow-up sessions",
      ],
    },
    design: {
      decisions: [
        "A role-based dashboard so each role only sees the data and features relevant to them",
        "A flat information architecture with a maximum of two levels to reduce cognitive load",
        "A broadcast system with template management for automated patient follow-ups",
        "Consistent design patterns across every module to minimize the learning curve",
      ],
    },
    showcase: [
      {
        icon: "LayoutDashboard",
        title: "Multi-role Information Architecture",
        description:
          "The information architecture of a dashboard that serves multiple roles (admin, doctor, nurse) with permission-based views.",
      },
      {
        icon: "Radio",
        title: "Patient Broadcast System",
        description:
          "The patient broadcast flow for follow-up reminders, template management, and scheduling that keeps health programs on track.",
      },
    ],
    results: {
      metrics: [
        {
          label: "Missed Follow-ups",
          value: "-65%",
          description: "Reduction with broadcast system",
        },
        {
          label: "Staff Onboarding",
          value: "2 days",
          description: "Time to proficiency (from 2 weeks)",
        },
        {
          label: "Modules",
          value: "12+",
          description: "Active operational modules",
        },
      ],
      learnings: [
        "Enterprise healthcare UX needs to be forgiving, with undo, confirmations, and clear error messages",
        "A flat information architecture is more effective than deep hierarchies for feature-heavy dashboards",
      ],
      nextSteps: [
        "Integrate with BPJS for national patient data",
        "Introduce a mobile companion app for doctors during rounds",
      ],
    },
  },
];
