import { abilities, skills } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
  <div id="skills" className="w-full padding-x-lg">
    <TitleHeader
      title="✨ My Skills ✨"/>

    <div className="flex flex-wrap justify-center mb-10">
      {skills.map(({name,imgPath, i}) => (
        <div key={i} className="bg-black-50 rounded-md sm:w-[170px] w-[150px] py-4 px-3 m-2 font-bold flex items-center">
          <img src={imgPath} alt="" className="size-5 sm:size-7 mr-2"/>
          <p className="text-[14px] sm:text-[17px]">{name}</p>
        </div>
      ))}
    </div>
    
    <div className="mx-auto grid-4-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;