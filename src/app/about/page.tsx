import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Samantha](https://backiee.com/static/wallpapers/1000x563/386745.jpg)

Hey there! I'm Khaled, a sophomore studying Computer Science and Engineering @UCONN. I've completed several hackathons including YQuantum 2024, Headstarter AI's Hiring Hackathon I & II, and Google's Gemini Gen AI Hackathon. Additionally, I have worked on many AI projects and dabbled in blockchain research. 
As I continue my journey in tech, I will be sharing my experiences, projects, and insights with you all on this blog!

See you soon,

Khaled`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Khaled and his tech adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Khaled and his tech adventures",
      images: [
        signOgImageUrl({
          title: "Khaled",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
