export type Portfolio = {
  name: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  availability: string;
  contactEmail?: string;
  resumeUrl?: string;
  education: { program: string; status: string; institution?: string };
  about: string[];
  skills: { title: string; items: string[] }[];
  principles: { title: string; description: string }[];
  progression: { title: string; description: string }[];
};

export const portfolio: Portfolio = {
  name: "Ardit Avdiu",
  role: "Full-Stack Developer focused on AI-powered products",
  description:
    "Full-Stack Developer building across mobile, web, backend, and AI. Explore Ardit Avdiu’s work in product engineering, structured AI systems, and reliable software.",
  github: "https://github.com/ann3v",
  linkedin: "https://www.linkedin.com/in/ardit-avdiu-397975365/",
  availability:
    "Open to remote opportunities worldwide and on-site opportunities across Europe.",
  contactEmail: "arditavdiu37@gmail.com",
  // Add only a contact email explicitly approved for public use and a real résumé URL.
  education: {
    program: "Computer Science & Engineering",
    status: "Nearing degree completion · Diploma thesis",
  },
  about: [
    "About three years ago, I was still finding my way around software development. University projects, self-directed learning, and building with friends gradually took me from small exercises to complete applications.",
    "What made it stick was the ability to turn an idea into something useful. I enjoy tracing a feature through the whole system: what the user sees, how the data moves, who can access it, and what happens when something fails.",
    "I’m finishing my Computer Science & Engineering studies, with my diploma thesis remaining. I want to keep working on challenging problems, learning from other engineers, and sharing what I learn along the way.",
  ],
  skills: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frontend & mobile",
      items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
    },
    {
      title: "Backend & data",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "Sequelize",
        "Auth & RLS",
      ],
    },
    {
      title: "AI engineering",
      items: [
        "LLM API integration",
        "Groq",
        "Prompt engineering",
        "Structured outputs",
        "AI evaluation",
        "Deterministic safeguards",
      ],
    },
    {
      title: "Engineering practice",
      items: [
        "Git & GitHub",
        "Vitest",
        "Playwright",
        "Jest",
        "API validation",
        "Security hardening",
        "CI & debugging",
      ],
    },
  ],
  principles: [
    {
      title: "Build the whole system",
      description:
        "Start with the problem, then connect the interface, backend, data, and authentication. Understand how the pieces behave together.",
    },
    {
      title: "Question the output",
      description:
        "Use AI to accelerate investigation and implementation. Inspect what it produces, challenge assumptions, and test the failure cases.",
    },
    {
      title: "Improve what works",
      description:
        "A working feature is a starting point. Revisit it with type checks, tests, and audits to make it more secure, reliable, and maintainable.",
    },
  ],
  progression: [
    {
      title: "Fundamentals",
      description:
        "Small applications, university exercises, and learning by doing.",
    },
    {
      title: "Full-stack systems",
      description:
        "Student Planner and a custom backend connecting mobile to data.",
    },
    {
      title: "Product engineering",
      description:
        "KosVibe: team collaboration, business workflows, and integration.",
    },
    {
      title: "AI & research",
      description:
        "Interview Simulator, reliability experiments, and diploma-thesis work.",
    },
  ],
};

