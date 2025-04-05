import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  // Team members data
  const coreTeam = [
    {
      name: "Alex Johnson",
      role: "Founder & President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Computer Science major with a passion for AI and blockchain technology.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Samantha Lee",
      role: "Vice President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer specializing in React and Node.js ecosystems.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Machine learning enthusiast with experience in Python and TensorFlow.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Priya Patel",
      role: "Events Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Marketing major with a knack for organizing engaging tech events.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "David Wilson",
      role: "Design Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "UI/UX designer with a background in graphic design and front-end development.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Olivia Martinez",
      role: "Outreach Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Communications major focused on building partnerships with tech companies.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started as a small group of tech enthusiasts meeting in a college dorm room.",
    },
    {
      year: "2019",
      title: "Official Club Status",
      description: "Recognized as an official college club with 25 founding members.",
    },
    {
      year: "2020",
      title: "First Hackathon",
      description: "Organized our first 24-hour hackathon with over 100 participants.",
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description: "Launched our first internship program and partnered with local tech companies.",
    },
    {
      year: "2022",
      title: "Going Beyond Campus",
      description: "Expanded to include members from multiple colleges and universities.",
    },
    {
      year: "2023",
      title: "Official Organization",
      description: "Transitioned from a college club to a registered non-profit tech organization.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Established an online presence with members from around the world.",
    },
  ]

  // Departments data
  const departments = [
    {
      name: "Development Team",
      description: "Builds web applications, mobile apps, and other software projects.",
      subteams: ["Web Development", "Mobile Apps", "AI & ML", "Blockchain"],
    },
    {
      name: "Event & Outreach Team",
      description: "Organizes workshops, hackathons, and manages external partnerships.",
      subteams: ["Event Planning", "Community Management", "Corporate Relations"],
    },
    {
      name: "Design & Media Team",
      description: "Creates visual content, manages social media, and handles branding.",
      subteams: ["UI/UX Design", "Graphic Design", "Social Media", "Content Creation"],
    },
    {
      name: "Research & Innovation Team",
      description: "Explores emerging technologies and develops experimental projects.",
      subteams: ["Emerging Tech Research", "Prototype Development", "Technical Writing"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glitch">
              <span>About 8 Bit Warriors</span>
              <span>About 8 Bit Warriors</span>
              About 8 Bit Warriors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From a college club to a thriving tech community, discover our journey and mission.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold terminal-text">Our Journey</h2>
              <p className="text-muted-foreground">
                8 Bit Warriors began as a small group of passionate students who wanted to bridge the gap between
                academic learning and real-world tech skills. What started in a college dorm room has grown into a
                vibrant community of innovators, developers, and leaders.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be a recognized organization that empowers students with hands-on experience,
                technical tools, events, and career opportunities. Our mission is to create a supportive ecosystem where
                the next generation of tech leaders can thrive.
              </p>
            </div>

            <div className="cyber-box rounded-lg p-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="8 Bit Warriors Journey"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Our Timeline</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />

                  <div
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 p-4" />
                    <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="cyber-card p-6">
                        <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold terminal-text">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower students with practical tech skills, foster innovation, and build a community where aspiring
                technologists can learn, collaborate, and grow together.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold terminal-text">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To create a global network of tech-savvy individuals who are equipped to solve real-world problems and
                drive technological advancement in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 md:py-24" id="departments">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Our Teams</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{dept.name}</h3>
                  <p className="text-muted-foreground">{dept.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Sub-teams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.subteams.map((team, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 md:py-24 bg-muted/30" id="team">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Meet the Core Team</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="cyber-card overflow-hidden">
                <div className="cyber-scanner">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link
                      href={member.social.github}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href={member.social.twitter}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold terminal-text">Alumni & Mentors</h2>
            <p className="text-muted-foreground">
              Our alumni have gone on to work at leading tech companies like Google, Microsoft, Amazon, and many
              startups. They continue to support our community by mentoring current members and sharing their industry
              insights.
            </p>
            <Link href="/careers#apply">
              <Button className="cyber-button">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

