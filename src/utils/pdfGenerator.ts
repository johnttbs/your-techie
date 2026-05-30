import { jsPDF } from "jspdf";

export function generateSyllabusPDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm

  // Colors
  const navyColor = [18, 30, 49];      // brand-navy: #121E31
  const orangeColor = [244, 111, 34];  // brand-orange: #F46F22
  const textColor = [55, 65, 81];      // gray-700
  const lightBg = [250, 249, 246];     // #FAF9F6 soft ivory
  const white = [255, 255, 255];

  // Helper: Draw standard page header and footer decoration
  const drawPageShell = (pageIndex: number, totalPages: number, pageTitle: string) => {
    // 1. Top Decorative Bands (Angled and straight accents matching the corporate style)
    doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.rect(0, 0, pageWidth, 8, "F");
    
    doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.rect(0, 8, 35, 1.5, "F");

    // 2. Footer decorative strip
    doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.rect(0, pageHeight - 12, pageWidth, 12, "F");

    doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.rect(pageWidth - 60, pageHeight - 12, 60, 1.5, "F");

    // Footer Text inside the dark Navy band
    doc.setTextColor(white[0], white[1], white[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("YOUR TECHIE HUB ACADEMY", 15, pageHeight - 5);
    
    doc.setFont("helvetica", "normal");
    doc.text("www.yourtechiehub.com", pageWidth / 2, pageHeight - 5, { align: "center" });
    
    doc.setFont("helvetica", "bold");
    doc.text(`Page ${pageIndex} of ${totalPages}`, pageWidth - 15, pageHeight - 5, { align: "right" });

    // Header Content
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("CLOUD & DEVOPS ENGINEERING SYLLABUS", 15, 15);
    if (pageTitle) {
      doc.setFont("helvetica", "normal");
      doc.text(`|  ${pageTitle.toUpperCase()}`, 75, 15);
    }

    // Divider line
    doc.setDrawColor(229, 231, 235); // gray-200
    doc.setLineWidth(0.2);
    doc.line(15, 17, pageWidth - 15, 17);
  };

  // Helper: Draw Bullet point
  const drawBullet = (x: number, y: number, text: string, textWidth: number = 180) => {
    doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.circle(x + 1.5, y - 1, 0.8, "F");
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(text, x + 5, y, { maxWidth: textWidth });
  };

  // Helper: Draw Checkbox item
  const drawCheckboxItem = (x: number, y: number, text: string, textWidth: number = 175) => {
    // Square
    doc.setDrawColor(orangeColor[0], orangeColor[1], orangeColor[2]);
    doc.setLineWidth(0.4);
    doc.rect(x, y - 3, 3, 3, "S");
    // Check line
    doc.setDrawColor(16, 185, 129); // green-500
    doc.line(x + 0.6, y - 1.5, x + 1.3, y - 0.7);
    doc.line(x + 1.3, y - 0.7, x + 2.5, y - 2.4);

    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(text, x + 6, y, { maxWidth: textWidth });
  };


  // ==================== PAGE 1: COVER PAGE ====================
  // Clean off-white background
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // Elegant curved pattern blocks on corners (Using multiple solid and styled rectangles and triangles)
  doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.rect(0, 0, pageWidth, 55, "F");
  doc.triangle(0, 55, 60, 55, 0, 75, "F");
  doc.rect(pageWidth - 45, 0, 45, 90, "F");
  doc.triangle(pageWidth - 45, 90, pageWidth, 90, pageWidth, 115, "F");

  // Orange design accent lines
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(0, 55, pageWidth - 45, 3, "F");
  doc.rect(pageWidth - 48, 0, 3, 90, "F");

  // Top Title Banner inside navy block
  doc.setTextColor(white[0], white[1], white[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("YOUR TECHIE", 20, 30);
  
  // Highlight Orange logo text accent
  doc.setTextColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.setFontSize(28);
  doc.text("HUB", 94, 30);

  doc.setTextColor(white[0], white[1], white[2]);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ACADEMY FOR MODERN CLOUD & DEVOPS ENGINEERING", 20, 38);

  // Large elegant display title
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(38);
  doc.text("CLOUD & DEVOPS", 20, 140);
  doc.text("BROCHURE", 20, 156);

  // Subtitle line
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(20, 166, 35, 2.5, "F");

  // Target marketing statement description
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  const coreStatement = "Build Real-World Tech Skills. Start Your Journey Into Cloud & DevOps Engineering with rigorous hands-on labs and dedicated mentors.";
  doc.text(coreStatement, 20, 180, { maxWidth: 140 });

  // Bottom decoration (angled orange stripe)
  doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.rect(0, pageHeight - 35, pageWidth, 35, "F");
  
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.triangle(0, pageHeight - 35, 120, pageHeight - 35, 0, pageHeight - 50, "F");
  doc.rect(0, pageHeight - 37, pageWidth, 2, "F");

  // Info details at the bottom of the cover
  doc.setTextColor(white[0], white[1], white[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("COHORT SYLLABUS & PROGRAM OVERVIEW", 20, pageHeight - 18);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text("www.yourtechiehub.com", 20, pageHeight - 10);
  doc.text("Enabling transition from novice to global deployment readiness.", pageWidth - 20, pageHeight - 12, { align: "right" });


  // ==================== PAGE 2: ABOUT THE PROGRAM ====================
  doc.addPage();
  drawPageShell(2, 9, "About the Program");

  // Banner text
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("ABOUT THE PROGRAM", 15, 30);
  
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 34, 15, 1, "F");

  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const aboutText = "The Your Techie Hub Cloud Computing & DevOps Engineering Program is a practical, beginner-friendly training designed to help aspiring tech professionals gain real-world skills in modern cloud infrastructure, deployment, automation, and DevOps workflows. Our sessions are fully structured toward practical confidence.";
  doc.text(aboutText, 15, 42, { maxWidth: 180 });

  // Sub section: Built for
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("This program is built for:", 15, 68);

  const builtFor = [
    "Beginners trying to start a solid career in tech from scratch",
    "Students & university graduates looking for critical market skills",
    "Career switchers transitioning from non-technical professions",
    "IT professionals seeking to upscale into Cloud or DevOps domains",
    "Anyone interested in training with practical, job-relevant tech stacks"
  ];

  let currentY = 76;
  builtFor.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Highlight Box: We focus heavily on
  currentY += 6;
  doc.setFillColor(243, 244, 246); // light gray container
  doc.setDrawColor(229, 231, 235);
  doc.roundedRect(15, currentY, 180, 72, 3, 3, "FD");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("At Your Techie Hub, we focus heavily on:", 22, currentY + 8);

  const focusHeavily = [
    "Practical learning (100% lab-driven sessions & AWS sandbox models)",
    "Hands-on projects targeting modern enterprise solutions",
    "Beginner-friendly teaching styles coupled with detailed whiteboard models",
    "Structured individual mentorship & strategic advisory circles",
    "Real-world enterprise tools & production deployment workflows",
    "Comprehensive career development, mock interviews & CV rebuild boards"
  ];

  let focusY = currentY + 16;
  for (let i = 0; i < focusHeavily.length; i++) {
    const colIdx = i % 2;
    const rowIdx = Math.floor(i / 2);
    const itemX = colIdx === 0 ? 22 : 110;
    const itemY = focusY + (rowIdx * 16);
    drawCheckboxItem(itemX, itemY, focusHeavily[i], 82);
  }

  // Encouraging note
  currentY += 84;
  doc.setFillColor(254, 243, 199); // light orange background
  doc.setDrawColor(245, 158, 11);
  doc.roundedRect(15, currentY, 180, 24, 2, 2, "FD");

  doc.setTextColor(180, 83, 9); // amber text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("OUR CORE LEARNING PHILOSOPHY:", 20, currentY + 7);
  doc.setFont("helvetica", "normal");
  doc.text("Our goal is not to overwhelm learners with endless tools, but to help you build strong, reliable technical foundations step-by-step with absolute clarity and global confidence.", 20, currentY + 12, { maxWidth: 170 });


  // ==================== PAGE 3: PHASE 1 START ====================
  doc.addPage();
  drawPageShell(3, 9, "Phase 1: Cloud Computing (M1 - M3)");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("PHASE 1 — CLOUD COMPUTING ENGINEERING", 15, 30);
  doc.setFontSize(11);
  doc.setTextColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.text("DURATION: 3 MONTHS  |  FOUNDATION BUILDING", 15, 36);

  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 39, 20, 1, "F");

  // Module 1 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("1. Introduction to Cloud Computing", 15, 48);

  const subItems1 = [
    "Overview of Cloud Computing: Definitions, cloud core characteristics, and global benefits",
    "Cloud Deployment Models: Private clouds, public clouds, and hyper-hybrid clouds",
    "Cloud Service Models: Infrastructure as a Service (IaaS), PaaS, and Software as a Service (SaaS)",
    "Introduction to Prominent Cloud Providers: Detailed AWS and Microsoft Azure overviews",
    "Cloud Computing Use Cases: Practical, real-world cloud applications in thriving businesses",
    "Cloud Career Paths: Multi-tier options and overview of typical roles in modern cloud engineering"
  ];

  currentY = 54;
  subItems1.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Module 2 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("2. Operating System & Linux Basics", 15, currentY);

  const subItems2 = [
    "Operating System Fundamentals: Exploring types, main functions, kernel structures, and architectures",
    "Introduction to Linux: Why Linux stands as the paramount choice in enterprise cloud computing",
    "Linux File System: In-depth directory structures, paths, standard locations, and system navigation",
    "Basic Linux Commands: Dynamic file handling, stream outputs, writing scripts, and command options",
    "User & Permission Management: Security groups, root administration, and permission parameters",
    "Process & Package Management: Starting system operations, systemctl controllers, and clean package updates",
    "Remote Server Connectivity: Configuring secure SSH links, private/public keys, and network connectivity"
  ];

  currentY += 6;
  subItems2.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Module 3 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("3. Networking Fundamentals", 15, currentY);

  const subItems3 = [
    "Introduction to Networking: Core network concepts, top topologies, and internet communication routes",
    "IP Addressing: Demystifying IPv4 layouts, subnet masks, gateways, and basics of IPv6 networks",
    "Domain Name System (DNS): Resolving domains, listing standard records (A, CNAME, TXT, MX) with ease",
    "HTTP & HTTPS Communication Protocols: Web sockets, secure handshakes, SSL certs, and REST routes",
    "Ports & Firewalls: Defining network communication boundaries, secure openings, and stateful blocks",
    "Load Balancing Concepts: Dynamic traffic distribution rules across scalable server pools",
    "Virtual Networks & VPC Core Concepts: Setting subnets, routing lists, and isolating modern enterprise networks"
  ];

  currentY += 6;
  subItems3.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });


  // ==================== PAGE 4: PHASE 1 CONTINUED ====================
  doc.addPage();
  drawPageShell(4, 9, "Phase 1: Azure, AWS & Cloud Security");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("PHASE 1 — CLOUD COMPUTING (CONTINUED)", 15, 30);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 33, 15, 0.8, "F");

  // Module 4 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("4. Microsoft Azure Fundamentals", 15, 42);

  const subItems4 = [
    "Introduction to Azure: Main platform structures, locations, cloud zones, and subscription models",
    "Azure Portal Navigation: Detailed resource management workflows and custom administration dashboarding",
    "Resource Management: Consolidating resource groups, configuring tags, and monitoring active allocations",
    "Compute Services: Booting and parameterizing Azure Virtual Machines (VM instances) safely",
    "Storage Services: Blob Storage models, clean file shares, and structured disk allocations for services",
    "Networking in Azure: Constructing isolated Virtual Networks (VNets), subnets, and Network Security Groups (NSGs)",
    "Identity & Access Management: Comprehensive Active Directory (Azure AD) basics and role mapping",
    "Azure Monitoring Tools: Using Azure Monitor, metrics alerts, and Log Analytics Workspace systems"
  ];

  currentY = 48;
  subItems4.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Module 5 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("5. AWS Cloud Computing", 15, currentY);

  const subItems5 = [
    "Introduction to AWS: Explaining global cloud architecture, core zones, edge networks, and services",
    "AWS IAM (Identity and Access Management): Creating user credentials, custom policies, and API keys",
    "Compute Services: Booting and deploying Amazon Elastic Compute Cloud (EC2 Virtual Machines) safely",
    "Storage Services: Simple Storage Service (AWS S3 static buckets), Elastic Block Store (EBS), and Elastic File System (EFS)",
    "Networking in AWS: Tailoring Virtual Private Clouds (VPC setup), route mappings, and Security Groups",
    "Database Services: Operating Relational Database Service (Amazon RDS) postgres & cluster configurations"
  ];

  currentY += 6;
  subItems5.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Module 6 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("6. Cloud Security Integration", 15, currentY);

  const subItems6 = [
    "Introduction to Cloud Security: Mitigating data risks, network threats, and establishing absolute perimeter defense",
    "Shared Responsibility Model: Delineating infrastructure responsibilities (Cloud Provider vs Customer obligations)",
    "AWS IAM & Azure AD Control: Utilizing strict Principle of Least Privilege, rotating access, and requiring MFA logs",
    "Authentication & Authorization: Implementing zero-trust layers, SSO setups, and OAuth boundary tokens",
    "Network Security Groups & Firewalls: Blocking malicious packets, isolating VPC subnets, and routing via VPNs",
    "Security Audits & Monitoring: Establishing alert logs, automated alerts, and detecting suspicious account operations"
  ];

  currentY += 6;
  subItems6.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });


  // ==================== PAGE 5: PHASE 1 CONTINUED 2 ====================
  doc.addPage();
  drawPageShell(5, 9, "Phase 1: Cloud Projects & Career Prep");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("PHASE 1 — PROJECTS & CAREER FOCUS", 15, 30);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 33, 15, 0.8, "F");

  // Module 7 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("7. Cloud Projects & Deployment Practice", 15, 42);

  const subItems7 = [
    "Static Website Hosting: Serving highly scalable, global client websites utilizing AWS S3 buckets",
    "Virtual Server Deployment: Launching, configuring, and scaling secure Linux EC2 system servers",
    "Azure VM Allocation Systems: Formulating and parameterizing resilient virtual servers inside MS Azure",
    "Cloud Architecture Design: Drafting detailed infrastructure blueprints using clean architecture tools",
    "Security Configuration Audit: Reviewing user IAM scopes to lock database access vectors and networks",
    "Hands-on Lab Environments: Navigating simulated cloud outage tasks and troubleshooting IP connections"
  ];

  currentY = 48;
  subItems7.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Module 8 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("8. Career Development Track", 15, currentY);

  const subItems8 = [
    "Introduction to Cloud Career Pathways: Level requirements, salary grids, and modern industry standards",
    "Technical Resume Workshop: Drafting focused, project-rich CV profiles targeting technical reviewers directly",
    "LinkedIn Optimization Blueprint: Forging clear professional profiles, setting headings, and gaining organic recruiters",
    "GitHub Portfolio Setup: Creating detailed README files, code repositories, and showcasing cloud setups as files",
    "Cloud Interview Preparation: Resolving real-world systems questions and scenario exercises",
    "Job Market Assessment: Assessing candidate readiness, application strategy, and targeting global vacancies"
  ];

  currentY += 6;
  subItems8.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });


  // ==================== PAGE 6: PHASE 2 START ====================
  doc.addPage();
  drawPageShell(6, 9, "Phase 2: DevOps Engineering (M1 - M3)");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("PHASE 2 — DEVOPS ENGINEERING SYLLABUS", 15, 30);
  doc.setFontSize(11);
  doc.setTextColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.text("DURATION: 3 MONTHS  |  AUTOMATION & ORCHESTRATION", 15, 36);

  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 39, 20, 1, "F");

  // Phase 2 Module 1 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("1. Introduction to DevOps", 15, 48);

  const p2Items1 = [
    "Overview of DevOps: Practical definitions, historical transitions, and crucial commercial impact",
    "DevOps Culture & Mindset: Eradicating legacy silos, building shared goals, and collaborative feedback loops",
    "DevOps Lifecycle Stages: Unified review of Planning, Coding, Building, Testing, Deploying, and Monitoring steps",
    "Continuous Integration / Continuous Delivery (CI/CD): Fundamental principles, pipelines, and velocity stats",
    "Agile Methodology & Software SDLC: Scrum framework, tracking tasks, sprints, and continuous feedback"
  ];

  currentY = 54;
  p2Items1.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Phase 2 Module 2 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("2. Version Control with Git & Github", 15, currentY);

  const p2Items2 = [
    "Introduction to Version Control: Centralized systems vs modern Distributed systems (Git architecture)",
    "Git Commands Masterclass: Standard tracking (init, status, add, commit, push, pull, log)",
    "Branching & Merging Strategies: Managing feature streams, resolving merge conflicts, and stashing changes",
    "Collaboration Ecosystems: Raising Pull Requests, conducting code reviews, and configuring webhooks",
    "GitHub Enterprise Usage: Running secure repository setups, organization boards, and environment keys"
  ];

  currentY += 6;
  p2Items2.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Phase 2 Module 3 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("3. Linux for DevOps Engineering", 15, currentY);

  const p2Items3 = [
    "Advanced Linux Systems: File structure permissions, system processes flags, and deep kernel configuration review",
    "Power Shell Navigation: Standard piping commands (grep, awk, sed), stream redirection, and background workers",
    "File System Security: Secure configurations, locked folders access (chown, chmod parameters, ACL)",
    "Process Management: Tracking CPU/RAM usage (top, ps, htop), system tasks control, and managing service logs",
    "Shell Scripting & Bash Automation: Script variables, looping checks, custom system cron jobs setups, and backups"
  ];

  currentY += 6;
  p2Items3.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });


  // ==================== PAGE 7: PHASE 2 CONTINUED ====================
  doc.addPage();
  drawPageShell(7, 9, "Phase 2: Docker, CI/CD, K8s & Terraform");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("PHASE 2 — DEVOPS AUTOMATION (CONTINUED)", 15, 30);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 33, 15, 0.8, "F");

  // Phase 2 Module 4 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("4. Docker & Containerization", 15, 41);

  const p2Items4 = [
    "Introduction to Containers: Containerization benefits, lightweight architecture vs Heavy VM platforms",
    "Docker Architecture Blueprint: Restful API, daemon operations, Images repository, and Container registry",
    "Docker Commands: Image manipulation, inspecting running logs, port forward configurations, volumes",
    "Writing Secure Dockerfiles: Designing minimal footprints with Multi-Stage builds & clean layering",
    "Orchestrating Multi-Containers: Scaling and linking microservice networks using Docker Compose templating",
    "Container Networking: Bridge interfaces, isolated network models, and persistent volume attachments"
  ];

  currentY = 47;
  p2Items4.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 7.5;
  });

  // Phase 2 Module 5 details
  currentY += 3;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("5. CI/CD Pipeline Development", 15, currentY);

  const p2Items5 = [
    "Introduction to CI/CD pipelines: Eliminating manual builds, continuous automated checks & safety tests",
    "Jenkins Pipeline Automation: Jenkins Master-Worker links, plugin structures, and credential controls",
    "GitHub Actions Ecosystem: Creating YAML manifests, action triggers, and running parallel steps",
    "Automated Deployment Workflows: Pushing builds from workspace directly, alerting platforms, and code reviews"
  ];

  currentY += 6;
  p2Items5.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 7.5;
  });

  // Phase 2 Module 6 details
  currentY += 3;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("6. Kubernetes & Container Orchestration", 15, currentY);

  const p2Items6 = [
    "Intro to Kubernetes: Orchestrating global container workloads, self-healing, and service discovery",
    "K8s Core Objects: Pod layouts, ReplicaSets, active Deployments structures, Services endpoints",
    "Declarative Configuration YAMLs: Drafting scalable K8s app specifications and applying configs easily",
    "Resource Storage & Scaling: Volume attachments (PV, PVC scopes), and dynamic pod autoscaling parameters"
  ];

  currentY += 6;
  p2Items6.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 7.5;
  });

  // Phase 2 Module 7 details
  currentY += 3;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("7. Infrastructure as Code (Terraform)", 15, currentY);

  const p2Items7 = [
    "Declaration vs Imperative Code: How Terraform dictates reliable, repeatable cloud cloud blueprints",
    "Terraform Syntax (HCL): Generating state providers, backend environments, and variables",
    "Terraform State Management: Controlling secure locks, backend configurations (AWS S3 with DynamoDB tables)",
    "Terraform Workflow Commands: Executing standard steps (init, plan, apply, destroy) without drift tasks",
    "Creating Reusable Modules: Standard parameters, output structures, and scalable modular code layouts"
  ];

  currentY += 6;
  p2Items7.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 7.5;
  });


  // ==================== PAGE 8: PHASE 2 CONTINUED 2 ====================
  doc.addPage();
  drawPageShell(8, 9, "Phase 2: Logging, Projects & Career");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("PHASE 2 — CAPST0NE PROJECTS & PLATFORMS", 15, 30);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 33, 15, 0.8, "F");

  // Phase 2 Module 8 details
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("8. Monitoring and Logging", 15, 42);

  const p2Items8 = [
    "Introduction to Monitoring: Continuous health evaluations, cluster resource metrics, and threshold alarms",
    "Logging Systems: Troubleshooting, log consolidation, tracking microservices exceptions with ease",
    "Prometheus & Grafana: Scraping metrics API, configuring alerts lines, and styling elegant visual dash dashboards"
  ];

  currentY = 48;
  p2Items8.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Phase 2 Module 9 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("9. DevOps Projects & Implementation", 15, currentY);

  const p2Items9 = [
    "Enterprise CI/CD Pipelines: Automatically compiling code, running tests, and upgrading AWS resources",
    "Dockerized Application Deployments: Building multi-tier web platforms and container networks",
    "Kubernetes Production Deployment: Bootstrapping reliable cluster sets with automatic scale rules",
    "Cloud Automation Labs: Launching unified network architectures securely via modular IaC Terraform"
  ];

  currentY += 6;
  p2Items9.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });

  // Phase 2 Module 10 details
  currentY += 4;
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("10. DevOps Career Development", 15, currentY);

  const p2Items10 = [
    "DevOps Career Roles: Expectations, salary ranges, and differences between DevOps, Cloud, and SRE pathways",
    "Advanced Portfolio Setup: Consolidating projects into clear structural files, blogging tutorials, and GitHub profiles",
    "DevOps Interview Preparation: Conducting mock scenarios, whiteboard tasks, and solving network cases",
    "Corporate Application Support: Optimizing resume words to unlock hiring channels and modern remote jobs"
  ];

  currentY += 6;
  p2Items10.forEach((item) => {
    drawBullet(18, currentY, item, 172);
    currentY += 8;
  });


  // ==================== PAGE 9: RECOMMENDED PATH & OUTCOME ====================
  doc.addPage();
  drawPageShell(9, 9, "Recommended Learning Path");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("RECOMMENDED PATHWAY & EXPECTED OUTCOMES", 15, 30);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 33, 15, 0.8, "F");

  // Learning path block
  doc.setFillColor(243, 244, 246);
  doc.roundedRect(15, 40, 180, 78, 3, 3, "F");

  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("RECOMMENDED ROADMAP", 22, 48);

  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const roadText1 = "For complete beginners, we strongly recommend starting with the Cloud Computing Engineering phase before moving into DevOps Engineering.";
  doc.text(roadText1, 22, 55, { maxWidth: 166 });

  doc.setFont("helvetica", "bold");
  doc.text("Why?", 22, 67);
  doc.setFont("helvetica", "normal");
  const roadText2 = "Because Cloud Computing helps you build crucial foundational knowledge. You will grasp Linux, networking, servers, basic security configurations, and directory setups thoroughly before diving into the complex automation of DevOps.";
  doc.text(roadText2, 22, 72, { maxWidth: 166 });

  const pathPoints = [
    "Provides a smoother transition curve.",
    "Reduces the cognitive load of learning many systems simultaneously.",
    "Significantly mirrors the production roles seen in top organizations."
  ];

  let pathY = 92;
  pathPoints.forEach((pt) => {
    drawBullet(25, pathY, pt, 160);
    pathY += 6.5;
  });

  // Expected outcome block
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("EXPECTED OUTCOME", 15, 130);
  doc.setFillColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.rect(15, 133, 15, 0.8, "F");

  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.text("By the end of this program, students should be able to:", 15, 141);

  const outcomes = [
    "Work confidently with professional Linux servers and write automated Bash cron scripts.",
    "Architect and secure Virtual Private Clouds (VPC setup) in AWS and VNets in Microsoft Azure.",
    "Deploy, inspect, and scale production systems on AWS cloud infrastructures with absolute security.",
    "Package application services into minimal footprint containers using Dockerfiles and scale with Compose.",
    "Deploy, scale, and manage microservices workloads in Kubernetes (K8s pods, deployments, replica systems).",
    "Design and provision multi-cloud environments from text files using IaC tools (Terraform modules).",
    "Build fully automated CI/CD pipelines (Jenkins, GitHub Actions) to run tests and push client services.",
    "Construct detailed monitoring indicators and elegant visual dashboards (Prometheus & Grafana logs).",
    "Build, maintain, and showcase production-grade cloud portfolios to recruiters worldwide."
  ];

  let outcomeY = 149;
  outcomes.forEach((oc) => {
    drawCheckboxItem(15, outcomeY, oc, 175);
    outcomeY += 9;
  });

  // Strategic encouraging footer
  doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.roundedRect(15, pageHeight - 44, 180, 24, 2, 2, "F");

  doc.setTextColor(white[0], white[1], white[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("ARE YOU READY TO SECURE YOUR TECH TRAJECTORY?", 20, pageHeight - 34);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(orangeColor[0], orangeColor[1], orangeColor[2]);
  doc.text("Enroll today at Your Techie Hub and join our support networks: info@yourtechiehub.com", 20, pageHeight - 29);

  // Save the document
  doc.save("YOUR_TECHIE_HUB_Cloud_DevOps_Syllabus.pdf");
}
