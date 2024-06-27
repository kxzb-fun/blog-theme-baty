import type { Site, Menu, Hero, HomePage } from "./types";

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

export const HOMEPAGE = {
    recentLimit: 10,
}