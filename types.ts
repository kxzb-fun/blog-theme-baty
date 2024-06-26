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