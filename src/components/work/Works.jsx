import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { projectsData } from './data';
import { projectsNav } from './data';
import WorkItems from './WorkItems';
import Aos from 'aos';

const Works = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() =>{
        if(item.name === "all") {
            setProjects(projectsData);
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;

            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase() });
        setActive(index);
    }
    return (
       <div>
             <div className="work_filters">
                {projectsNav.map((item, index) =>{
                    return (
                        <span 
                        onClick={(e) => {
                            handleClick(e, index);
                        }} 
                        className={`${active === index ? 'active-link' : '' }
                        work_item`} 
                        key={index}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>

        <div  data-aos="flip-left"
        
        data-aos-easing="ease-out-cubic" className="work_container" container grid>
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
       </div>

    )
}

export default Works