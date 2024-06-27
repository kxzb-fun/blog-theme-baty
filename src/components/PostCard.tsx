import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"posts">["data"];
}

export default function PostCard({ href, frontmatter }: Props) {
  const { title, pubDate, modDate, description } = frontmatter;

  return (
    <article class="border max-w-3xl mt-8 pb-4 shadow-lg rounded-sm">
      <header class="bg-[#fbfbfc] py-4 px-8 border-b-2 border-b-[#edf0f3]">
        <h2 class="text-[1.7rem] font-semibold	">{title}</h2>
      </header>
      <div class="m-8">
        <p class="text-[#415462] text-base">{description}</p>
        {/* TODO pubDate */}
        <div class="mt-4 text-[#777]">2024-06-26</div>
      </div>
    </article>
  );
}
