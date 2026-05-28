import React, { useState } from "react";
import { Terminal, Code2, PlayCircle, Cloud, Boxes, Settings, Calendar, Plus, Minus, Download, ChevronDown } from "lucide-react";

interface SyllabusCard {
  title: string;
  category: string;
  icon: React.ReactNode;
  duration: string;
  items: string[];
  skills: string[];
}

export default function SyllabusScheduler({ onDownloadSyllabus }: { onDownloadSyllabus: () => void }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const modules: SyllabusCard[] = [
    {
      title: "Introduction to DevOps & Linux",
      category: "Module 1",
      icon: <Terminal className="w-5 h-5" />,
      duration: "Week 1-3",
      items: [
        "Introduction to Linux Operating System & architecture",
        "Setting up Virtual Machines (Hypervisors & OS installers)",
        "Linux Fundamentals and file system commands (navigation, permissions)",
        "Version Control with Git & GitHub branching workflows",
        "Bash Scripting: automating backup scripts and local tasks"
      ],
      skills: ["Linux CLI", "Bash Scripting", "Git", "GitHub Flow"]
    },
    {
      title: "Python Automation",
      category: "Module 2",
      icon: <Code2 className="w-5 h-5" />,
      duration: "Week 4-5",
      items: [
        "Introduction to Python programming language and IDE setups",
        "Basic Python syntax, control structures, and condition checks",
        "Working with data structures: Lists, Dictionaries, and Tuples",
        "Writing reusable Functions, custom modules, and handling files",
        "Python automation scripts for parsing logs and connecting APIs"
      ],
      skills: ["Python", "Scripting", "Log Analytics", "API Integrations"]
    },
    {
      title: "CI/CD with Maven & Jenkins",
      category: "Module 3",
      icon: <PlayCircle className="w-5 h-5" />,
      duration: "Week 6-8",
      items: [
        "Core Concepts of Continuous Integration & Continuous Delivery (CI/CD)",
        "Introduction to Maven & Gradle build lifecycle management",
        "Jenkins Master-Agent installation, setup, and safe configurations",
        "Integrating Jenkins pipelines with AWS cloud credentials",
        "Writing declarative Jenkins Pipelines-as-a-Code using Groovy syntax"
      ],
      skills: ["Jenkins", "Groovy DSL", "Maven", "CI/CD Pipelines"]
    },
    {
      title: "Core AWS Cloud Services",
      category: "Module 4",
      icon: <Cloud className="w-5 h-5" />,
      duration: "Week 9-11",
      items: [
        "Deep dive into Cloud Storage Services: EBS volumes, EFS, and S3 systems",
        "Advanced Cloud Networking: creating VPCs, Subnets, and Gateways from scratch",
        "High availability setups: Elastic Load Balancers (ELB) and Auto Scaling Group (ASG)",
        "Relational & NoSQL Databases: RDS postgres instances, Aurora clustering & DynamoDB",
        "AWS IAM Security Policies, credentials rotations, and AWS CLI configurations"
      ],
      skills: ["AWS Solution Architect", "EBS/S3 Storage", "VPCS", "ASG Setup"]
    },
    {
      title: "Microservices & Containerization",
      category: "Module 5",
      icon: <Boxes className="w-5 h-5" />,
      duration: "Week 12-14",
      items: [
        "The shift from Monolithic servers to microservice structures",
        "Docker architecture & Containerization core principles",
        "Writing streamlined, multi-stage, secure Dockerfiles",
        "Configuring multi-container applications using Docker Compose templates",
        "Kubernetes clusters orchestration: deploying pods, replica sets, and load services"
      ],
      skills: ["Docker Engine", "Docker Compose", "Kubernetes (K8s)", "Pod Scaling"]
    },
    {
      title: "Infrastructure as Code (IaC) with Terraform",
      category: "Module 6",
      icon: <Settings className="w-5 h-5" />,
      duration: "Week 15-18",
      items: [
        "Infrastructure as Code principles & declarative versus imperative layouts",
        "Writing Terraform Configuration Language (.tf structures)",
        "Remote Terraform state management, state locks, and backends",
        "Core Terraform commands (init, plan, apply, destroy)",
        "Creating modular scripts: parameters, outputs, and variable definitions"
      ],
      skills: ["Terraform (IaC)", "State S3 Backend", "Declarative HCL", "Multi-cloud Setup"]
    }
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="syllabus" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full font-bold uppercase inline-block mb-4">
              Our DevOps Course Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight text-brand-navy">
              DevOps Course Schedule
            </h2>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              A comprehensive curriculum designed to take you from a tech enthusiast to a certified, role-ready DevOps Engineer.
            </p>
          </div>
          <button
            onClick={onDownloadSyllabus}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-navy hover:bg-brand-navy/95 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95"
          >
            <Download className="w-4 h-4 text-brand-orange" />
            <span>Download PDF Syllabus</span>
          </button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" id="course-schedule-grid">
          {modules.map((m, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={m.title}
                className={`bg-white border rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isExpanded
                    ? "border-brand-orange ring-1 ring-brand-orange/20 shadow-xl"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
                }`}
                onClick={() => toggleExpand(idx)}
              >
                <div>
                  {/* Category + Duration info */}
                  <div className="flex justify-between items-center mb-5 select-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/5 px-2.5 py-1 rounded-full border border-brand-orange/15 font-mono">
                      {m.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      {m.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex gap-4 items-start mb-4">
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                      isExpanded ? "bg-brand-orange text-white" : "bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
                    }`}>
                      {m.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-navy leading-snug group-hover:text-brand-orange transition-colors font-display">
                      {m.title}
                    </h3>
                  </div>

                  {/* Highlight skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {m.skills.map((sk) => (
                      <span key={sk} className="text-[9px] font-medium font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200/50">
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Bullet outline points */}
                  <div className={`overflow-hidden transition-all duration-300 space-y-2.5 pt-4 border-t border-gray-50 ${
                    isExpanded ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    {m.items.map((line, lineI) => (
                      <div key={lineI} className="flex items-start gap-2.5 text-xs font-sans text-gray-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Toggle Control label */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-orange transition-colors">
                  <span>{isExpanded ? "Click to Close" : "Explore Curriculum"}</span>
                  <div className={`w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
