import type socialIcons from "@assets/sociallcos";

export type Site = {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage?: string;
    lightAndDarkMode: boolean;
    postPerPage: number;
    scheduledPostMargin: number;
};

export type Menu = {
    name: string,
    pageRef: string,
}

export type Hero = {
    title: string,
    secDes?: string,
    image?: string
}

export type HomePage = {
    recentLimit: number
}

export type SocialObjects = {
    name: keyof typeof socialIcons;
    href: string;
    active: boolean;
    linkTitle: string;
}[];