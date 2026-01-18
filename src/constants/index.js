import {
    mobile,
    backend,
    //creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    portfolio,
    saas,
    Prishtvik,
    daycare,
    threejs,
    Stayfit,
    gslab,
    StudioNivvani,
    Eyedetect,
    freelance
    //crd,
    //getstech,
    //sustanix,
   // zypher,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
     {
      title: "Software Engineer ",
      company_name: "Freelance",
      icon:freelance,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Designed and developed responsive, production-ready websites for clients across architecture, fitness, SaaS, and AI domains.",
        "Collaborated directly with clients to gather requirements, translate business needs into clean UI/UX, and deliver scalable frontend solutions.",
        "Built modern web interfaces using React.js, Tailwind CSS, and custom CSS, focusing on performance, accessibility, and maintainability.",
        "Deployed and maintained client websites, handling hosting, domain configuration, and post-launch support.",
        "Delivered projects end-to-end within deadlines, ensuring high client satisfaction and repeat engagements."

        ],
    },
    {
      title: "Software Engineer ",
      company_name: "Great Software Labratory",
      icon: gslab,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - January 2024",
      points: [
        "Facilitated intuitive data entry for employees through a Custom Webex Bot, ensuring seamless form submissions & enhanced workflow",
        "Developed Java application in Spring Boot & MS-SQL for seamless data persistence, resulting in heightened database connectivity & improved retrieval accuracy by 15%",
        "Integrated JPA for streamlined interaction with the database, contributing to more efficient processes &  20% reduction in data retrieval latency.",
        "Implemented Feign Client for Webex API calls, streamlining external data interactions & optimizing application performance by 10%.",
        "Enhanced user experience by integrating Microsoft Adaptive Cards, elevating the Java application's interface with modern design."

        ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Great Software Labratory",
      icon: gslab,
      iconBg: "#383E56",
      date: "May 2022 - Nov 2022",
      points: [
        "Integrated Tray.io for seamless email digest & analytics retrieval, improving user understanding of third-party service data",
        "Facilitated user engagement with Tray.io, providing real-time analytics insights, leading to  25% increase in data utilization",
        "Created an intuitive Email Digest User Interface, enhancing user interaction & increasing website engagement by 25%",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jathin is highly skilled and experienced in web development. He has a deep understanding of web technologies and is always up-to-date on the latest trends.",
      name: "Kshitij Verma",
      designation: "SDE",
      company: "Amazon",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jathin does.",
      name:"Umang Pachaury",
      designation: "SDE",
      company: "Gs Lab",
    },
    {
      testimonial:
        "Jathin is a pleasure to work with. He is always responsive to our feedback and is always willing to help us understand the technical aspects of our projects.!",
      name: "Sutiksh Verma",
      designation: "Data Scientist",
      company: "Salesforce",
    },
  ];
  
  const projects = [
    {
      name:"Studio Nivvani",
      description:
        "Designed and developed a modern, responsive website for an architect/interior design client to showcase projects, services, and brand identity. Focused on clean UI, smooth navigation",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image:StudioNivvani,
      source_code_link:"https://studionivvani.com",
    },
    
    {
      name:"EyeDetect AI",
      description:
        "Built a web platform for EyeDetect AI to present AI-powered eye analysis solutions, focusing on clear product communication, modern UI, and smooth user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",  
          color: "green-text-gradient",
        },
      ],
      image:Eyedetect,
      source_code_link:"https://eyedetectai.com",
    },
    {
      name:"Prishtvik",
      description:
        "Website built for Client using React JS",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image:Prishtvik,
      source_code_link:"https://pisplindia.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "A 3D portfolio website developed using React.Js, Three.Js, TailwindCSS.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link:"https://portfolio-website-five-sable-75.vercel.app/",
    },
    {
      name:"Stayfit",
      description:
        "Gym interface built for Client using React JS",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image:Stayfit,
      source_code_link:"https://mbahub.co.in/Stayfit/StayFit/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };