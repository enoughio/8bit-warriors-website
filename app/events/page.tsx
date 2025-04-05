import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function EventsPage() {
  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Hackathon 2025",
      date: "March 15-17, 2025",
      location: "University Main Campus",
      time: "48 Hours",
      description:
        "Our flagship hackathon where teams compete to build innovative solutions to real-world problems. Network with industry professionals, learn new technologies, and win exciting prizes!",
      image: "/placeholder.svg?height=400&width=600",
      registrationLink: "#",
    },
    {
      id: 2,
      title: "Web Development Workshop Series",
      date: "Every Saturday, Feb-Apr 2025",
      location: "Tech Building, Room 301",
      time: "10:00 AM - 1:00 PM",
      description:
        "A comprehensive 10-week workshop series covering modern web development technologies including HTML, CSS, JavaScript, React, and Node.js.",
      image: "/placeholder.svg?height=400&width=600",
      registrationLink: "#",
    },
    {
      id: 3,
      title: "AI & Machine Learning Bootcamp",
      date: "April 5-7, 2025",
      location: "Innovation Center",
      time: "9:00 AM - 5:00 PM",
      description:
        "An intensive 3-day bootcamp on artificial intelligence and machine learning fundamentals. Learn about neural networks, deep learning, and practical applications.",
      image: "/placeholder.svg?height=400&width=600",
      registrationLink: "#",
    },
  ]

  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "Cybersecurity Summit",
      date: "November 10-11, 2024",
      description: "A two-day summit focused on the latest trends and challenges in cybersecurity.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Tech Career Fair",
      date: "October 15, 2024",
      description: "An opportunity for students to connect with tech companies and explore career opportunities.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Open Source Contribution Day",
      date: "September 25, 2024",
      description:
        "A day dedicated to contributing to open source projects and learning about the open source ecosystem.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Mobile App Development Workshop",
      date: "August 5-7, 2024",
      description: "A hands-on workshop on building mobile applications using React Native and Flutter.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Blockchain Technology Seminar",
      date: "July 20, 2024",
      description: "An educational seminar on blockchain technology, cryptocurrencies, and decentralized applications.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Summer Coding Bootcamp",
      date: "June 1-30, 2024",
      description:
        "A month-long intensive coding bootcamp covering web development, data science, and software engineering.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glitch">
              <span>Tech Events & Hackathons</span>
              <span>Tech Events & Hackathons</span>
              Tech Events & Hackathons
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join us for workshops, hackathons, and tech meetups to expand your skills and network with like-minded
              individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Upcoming Events</h2>

          <div className="space-y-12">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="cyber-card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-scanner">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{event.title}</h3>

                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    <div className="mt-6">
                      <Link href={event.registrationLink}>
                        <Button className="cyber-button w-full sm:w-auto">RSVP Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Past Events Gallery</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="cyber-card overflow-hidden">
                <div className="cyber-scanner">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold terminal-text">Want to Host an Event with Us?</h2>
              <p className="text-muted-foreground">
                We're always looking for partners to collaborate on tech events, workshops, and hackathons. If you're a
                company, organization, or individual interested in hosting an event with 8 Bit Warriors, we'd love to
                hear from you!
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What We Offer:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Access to a community of tech-savvy students and professionals</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Event planning and coordination support</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Marketing and promotion through our channels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Technical resources and mentorship</span>
                  </li>
                </ul>
              </div>
              <Link href="mailto:lead.8bitwarriors@gmail.com">
                <Button className="cyber-button">Contact Us to Collaborate</Button>
              </Link>
            </div>

            <div className="cyber-box rounded-lg p-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Event Collaboration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

