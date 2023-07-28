const Section = (props) => {
    const {children} = props

    return(
        <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
            {children}
        </section>
    )
}




export default function Interface() {
    return(
        <div className="flex flex-col items-center w-screen">
          
            <AboutSection/>
          
          
            <SkillsSection/>
          
          <Section>
            <h1>ProjectsSection</h1>
          </Section>
          <Section>
            <h1>ContactsSection</h1>
          </Section>
        </div>
    )
};

//===========================================================================

const AboutSection = () => {
    return(
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br/>
                <span className="bg-white px-1 italic">Abhay</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                I make Motivation video to demotivate others
                <br />
                Learn how to develop negative thoughts. 
            </p>
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
                Contact me
            </button>
        </Section>
    )
}

//  =========================================================================

const skills = [
    {
      title: "Threejs / React Three Fiber",
      level: 80,
    },
    {
      title: "React / React Native",
      level: 90,
    },
    {
      title: "Nodejs",
      level: 90,
    },
    {
      title: "Typescript",
      level: 60,
    },
    {
      title: "3D Modeling",
      level: 40,
    },
  ];
  const languages = [
    {
      title: "🇫🇷 French",
      level: 100,
    },
    {
      title: "🇺🇸 English",
      level: 80,
    },
    {
      title: "🇯🇵 Japanese",
      level: 20,
    },
  ];


const SkillsSection = () => {
    return(
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill,index) =>(
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-indigo-500 rounded-full" style={{width: `${skill.level}%`}}></div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className="mt-8 space-y-4">
                        {languages.map((lng,index) =>(
                            <div className="w-64" key={index}>
                                <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <div className="h-full bg-indigo-500 rounded-full" style={{width: `${lng.level}%`}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

//==============================================================================

// const SkillsSection = () => {
//     return(
        
//     )
// }


// const SkillsSection = () => {
//     return(
        
//     )
// }


