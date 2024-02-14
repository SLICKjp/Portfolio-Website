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
    daycare,
    threejs,
    //crd,
    gslab,
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
      name: "3D Portfolio",
      description:
        "A 3D portfolio website developed using React.Js, Three.Js, TailwindCSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link:"",
    },
    {
      name:"Saas Website Concept",
      description:
        "Website built using React Js",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image:saas,
      source_code_link: "https://github.com/SLICKjp/Saas-Webpage-Concept",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };