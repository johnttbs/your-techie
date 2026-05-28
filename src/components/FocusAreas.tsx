import React, { useState } from "react";
import { Cloud, Terminal, Cpu, CheckCircle2, Server, Eye, Settings, ShieldAlert, ArrowRight } from "lucide-react";

interface FocusTrack {
  name: string;
  provider: string;
  desc: string;
  subtopics: string[];
}

export default function FocusAreas() {
  const [activeTab, setActiveTab] = useState<"cloud" | "devops">("cloud");

  const cloudTracks: FocusTrack[] = [
    {
      name: "Amazon Web Services (AWS)",
      provider: "AWS",
      desc: "Comprehensive masterclass in building global-scale architectures on the world's leading cloud provider.",
      subtopics: [
        "EC2, Auto Scaling & Elastic Load Balancer (ELB)",
        "VPC Networking, Subnets & Routing Tables",
        "S3 Bucket Policies, IAM Roles & MFA Security",
        "Databases: RDS (Postgres/MySQL) & DynamoDB NoSQL",
        "AWS Route53 DNS & CloudFront CDN Integration"
      ]
    },
    {
      name: "Microsoft Azure",
      provider: "Azure",
      desc: "Acquire high-demand enterprise skills on Azure cloud, focusing on deployment automation and scaling services.",
      subtopics: [
        "Azure Virtual Machines & Virtual Networks",
        "Azure App Services & Serverless Functions",
        "Azure Active Directory (AD) & RBAC Permissions",
        "Azure SQL & Cosmos Database Provisioning",
        "Azure Monitor & Log Analytics insights"
      ]
    },
    {
      name: "Google Cloud Platform (GCP)",
      provider: "GCP",
      desc: "Learn to deploy cloud-native applications on Google Cloud and master modern containerized workloads.",
      subtopics: [
        "Google Compute Engine & VPC Networks",
        "Cloud Run (Serverless microservice deployment)",
        "Google Kubernetes Engine (GKE) Setup",
        "BigQuery Data Warehousing & IAM Bindings",
        "Cloud Storage & Operations Suite Logging"
      ]
    }
  ];

  const devopsTracks: FocusTrack[] = [
    {
      name: "Linux Administration & Bash",
      provider: "Core Linux",
      desc: "Master the operating system that runs 96% of the world's professional web and cloud servers.",
      subtopics: [
        "File System Navigation & Permission Audits (chmod/chown)",
        "Process Control, Package managers & Service checks",
        "Bash Automation Scripting, Variables & Functions",
        "Cron Scheduling, Log files rotation & System Health",
        "SSH Key pair setups and secure remote terminal logins"
      ]
    },
    {
      name: "CI/CD & Testing Automation",
      provider: "Automation",
      desc: "Build automated build pipelines that compile, test, and package code directly to staging environments.",
      subtopics: [
        "GitHub Actions pipelines & workflow triggers",
        "Jenkins installation, plugins & declarative pipelines",
        "Build management tools using Apache Maven & Gradle",
        "Integrating Automated Tests (Unit, Integration)",
        "Securing secrets in CI/CD variables & credentials"
      ]
    },
    {
      name: "Containers & Orchestrators",
      provider: "Containerization",
      desc: "Package isolated apps with Docker and run resilient microservice grids using Kubernetes.",
      subtopics: [
        "Writing streamlined, multi-stage Dockerfiles",
        "Docker Compose orchestration for multi-container apps",
        "Kubernetes clusters, Pods, Deployments & Services",
        "K8s ConfigMaps, Secrets, Ingress & Volume mounts",
        "Scaling pods dynamically in response to traffic load"
      ]
    },
    {
      name: "Monitoring & Infrastructure as Code",
      provider: "IaC & SRE",
      desc: "Define hardware as configuration files using Terraform and observe production clusters.",
      subtopics: [
        "Terraform Providers, Resources, Variables & Outputs",
        "Managing Terraform State safely in Remote Registries",
        "Infrastructure telemetry via Prometheus monitoring",
        "Creating beautifulGrafana dash diagrams for alerting",
        "Log aggregation with ELK (Elastic, Logstash, Kibana)"
      ]
    }
  ];

  const currentTracks = activeTab === "cloud" ? cloudTracks : devopsTracks;

  return (
    <section id="focus-areas" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative accent background lines */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <span>Our Curriculum Syllabus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Current Focus Areas
          </h2>
          <p className="text-white/70 mt-4 text-base md:text-lg leading-relaxed font-sans">
            Specialized in high-demand technical capabilities. Our dual-track core modules enable you to confidently architect cloud instances and operate production pipelines.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl max-w-lg mb-12 border border-white/10" id="focus-area-tabs">
          <button
            onClick={() => setActiveTab("cloud")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "cloud"
                ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/10"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cloud className="w-5 h-5 shrink-0" />
            <span>Cloud Computing</span>
          </button>
          <button
            onClick={() => setActiveTab("devops")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "devops"
                ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/10"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Terminal className="w-5 h-5 shrink-0" />
            <span>DevOps Engineering</span>
          </button>
        </div>

        {/* Render Track Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch" id="focus-track-list">
          {currentTracks.map((track, i) => (
            <div
              key={track.name}
              className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-brand-orange/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono uppercase bg-brand-orange/10 text-brand-orange border border-brand-orange/30 px-3 py-1 rounded-full font-bold tracking-wider">
                    {track.provider}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                    {activeTab === "cloud" ? <Cloud className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {track.name}
                </h3>
                
                {/* Desc */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {track.desc}
                </p>

                {/* Sublist of skill topics */}
                <div className="space-y-3.5 border-t border-white/10 pt-6">
                  <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase block mb-1">
                    What You Will Master:
                  </span>
                  {track.subtopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-white/80 text-xs sm:text-sm font-sans">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-brand-orange transition-colors">
                <span className="uppercase tracking-widest">Cohort Ready</span>
                <div className="flex items-center gap-1">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* Special side CTA / Info block inside the grid itself (fits perfectly in 3-column layout) */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange/70 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-xl min-h-[400px]">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full filter blur-xl pointer-events-none" />
            
            <div className="z-10">
              <span className="text-xs font-mono bg-black/20 text-white px-3 py-1 rounded-full font-bold tracking-wider uppercase inline-block mb-6">
                Community Driven
              </span>
              <h3 className="text-3xl font-black font-display tracking-tight leading-tight mb-4 text-white">
                Learn tech through local community synergy.
              </h3>
              <p className="text-white/90 text-sm leading-relaxed font-sans font-medium">
                We believe DevOps is more of an operating model than just tools. Your Techie Hub models actual engineering teams with sprint stand-ups, combined pipelines, and collaborative task delegation.
              </p>
            </div>

            <div className="z-10 pt-6 border-t border-white/25 flex items-center justify-between text-xs font-extrabold uppercase tracking-widest">
              <span>Cohort starts May 2026</span>
              <span>@yourtechiehub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
