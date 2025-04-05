import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Code, Palette, Cloud, Brain, Database, Globe, Shield, Github } from "lucide-react"

export default function ToolsPage() {
  // Tools categories and items
  const toolsCategories = [
    {
      id: "compilers",
      title: "Online Compilers & IDEs",
      icon: <Code className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "CodeSandbox",
          description: "Online code editor for web development with instant previews.",
          url: "https://codesandbox.io/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Replit",
          description: "Collaborative browser-based IDE supporting 50+ programming languages.",
          url: "https://replit.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "CodePen",
          description: "Social development environment for front-end designers and developers.",
          url: "https://codepen.io/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "StackBlitz",
          description: "Online IDE for web applications powered by Visual Studio Code.",
          url: "https://stackblitz.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "api",
      title: "API Documentation & Libraries",
      icon: <Globe className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "Postman",
          description: "API platform for building and using APIs with collaborative features.",
          url: "https://www.postman.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Swagger",
          description: "API documentation and design tools for teams.",
          url: "https://swagger.io/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "RapidAPI",
          description: "API marketplace with thousands of public APIs to integrate into your projects.",
          url: "https://rapidapi.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Public APIs",
          description: "A collective list of free APIs for use in software and web development.",
          url: "https://github.com/public-apis/public-apis",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "design",
      title: "Free Design & UI/UX Tools",
      icon: <Palette className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "Figma",
          description: "Collaborative interface design tool with powerful features.",
          url: "https://www.figma.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Canva",
          description: "Graphic design platform for creating social media graphics, presentations, and more.",
          url: "https://www.canva.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Unsplash",
          description: "Beautiful, free images and photos for your projects.",
          url: "https://unsplash.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Coolors",
          description: "Color schemes generator for designers and artists.",
          url: "https://coolors.co/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Services & Hosting Platforms",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "Vercel",
          description: "Platform for frontend frameworks and static sites with global CDN.",
          url: "https://vercel.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Netlify",
          description: "Web hosting and automation platform for modern web projects.",
          url: "https://www.netlify.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Firebase",
          description: "App development platform with tools for building, improving, and growing your app.",
          url: "https://firebase.google.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Heroku",
          description: "Cloud platform that lets you build, deliver, monitor and scale apps.",
          url: "https://www.heroku.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning Sandboxes",
      icon: <Brain className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "Google Colab",
          description: "Free Jupyter notebook environment that runs in the cloud with GPU support.",
          url: "https://colab.research.google.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Kaggle",
          description: "Platform for data science competitions, notebooks, and datasets.",
          url: "https://www.kaggle.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Hugging Face",
          description: "AI community building the future of machine learning with open source.",
          url: "https://huggingface.co/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "TensorFlow Playground",
          description: "Interactive visualization of neural networks, with no setup required.",
          url: "https://playground.tensorflow.org/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "databases",
      title: "Database Tools & Resources",
      icon: <Database className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "MongoDB Atlas",
          description: "Multi-cloud database service for MongoDB with free tier.",
          url: "https://www.mongodb.com/cloud/atlas",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Supabase",
          description: "Open source Firebase alternative with PostgreSQL database.",
          url: "https://supabase.io/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "DB-Fiddle",
          description: "Online SQL database playground for testing and sharing SQL queries.",
          url: "https://www.db-fiddle.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Redis",
          description: "In-memory data structure store used as database, cache, and message broker.",
          url: "https://redis.io/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "security",
      title: "Cybersecurity Tools",
      icon: <Shield className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "OWASP",
          description: "Open source foundation working to improve software security.",
          url: "https://owasp.org/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Have I Been Pwned",
          description: "Check if your email or phone is in a data breach.",
          url: "https://haveibeenpwned.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Burp Suite Community Edition",
          description: "Web vulnerability scanner for security professionals.",
          url: "https://portswigger.net/burp/communitydownload",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "TryHackMe",
          description: "Learn cybersecurity through hands-on exercises and labs.",
          url: "https://tryhackme.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
    {
      id: "opensource",
      title: "Open Source Contributions",
      icon: <Github className="h-6 w-6 text-primary" />,
      tools: [
        {
          name: "GitHub",
          description: "Platform for version control and collaboration for software projects.",
          url: "https://github.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Good First Issues",
          description: "Find beginner-friendly issues in open source projects.",
          url: "https://goodfirstissues.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "Open Source Guides",
          description:
            "Resources for individuals, communities, and companies who want to learn how to run and contribute to open source.",
          url: "https://opensource.guide/",
          image: "/placeholder.svg?height=100&width=200",
        },
        {
          name: "CodeTriage",
          description: "Get started contributing to open source projects.",
          url: "https://www.codetriage.com/",
          image: "/placeholder.svg?height=100&width=200",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glitch">
              <span>Technical Resources</span>
              <span>Technical Resources</span>
              Technical Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A curated collection of tools and resources to boost your development workflow and technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {toolsCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <div className="flex items-center space-x-3 mb-8">
                  {category.icon}
                  <h2 className="text-2xl md:text-3xl font-bold terminal-text">{category.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, index) => (
                    <Link key={index} href={tool.url} target="_blank" rel="noopener noreferrer">
                      <Card className="cyber-card h-full transition-transform hover:scale-105">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="mb-4">
                            <Image
                              src={tool.image || "/placeholder.svg"}
                              alt={tool.name}
                              width={200}
                              height={100}
                              className="w-full h-12 object-contain"
                            />
                          </div>
                          <h3 className="text-lg font-bold mb-2 flex items-center">
                            {tool.name}
                            <ExternalLink className="h-4 w-4 ml-2 text-primary" />
                          </h3>
                          <p className="text-sm text-muted-foreground flex-grow">{tool.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest a Tool Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold terminal-text">Suggest a Tool</h2>
            <p className="text-muted-foreground">
              Know a great tool that should be on this list? We're always looking to expand our resources. Send us your
              suggestions!
            </p>
            <Link
              href="mailto:lead.8bitwarriors@gmail.com"
              className="inline-flex items-center text-primary hover:underline"
            >
              <span>Email us your suggestion</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

