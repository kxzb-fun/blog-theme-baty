import type { Site, Menu, Hero, HomePage, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://kxzb.fun/", // replace this with your deployed domain
    author: "kxzb.fun",
    desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
    title: "MyBlog",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerPage: 3,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const MENUS: Menu[] = [
    {
        name: "Home",
        pageRef: "/",
    },
    {
        name: "Posts",
        pageRef: "/posts",
    },
    {
        name: "Journal",
        pageRef: "/journal",
    },
    {
        name: "About",
        pageRef: "/about",
    },
    {
        name: "More",
        pageRef: "/more",
    }
]

export const HERO: Hero = {
    title: "kxzb",
    secDes: "",
    image: ""
}

export const HOMEPAGE: HomePage = {
    recentLimit: 10,
}

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://kxzb.fun",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://kxzb.fun",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "Twitter",
        href: "https://kxzb.fun",
        linkTitle: `${SITE.title} on Twitter`,
        active: true,
    }
];