export type DiagramStep = { title: string; description: string };
type Detail = { title: string; description: string };
export type Project = {
  slug: string;
  title: string;
  liveUrl?: string;
  category: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  accent: "green" | "purple" | "blue";
  number: string;
  headline: string;
  overview: string;
  product: { intro: string; features: Detail[] };
  architecture: { description: string; steps: DiagramStep[]; note: string };
  workflow?: { title: string; description: string; steps: string[] };
  contribution: { title: string; description: string; items: string[] };
  challenges: Detail[];
  layers?: { title: string; description: string; items: string[] }[];
  experiment?: {
    title: string;
    description: string;
    design: {
      answers: number;
      roles: number;
      interviewTypes: number;
      repetitions: number;
      evaluations: number;
    };
    findings: Detail[];
    limitations: string;
  };
  quality: Detail[];
  evolution?: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "kosvibe",
    title: "KosVibe",
    category: "Full-Stack Mobile Platform",
    number: "01",
    accent: "green",
    summary:
      "A mobile platform bringing Kosovo’s places, people, and local businesses together. Built with a team, with primary ownership of the business platform.",
    role: "Team project · Business platform & backend integration",
    status: "Functional MVP / advanced prototype",
    stack: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Expo",
      "PostgreSQL",
      "React Navigation",
      "Row Level Security",
      "PostgreSQL RPC",
      "Supabase Storage",
      "react-native-maps",
    ],
    headline: "One place to discover. A connected system underneath.",
    overview:
      "KosVibe brings discovery, restaurant reservations, community content, and local listings into an Expo mobile app for tourists and residents of Kosovo. The engineering challenge was connecting those experiences with the people and businesses that manage them.",
    product: {
      intro:
        "A connected product spanning both the visitor experience and the business workflows behind it.",
      features: [
        {
          title: "Discover & navigate",
          description:
            "Explore restaurants, museums, historical places, nature, and attractions with map-based locations and directions.",
        },
        {
          title: "Book a table",
          description:
            "Choose a restaurant, date, time, and party size. View reservations and cancel when the reservation is eligible.",
        },
        {
          title: "Join the community",
          description:
            "Create stories with images, likes, and views. Create or join events, confirm attendance, and rate completed events.",
        },
        {
          title: "Find something local",
          description:
            "Browse, filter, and share product listings, then contact the seller directly. Owners manage listing details and sold or archived states.",
        },
      ],
    },
    workflow: {
      title: "From business signup to daily operations.",
      description:
        "Business accounts move through approval and place-ownership workflows before managing their restaurant. A secure document verification and review workflow remains a next step.",
      steps: [
        "Business signup",
        "Account approval",
        "Claim or request a place",
        "Ownership review",
        "Business dashboard",
        "Manage reservations",
      ],
    },
    architecture: {
      description:
        "Screens communicate through repositories and context to Supabase. Authentication, database policies, functions, and storage form the backend boundary.",
      steps: [
        {
          title: "Expo mobile app",
          description: "React Native screens and navigation",
        },
        {
          title: "Repositories & context",
          description: "Domain operations and shared application state",
        },
        {
          title: "Supabase SDK",
          description: "Authenticated data and storage access",
        },
        {
          title: "Supabase platform",
          description: "Auth · PostgreSQL · RLS · RPC · Storage",
        },
      ],
      note: "Maps use react-native-maps, expo-location, and external navigation. The application uses a Supabase-centric backend rather than a custom Express API.",
    },
    contribution: {
      title: "A team product. Clear personal ownership.",
      description:
        "I worked with friends and team members, taking primary ownership of the business platform and making major backend and integration contributions.",
      items: [
        "Business architecture, navigation, and repositories",
        "Registration, place claims, and new-place requests",
        "Restaurant details, galleries, menus, and specials",
        "Reservation management and business-related RLS/storage work",
        "Later marketplace and place-request hardening, plus system integration",
      ],
    },
    challenges: [
      {
        title: "Multiple roles, shared data",
        description:
          "Consumer, business, and admin flows touch the same places. Ownership associations and database access policies need to stay aligned with the interface.",
      },
      {
        title: "Workflows beyond a form",
        description:
          "Creating a business account is only the beginning. Pending approvals, claims, place requests, and management access need distinct states and clear transitions.",
      },
      {
        title: "Reservations as a lifecycle",
        description:
          "Reservations begin pending and can move through confirmed, rejected, checked-in, completed, or cancelled states. Both customer and business views need to reflect that lifecycle.",
      },
    ],
    quality: [
      {
        title: "Data ownership",
        description:
          "RLS, PostgreSQL functions, and storage rules support the business workflows. Authorization hardening remains an ongoing engineering priority.",
      },
      {
        title: "Integration discipline",
        description:
          "Repository boundaries organize a growing product across several domains. GitHub Actions runs lint and type checks.",
      },
      {
        title: "A defined product boundary",
        description:
          "The marketplace is a local listing and seller-contact experience. Payments, checkout, delivery, and integrated buyer/seller messaging are outside its implemented scope.",
      },
    ],
    improvements: [
      "Complete the business document verification and review workflow.",
      "Expand authorization hardening and automated integration/security tests.",
      "Improve moderation and admin tools, then add notification infrastructure.",
      "Measure and improve performance as the product grows.",
    ],
  },
  {
    slug: "ai-interview-simulator",
    title: "AI Job Interview Simulator",
    liveUrl: "https://ai-interview-seven-gold.vercel.app/",
    category: "Full-Stack Development \u00b7 AI Engineering \u00b7 Research",
    number: "02",
    accent: "purple",
    summary:
      "A deployed interview-practice app with structured AI feedback, durable review checkpoints, and a cross-role evaluation study.",
    role: "Full-stack development, AI pipeline & evaluation research",
    status: "Deployed web application / diploma-thesis research",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase Auth",
      "PostgreSQL",
      "Row Level Security",
      "Groq API",
      "openai/gpt-oss-120b",
      "Zod",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Vercel",
      "Resend API",
    ],
    headline: "Build a durable practice workflow around AI feedback.",
    overview:
      "What began as a university project evolved into a deployed web application for individual interview practice and a diploma-thesis research project. The system combines AI-generated questions and feedback with validated responses, explicit application rules, and saved review checkpoints.",
    product: {
      intro:
        "Users configure a practice interview, work through questions, and return to saved feedback and results.",
      features: [
        {
          title: "Configure a practice",
          description:
            "Create an account, confirm email, sign in or recover access, then choose a target role, interview type, difficulty, and question count.",
        },
        {
          title: "Answer & review",
          description:
            "AI generates questions and evaluates each answer for correctness, clarity, and depth, with a holistic score and coaching. Submitted answers and example answers can be expanded.",
        },
        {
          title: "See the session result",
          description:
            "A final evaluation summarizes strengths, weaknesses, and recommendations. Results and History let users revisit saved sessions, restore work, and delete sessions.",
        },
        {
          title: "Manage the experience",
          description:
            "Profile and settings pages support account management. Users can optionally dictate answers with browser speech-to-text or send feedback through a server-side email integration.",
        },
      ],
    },
    workflow: {
      title: "Save the answer and its review as one checkpoint.",
      description:
        "An accepted answer and its review checkpoint are persisted together. The user acknowledges the saved review before continuing. If persistence fails, they can retry saving the accepted answer without requesting another AI evaluation; restoration can return to a pending review. Migrations 00008 and 00009 implement version-checked persistence and durable review checkpoints, applied and verified in the hosted project.",
      steps: [
        "Submit an answer",
        "Evaluate and validate feedback",
        "Save answer + review checkpoint",
        "Acknowledge the saved review",
        "Continue or restore pending review",
      ],
    },
    architecture: {
      description:
        "Next.js App Router keeps AI and email integrations on the server. Authenticated routes verify the user and validate each request before model output is parsed, checked, and persisted.",
      steps: [
        {
          title: "Candidate input",
          description: "Role, interview context, and answer",
        },
        {
          title: "Authenticated API",
          description: "User verification · validation · request limits",
        },
        {
          title: "Prompt construction",
          description: "Instructions separated from untrusted candidate text",
        },
        {
          title: "Groq LLM",
          description: "Groq API · openai/gpt-oss-120b",
        },
        {
          title: "Parse & validate",
          description: "JSON parsing and Zod schema checks",
        },
        {
          title: "Apply bounded rules",
          description: "Recognized non-answer safeguards and explicit errors",
        },
        {
          title: "Persist the checkpoint",
          description: "PostgreSQL · RLS · version-checked writes",
        },
        {
          title: "Review & results",
          description: "Acknowledged feedback, history, and saved sessions",
        },
      ],
      note: "Supabase Auth and RLS scope session data to its owner. Resend feedback email and Groq calls run server-side. The workflow also checks parent-session ownership and database constraints.",
    },
    contribution: {
      title: "Full-stack delivery and evaluation research.",
      description:
        "I developed the application across its full stack, then extended the work into reliability engineering and a cross-role study of the answer evaluator.",
      items: [
        "Interview setup, answer feedback, final results, and session history",
        "Durable review checkpoints with retry and restoration behavior",
        "Authenticated APIs, ownership-scoped persistence, and security controls",
        "AI output validation, deterministic safeguards, and cross-role evaluation",
      ],
    },
    challenges: [
      {
        title: "Constrain probabilistic output",
        description:
          "The application combines bounded schemas, JSON parsing, Zod validation, request timeouts, and explicit error handling around generated content.",
      },
      {
        title: "Keep candidate input in the data boundary",
        description:
          "Prompts treat candidate-provided text as untrusted data. A deterministic safeguard handles narrowly recognized non-answers and copied-question responses; these controls do not establish objective grading accuracy or complete immunity to prompt injection.",
      },
      {
        title: "Make progress durable",
        description:
          "Version-checked persistence saves an accepted answer and its review checkpoint together. Explicit acknowledgement and retryable writes keep the user in control of progression through a session.",
      },
    ],
    layers: [
      {
        title: "Probabilistic layer",
        description: "The model generates interview questions and feedback.",
        items: [
          "Contextual question generation",
          "Correctness, clarity, and depth assessment",
          "Coaching and strong-answer examples",
          "Session-level summaries and recommendations",
        ],
      },
      {
        title: "Deterministic layer",
        description:
          "Application code validates responses and enforces selected workflow rules.",
        items: [
          "Bound request and response schemas",
          "Parse JSON and validate output with Zod",
          "Apply narrow safeguards to recognized non-answers and copied questions",
          "Use timeouts, explicit errors, and durable review checkpoints",
        ],
      },
    ],
    experiment: {
      title: "Repeatable behavior, with calibration still to investigate.",
      description:
        "Cross-role-v3 is the primary study: 72 authored answers span six professional roles and three interview types, with three repetitions per answer. All 216 evaluations were accepted by the study protocol. The results consider repeatability, relative quality discrimination, and score calibration separately.",
      design: {
        answers: 72,
        roles: 6,
        interviewTypes: 3,
        repetitions: 3,
        evaluations: 216,
      },
      findings: [
        {
          title: "57.87%",
          description:
            "Agreement with predefined, author-defined expected score intervals. This is a calibration measure against the study rubric.",
        },
        {
          title: "216 / 216",
          description:
            "Evaluations accepted by the study protocol.",
        },
        {
          title: "Strong repeatability",
          description:
            "Repeated evaluations showed strong repeatability and distinguished relative answer quality under study conditions. Excellent answers consistently scored highly, most commonly 8/10; the predefined 9-10 interval set a stricter threshold for the highest score band.",
        },
      ],
      limitations:
        "The study provides evidence of repeatable evaluation behavior and identifies top-end score calibration for further investigation. It does not establish objective grading accuracy, agreement with independent expert human graders, or improved interview or hiring outcomes.",
    },
    quality: [
      {
        title: "Protect request and data boundaries",
        description:
          "Server-side user verification, RLS ownership, parent-session checks, database constraints, request validation, exact-origin checks, size limits, process-local rate limiting, and security headers. Feedback email HTML is escaped before delivery.",
      },
      {
        title: "Release candidate checks",
        description:
          "Passed 1,356 Vitest tests across 75 files; 111 Chromium browser tests with one existing capture-only skip; all five GitHub Actions jobs; TypeScript checks; and a production build. ESLint reported zero errors and two existing warnings.",
      },
      {
        title: "Merged and deployed",
        description:
          "The release was merged to main through PR #2 using a normal merge commit and deployed to Vercel. Relevant automated integration and browser suites mock external service boundaries, so these results do not establish that every hosted Supabase, Groq, or Resend scenario works under all conditions.",
      },
    ],    evolution: [
      "University project",
      "Full-stack application",
      "Reliability engineering",
      "Diploma-thesis evaluation",
    ],
    improvements: [
      "Investigate top-end score calibration with broader samples and independent expert evaluation.",
      "Evaluate changes against repeatability and expected-interval agreement before adopting them.",
      "Consider distributed rate limiting and additional hosted integration coverage.",
    ],
  },
  {
    slug: "smart-student-planner",
    title: "Smart Student Planner",
    category: "Full-Stack Mobile Application",
    number: "03",
    accent: "blue",
    summary:
      "A mobile academic planner backed by a custom Express API. An exercise in backend ownership, authentication, and improving a working application over time.",
    role: "Mobile & custom REST backend · Iterative security hardening",
    status: "Full-stack MVP / portfolio demonstration",
    stack: [
      "React Native",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "Expo",
      "Sequelize",
      "JWT",
      "Zod",
      "Jest",
      "Supertest",
    ],
    headline: "A useful student tool. A deeper backend exercise.",
    overview:
      "Smart Student Planner combines academic tasks, a weekly schedule, and workload analytics in an authenticated mobile application. It demonstrates a conventional REST backend and the work of revisiting an application to improve security, correctness, and maintainability.",
    product: {
      intro:
        "Register, verify an email with a six-digit code, then organize academic work in one place.",
      features: [
        {
          title: "Plan the week",
          description:
            "Manage subjects, tasks, priorities, due dates, completion, and a weekly schedule, with a dashboard for upcoming work.",
        },
        {
          title: "Understand the workload",
          description:
            "Backend analytics calculate task counts, completion rate, priority and subject distribution, overdue tasks, upcoming workload, and planned study hours.",
        },
        {
          title: "Remember locally",
          description:
            "Optional device-local Expo notifications provide task reminders. The app also includes theme support.",
        },
      ],
    },
    architecture: {
      description:
        "A custom Express API puts authentication, validation, and database operations behind a clear REST boundary.",
      steps: [
        {
          title: "Expo mobile app",
          description: "React Native and TypeScript",
        },
        {
          title: "Axios REST client",
          description: "Authenticated requests to the backend",
        },
        {
          title: "Express API",
          description: "Authentication, validation, and controllers",
        },
        {
          title: "Sequelize → PostgreSQL",
          description: "Models, ownership-scoped resources, and analytics",
        },
      ],
      note: "JWT and bcrypt support authentication; Nodemailer supports verification emails. Task reminders use device-local Expo notifications.",
    },
    contribution: {
      title: "Owning the backend, then revisiting the details.",
      description:
        "I built the custom Express/PostgreSQL backend and iteratively improved authentication, endpoint validation, resource ownership, and the application’s TypeScript foundations.",
      items: [
        "JWT authentication, email verification, and backend analytics",
        "Security middleware, explicit write-field whitelisting, and endpoint tests",
        "JavaScript-to-TypeScript migration across backend and frontend; strictness is stronger on the backend",
      ],
    },
    challenges: [
      {
        title: "Authorization at the resource boundary",
        description:
          "Owner-scoped access and explicit write whitelists constrain what each user can retrieve and change. Zod validates requests before they reach application logic.",
      },
      {
        title: "Modernize incrementally",
        description:
          "Migrating the backend and frontend to TypeScript happened alongside correctness fixes and stronger validation, rather than being a one-time rewrite.",
      },
    ],
    quality: [
      {
        title: "Authentication & verification",
        description:
          "Password hashing, JWT, verification expiry, account lockout, endpoint rate limits, and startup JWT-secret validation strengthen the account flow.",
      },
      {
        title: "API hardening",
        description:
          "Helmet, CORS, body limits, Zod validation, production error masking, and explicit write-field whitelisting create clearer request and error boundaries.",
      },
    ],
    evolution: [
      "Initial app & JWT backend",
      "Verification & security middleware",
      "TypeScript & endpoint tests",
      "Validation & correctness fixes",
    ],
    improvements: [
      "Expand automated coverage around ownership, validation, and analytics edge cases.",
      "Improve account management and deployment reliability before considering production use.",
    ],
  },
];
