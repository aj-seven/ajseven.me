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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
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

      {/* Post List (Limited to 2 on Homepage) */}
      <div className="space-y-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
          >
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                  {post.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </div>
              {post.description && (
                <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>

            {post.date && (
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-medium text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/20 whitespace-nowrap flex-shrink-0 self-start sm:self-center transition-colors">
                {post.date}
              </span>
            )}
          </a>
        ))}

        {posts.length === 0 && (
          <div className="text-zinc-500 py-8 text-center border border-dashed border-white/10 rounded-2xl text-xs flex items-center justify-center gap-2">
            <BookOpen size={14} className="text-zinc-500" />
            <span>No writings published yet. Check back soon.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
