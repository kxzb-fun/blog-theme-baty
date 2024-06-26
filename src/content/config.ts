// 定义其博客文章中使用的所有 frontmatter 属性
// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        modDate: z.date().optional().nullable(),
        featured: z.boolean().optional(),
        draft: z.boolean().optional(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
});
// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
    posts: postsCollection,
};