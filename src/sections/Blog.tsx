import { ArrowUpRight, BookOpen } from "lucide-react";

export interface BlogPostSummary {
  slug: string;
  title: string;
  description?: string;
  date?: string;
}

interface Props {
  posts: BlogPostSummary[];
}

const Blog = ({ posts }: Props) => {
  return (
    <div className="w-full text-left space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-white/5 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Writings
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Technical deep dives, system design, and engineering reflections.
          </p>
        </div>

        <a
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors group self-start sm:self-auto"
        >
          View all writings
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Writings Ledger (Zero Card Boxes) */}
      <div className="divide-y divide-white/5">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="py-4 first:pt-1 last:pb-1 group block transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>
                {post.description && (
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal line-clamp-2 max-w-2xl">
                    {post.description}
                  </p>
                )}
              </div>

              {post.date && (
                <span className="font-mono text-xs text-zinc-500 shrink-0 self-start sm:self-auto group-hover:text-zinc-400 transition-colors">
                  {post.date}
                </span>
              )}
            </div>
          </a>
        ))}

        {posts.length === 0 && (
          <div className="text-zinc-500 py-6 text-center text-xs flex items-center justify-center gap-2">
            <BookOpen size={14} className="text-zinc-600" />
            <span>No writings published yet. Check back soon.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
