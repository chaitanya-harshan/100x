import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <>
    <AppBar />
    <div className="flex flex-col items-center">
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
    </div>;
    </>
  }

  return (
    <>
      <AppBar />
      <div className="flex flex-col items-center">
        {blogs.map((blog) => (
          <BlogCard
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="Dec 24th, 2025"
            id={blog.id}
          />
        ))}
      </div>
    </>
  );
};









{/* <BlogCard
  authorName="Elon Musk"
  title="AI and the Future of Work: Beyond Human Labor with the advent of Physical AI"
  content="The relentless march of artificial intelligence is not a distant sci-fi trope; it's the defining reality of our generation. As algorithms and automated systems increasingly take over routine tasks, the very definition of 'work' is being reshaped. This isn't a harbinger of obsolescence, but a call to evolution. We must pivot from the manual and repetitive to roles that amplify uniquely human capabilities: creativity, critical thinking, and emotional intelligence. The future isn't a world without human labor, but one where our labor is elevated, focusing on innovation, strategy, and human-to-human connection. The challenge lies not in competing with AI, but in collaborating with it, forging a new paradigm of productivity and purpose that was previously unimaginable."
  publishedDate="Dec 24th, 2025"
/>
<BlogCard
  authorName="Jane Goodall"
  title="The Silent Language of the Wild: What Animals Teach Us About Connection"
  content="For decades, I have lived among the chimpanzees, and they have shown me a world of complex social structures and deep emotional bonds. The silent language of the wild is a powerful reminder that we are not separate from nature, but an intrinsic part of it. By listening closely to the whispers of the animal kingdom, we can rediscover our own capacity for empathy, community, and a profound connection to the planet we all call home."
  publishedDate="Jan 15th, 2024"
/>
<BlogCard
  authorName="Neil deGrasse Tyson"
  title="Cosmic Perspectives: Why Exploring Space Matters for Humanity's Future"
  content="The drive to explore the cosmos is not mere curiosity; it is a fundamental aspect of the human spirit. Every mission to another planet, every telescope peering into the distant galaxies, expands our understanding of our place in the universe. It provides perspective, humbling us with the vastness of space while inspiring us with the potential of human ingenuity. Investing in space exploration is investing in our future."
  publishedDate="Feb 28th, 2024"
/>
<BlogCard
  authorName="Brené Brown"
  title="The Power of Vulnerability: Daring Greatly in a World of Uncertainty"
  content="Vulnerability is not weakness; it's our most accurate measure of courage. In a culture that often equates vulnerability with being fragile, we've lost sight of its true meaning. To be vulnerable is to show up and be seen when we have no control over the outcome. It's about having the courage to be imperfect. Daring greatly is not about winning or losing. It's about courage."
  publishedDate="Mar 10th, 2024"
/> */}