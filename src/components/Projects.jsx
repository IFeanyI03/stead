import ProjectsSlider from "./commons/ProjectSlider";
import land from "../assets/land.jpg"
import stead from "../assets/stead.jpg"
import farm from "../assets/farm.jpg"

const projectsData = [
    {
        id: 1,
        title: 'Stead Towers',
        imgSrc: stead,
        category: 'Stead Towers',
    },
    {
        id: 2,
        title: 'Coastal Defenses',
        imgSrc: land,
        category: 'Stead Land',
    },
    {
        id: 3,
        title: 'Green Farmlands',
        imgSrc: farm,
        category: 'Stead Farms',
    },
];

const statItems = [
    { value: '200+', label: 'Clients Served' },
    { value: '500+', label: 'Projects Completed' },
    { value: '30+', label: 'Sectors Covered' },
];


export const Projects = () => (
    <div className="w-[92.1875%] mt-[99px] h-[783.189px] flex items-center gap-12 flex-col">
        <p className="font-bold w-fit text-[40px]">Projects</p>
        <div className="flex flex-col w-full gap-12">
            <ProjectsSlider projectsData={projectsData} />
        </div>
        <div className="flex w-[79.24%] gap-8 justify-between text-center">
            {statItems.map(stat => (
                <div className="flex flex-col gap-2" key={stat.label}>
                    <p className="text-5xl font-bold">{stat.value}</p>
                    <p className="text-orange-500">{stat.label}</p>
                </div>
            ))}
        </div>
    </div>
)