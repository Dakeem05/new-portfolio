import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Globe, Mail, Phone, MapPin, Calendar, Building, Award, User, Code, Briefcase, GraduationCap, Star, ChevronDown, ExternalLink, Twitter, Facebook, Disc, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  // Add custom CSS for animations
  useEffect(() => {
    setMounted(true);
    
    // Add custom animations to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const downloadCV = () => {
    const cvUrl = "/Edidiong_Samuel_Resume.pdf";  
  
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Edidiong_Samuel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const skills = [
    { name: 'Solidity', level: 95, category: 'Blockchain' },
    { name: 'Laravel', level: 98, category: 'Backend' },
    { name: 'PHP', level: 95, category: 'Backend' },
    { name: 'Vue.js', level: 80, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'Foundry', level: 85, category: 'Blockchain' },
    { name: 'React.js', level: 70, category: 'Frontend' },
    { name: 'Node.js', level: 60, category: 'Backend' },
    { name: 'Web3.js', level: 80, category: 'Blockchain' },
    { name: 'AWS', level: 40, category: 'DevOps' }
  ];

  const experiences = [
    {
      company: 'TransactX',
      role: 'Backend Engineer (Laravel API)',
      period: 'April 2025 - June 2025',
      location: 'Lagos, Nigeria',
      type: 'Contract',
      achievements: [
        'Developed core banking API for 50,000+ users with 99.9% reliability',
        'Implemented PSD2-compliant integrations with banks and payment gateways',
        'Optimized API response times by 40% through Redis caching',
        'Reduced manual processing errors by 65% through automation'
      ],
      tech: ['Laravel', 'MySQL', 'Redis', 'JWT/OAuth2']
    },
    {
      company: 'Tekinni',
      role: 'Senior Full-Stack Developer',
      period: 'January 2025 - March 2025',
      location: 'Remote',
      type: 'Contract',
      achievements: [
        'Built high-performance eCommerce backend with 99.9% uptime',
        'Increased mobile conversions by 30% with Vue.js frontend',
        'Reduced deployment downtime by 50% with CI/CD pipelines',
        'Integrated multi-vendor support and real-time analytics'
      ],
      tech: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS']
    },
    {
      company: 'VestPad',
      role: 'Blockchain Engineer',
      period: 'August 2024 - December 2024',
      location: 'Remote',
      type: 'Contract',
      achievements: [
        'Designed decentralized launchpad using Solidity',
        'Developed on-chain and off-chain data pipelines',
        'Integrated The Graph for custom subgraphs',
        'Achieved 99.8% accuracy in blockchain data reporting'
      ],
      tech: ['Solidity', 'Web3.js', 'Node.js', 'The Graph', 'PostgreSQL']
    },
    {
      company: 'Swap2Naira',
      role: 'Software Engineer',
      period: 'June 2024 - December 2024',
      location: 'London, UK',
      type: 'Contract',
      achievements: [
        'Managed 20,000 daily transactions with 99.9% uptime',
        'Increased mobile usage by 30% with React.js frontend',
        'Decreased deployment downtime by 50% with CI/CD'
      ],
      tech: ['Laravel', 'React.js', 'TypeScript', 'MySQL']
    }
  ];

  const projects = [
    {
      name: 'TransactX Banking Platform',
      description: 'Fintech API serving 50K+ users with P2P transfers, bill payments, and real-time fraud detection',
      tech: ['Laravel', 'Redis', 'MySQL', 'OAuth2'],
      metrics: '99.9% uptime, 40% faster response times'
    },
    {
      name: 'VestPad Launchpad',
      description: 'Decentralized token launchpad with smart contracts and real-time analytics dashboard',
      tech: ['Solidity', 'Web3.js', 'The Graph', 'Node.js'],
      metrics: '99.8% data accuracy, Custom subgraphs'
    },
    {
      name: 'Tekinni eCommerce',
      description: 'High-performance eCommerce platform with multi-vendor support and real-time inventory',
      tech: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind'],
      metrics: '30% mobile conversion increase'
    }
  ];

  if (!mounted) {
    return <div className="min-h-screen bg-slate-900" />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-slate-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
      </button>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse ${darkMode ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse delay-1000 ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-2xl animate-bounce ${darkMode ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto pt-[5rem] lg:pt-0 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center lg:justify-end order-1">
              <div className="relative group">
                {/* Animated rings around image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-spin-slow">
                  <div className={`w-full h-full rounded-full ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
                  <div className={`w-full h-full rounded-full ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}></div>
                </div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/profile.webp" 
                    alt="Edidiong Samuel" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce delay-500">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping delay-300"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left order-2">
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${darkMode ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-purple-100 border border-purple-200'} backdrop-blur-sm`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Full-Stack & Blockchain Engineer</span>
              </div>
              
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Edidiong
                </span>
                <br />
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Samuel</span>
              </h1>
              
              <p className={`text-lg md:text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Building the future with <span className="text-purple-400 font-semibold">Laravel</span>, 
                <span className="text-blue-400 font-semibold"> Solidity</span>, and 
                <span className="text-pink-400 font-semibold"> Modern Web Technologies</span>
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-700 shadow-sm'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  5+ Years Experience
                </span>
                <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-700 shadow-sm'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  50K+ Users Served
                </span>
                <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-700 shadow-sm'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  99.9% Uptime
                </span>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={downloadCV}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <a
                  href="#contact"
                  className={`flex items-center gap-2 px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10' : 'border-purple-500 text-purple-600 hover:bg-purple-50'}`}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <ChevronDown className={`absolute bottom-8 w-8 h-8 animate-bounce ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </section>

      {/* About Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Personal Photo Section */}
            {/* <div className="flex justify-center">
              <div className="relative group">
                Glowing background effect
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-2xl blur-xl animate-pulse"></div>
                
                Photo container
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  
                  <img 
                    src="/profile.png" 
                    alt="Edidiong Samuel" 
                    className="w-full h-full object-cover"
                  />
                </div>

                Decorative elements
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div> */}

            {/* About Content */}
            <div className="lg:col-span-2">
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full-Stack Engineer with over 5 years of experience, specializing in Laravel (PHP) for building robust and scalable backend systems. Skilled in API development, database management, and implementing complex business logic.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                As a seasoned Blockchain Developer, I have extensive experience in Solidity smart contract development, testing, and auditing on EVM-based platforms, utilizing Foundry for robust contract creation and verification.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={skill.name} className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 text-center`}>
                    <h4 className={`font-semibold mb-2 text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h4>
                    <div className={`w-full h-2 rounded-full mb-2 ${darkMode ? 'bg-slate-600' : 'bg-gray-200'}`}>
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.level}%</span>
                  </div>
                ))}
              </div>

              {/* Specializations */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Backend Focus</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Laravel, PHP, API Development</p>
                </div>
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Blockchain</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Solidity, Foundry, Web3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Work <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative p-8 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className="text-purple-400 text-xl font-semibold mb-2">{exp.company}</p>
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${darkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                    {skill.category}
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full mb-2 ${darkMode ? 'bg-slate-600' : 'bg-gray-200'}`}>
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2`}>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className={`text-sm font-semibold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {project.metrics}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to build something amazing together? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:edidiongsamuel14@gmail.com" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Mail className="w-6 h-6 text-purple-400" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</span>
            </a>
            <a href="tel:+2347042221248" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Phone className="w-6 h-6 text-blue-400" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</span>
            </a>
            <a href="https://www.linkedin.com/in/edidiong-samuel-ng" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Linkedin className="w-6 h-6 text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</span>
            </a>
            <a href="https://github.com/Dakeem05" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Github className="w-6 h-6 text-gray-400" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</span>
            </a>
            <a href="https://twitter.com/dakeem_ng" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Twitter className="w-6 h-6 text-gray-400" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>X (Twitter)</span>
            </a>
            <a href="https://web.facebook.com/DaCodes.ng/" className={`flex items-center justify-center gap-3 p-6 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:border-purple-500/50 transition-all duration-300 group`}>
              <Facebook className="w-6 h-6 text-gray-400" />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Edidiong Samuel. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;