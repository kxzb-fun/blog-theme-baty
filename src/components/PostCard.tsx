import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"posts">["data"];
}

export default function PostCard({ href, frontmatter }: Props) {
  const { title, pubDate, modDate, description } = frontmatter;

  return (
    <li>
      <a href={href}>
        <article>
          <h1>{title}</h1>
          <div class="content">
            {/* TODO */}
            <span>【{pubDate}】</span>
            {description}
          </div>
        </article>
      </a>
    </li>
  );
}
