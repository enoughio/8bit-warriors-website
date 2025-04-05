import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Code, Briefcase, Users, ArrowRight, Terminal, Cpu, Globe, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glitch">
                <span>Empowering the Future of Tech</span>
                <span>Empowering the Future of Tech</span>
                Empowering the Future of Tech
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-md typing-animation">
                Join a community of innovators, builders, and tech enthusiasts.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/careers#apply">
                  <Button className="cyber-button">
                    Join Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-primary/50 bg-background/50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="cyber-box rounded-lg p-1">
              <div className="cyber-scanner rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="8 Bit Warriors Tech Community"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glitch">
              <span>About 8 Bit Warriors</span>
              <span>About 8 Bit Warriors</span>
              About 8 Bit Warriors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a college club to a recognized tech organization, we're on a mission to empower students with
              real-world tech skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
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

            <div className="space-y-6">
              <h3 className="text-2xl font-bold terminal-text">Our Story</h3>
              <p className="text-muted-foreground">
                8 Bit Warriors started as a small group of tech enthusiasts in a college dorm room. Today, we've grown
                into a community of innovators, developers, and leaders shaping the future of technology.
              </p>
              <p className="text-muted-foreground">
                We provide hands-on experience, technical tools, events, and career opportunities to help students
                bridge the gap between academic learning and industry requirements.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary/50 bg-background/50">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Explore What We Offer</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Upcoming Events */}
            <Link href="/events">
              <Card className="cyber-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Upcoming Events</h3>
                  <p className="text-muted-foreground">
                    Workshops, hackathons, and tech meetups to expand your skills.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Explore Tools */}
            <Link href="/tools">
              <Card className="cyber-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Explore Tools</h3>
                  <p className="text-muted-foreground">
                    Curated resources and tools to boost your development workflow.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Apply for Internships */}
            <Link href="/careers">
              <Card className="cyber-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Apply for Internships</h3>
                  <p className="text-muted-foreground">Gain real-world experience with our internship opportunities.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Meet the Team */}
            <Link href="/about#team">
              <Card className="cyber-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Meet the Team</h3>
                  <p className="text-muted-foreground">Get to know the passionate individuals behind 8 Bit Warriors.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Upcoming Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Annual Hackathon 2025</h2>
              <p className="text-muted-foreground">
                Join us for our flagship 48-hour hackathon where teams compete to build innovative solutions to
                real-world problems. Network with industry professionals, learn new technologies, and win exciting
                prizes!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/events">
                  <Button className="cyber-button">RSVP Now</Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="border-primary/50 bg-background/50">
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>

            <div className="cyber-box rounded-lg p-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Annual Hackathon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 terminal-text">Why Join 8 Bit Warriors?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a community that's shaping the future of technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Hands-on Experience</h3>
                <p className="text-muted-foreground">
                  Work on real projects and gain practical experience that employers value.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Cutting-edge Skills</h3>
                <p className="text-muted-foreground">
                  Learn the latest technologies and stay ahead in the fast-evolving tech landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Network & Community</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals, mentors, and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Career Opportunities</h3>
                <p className="text-muted-foreground">
                  Access exclusive internships and job opportunities with our partner companies.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Innovation & Creativity</h3>
                <p className="text-muted-foreground">
                  Express your ideas and turn them into reality with our resources and support.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Leadership Development</h3>
                <p className="text-muted-foreground">
                  Develop leadership skills by leading projects and mentoring junior members.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/careers#apply">
              <Button className="cyber-button">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold glitch">
              <span>Ready to Level Up Your Tech Journey?</span>
              <span>Ready to Level Up Your Tech Journey?</span>
              Ready to Level Up Your Tech Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 8 Bit Warriors today and be part of a community that's shaping the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers#apply">
                <Button className="cyber-button">Apply Now</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-primary/50 bg-background/50">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

