
interface RouteProps {
    text: string;
    href: string;
    color?: string;
    icon?: string;
}


interface NavbarProps {
    text: string;
    href: string;
}

export const NavbarContent:NavbarProps [] = [
    {
        text: "Experiencia",
        href: "/experience",
    },
    {
        text: "Proyectos",
        href: "/projects",
    },
    {
        text: "Mas",
        href: "/sobremi",
    },
]

export const sideBarRoutes:RouteProps [] = [
    {
        text: "Joni Fernandez",
        href: "/",
    },
    {
        text: "Experiencia",
        href: "/experience",
    },
    {
        text: "Proyectos",
        href: "/Proyectos",
    },
    {
        text: "Desarrollo",
        href: "/development",
    },
    {
        text: "Seguridad",
        href: "/security",
        color: "red"
    },
    {
        text: "Referentes",
        href: "/Referentes",
    },
    {
        text: "Fotografía y video",
        href: "/photography",
    },
    {
        text: "Modelado 3D",
        href: "/designthreed",
    },
    {
        text: "Tutoriales",
        href: "/tutorials",
    },
    {
        text: "My Blog",
        href: "/blog",
    },
]