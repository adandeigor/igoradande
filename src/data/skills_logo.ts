interface Skill{
    alt : string,
    src : string
}
const srcUrl = (alt:string)=>{
    return `/svg/${alt}-svgrepo-com.svg`
}
const Skills:Skill[] = [
    {
        alt : "Bootstrap",
        src : srcUrl("bootstrap")
    },
    {
        alt : "CSS",
        src : srcUrl("css-3")
    },
    {
        alt : "Figma",
        src : srcUrl("figma")
    },
    {
        alt : "Firebase",
        src : srcUrl("firebase")
    },
    {
        alt : "Github",
        src : srcUrl("github")
    },
    {
        alt : "HTML",
        src : srcUrl("html-5")
    },
    {
        alt : "JavaScrpit",
        src : srcUrl("js")
    },
    {
        alt : "Laravel",
        src : srcUrl("laravel")
    },
    {
        alt : "Next Js",
        src : srcUrl("next-js")
    },
    {
        alt : "PHP",
        src : srcUrl("php")
    },
    {
        alt : "Python",
        src : srcUrl("python")
    },
    {
        alt : "React",
        src : srcUrl("react")
    },
    {
        alt : "Tailwind",
        src : srcUrl("tailwind")
    },
    {
        alt : "Typescript",
        src : srcUrl("typescript")
    },
    {
        alt : "Vercel",
        src : srcUrl("vercel")
    }
]

export {Skills}