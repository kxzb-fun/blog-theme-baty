import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"posts">) => {
    const isPublishTimePassed =
        Date.now() >
        new Date(data.pubDate).getTime() - SITE.scheduledPostMargin;
    return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
