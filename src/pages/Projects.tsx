import React, { useEffect, useState } from 'react';
import { FaAngular, FaAws, FaDatabase, FaDocker, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import { SiArgo, SiAwsamplify, SiCss3, SiFirebase, SiHtml5, SiJquery, SiMaterialdesign, SiMongodb, SiPostgresql, SiRubyonrails, SiTerraform } from 'react-icons/si';
import Card from '../components/Card';
import '../components/Card.css';
import CardGrid from '../components/CardGrid';
import { getProjects } from '../queries/getProjects';
import { Project } from '../types';
import './Projects.css';

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <CardGrid>
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image.url}
            title={project.title}
            description={project.description}
            style={{ ['--delay' as any]: `${index * 0.1}s` }}
          >
            <div className="tech-used">
              {project.techUsed.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">
                  {techIcons[tech] || "🔧"} {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
};

export default Projects;
