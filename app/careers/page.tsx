"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Briefcase, Code, Brain, Shield, Palette, Globe, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { submitApplication } from "@/app/actions"

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Internship areas data
  const internshipAreas = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "Build modern web applications using React, Next.js, and other cutting-edge technologies.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Next.js"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-primary" />,
      description:
        "Work on AI projects involving natural language processing, computer vision, and predictive analytics.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Neural Networks"],
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: "Learn about security vulnerabilities, ethical hacking, and how to protect systems from threats.",
      skills: ["Network Security", "Penetration Testing", "Security Audits", "Cryptography"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: "Design intuitive and visually appealing interfaces for web and mobile applications.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Interaction Design"],
    },
    {
      title: "Open Source",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: "Contribute to open source projects and learn how to collaborate with developers worldwide.",
      skills: ["Git", "GitHub", "Documentation", "Code Reviews", "Community Management"],
    },
    {
      title: "Marketing & Outreach",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      description: "Help promote our events, manage social media, and build partnerships with other organizations.",
      skills: ["Social Media", "Content Creation", "Event Planning", "Community Building"],
    },
  ]

  // Handle form submission
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitApplication(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glitch">
              <span>Join Our Team</span>
              <span>Join Our Team</span>
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore internship opportunities and open roles at 8 Bit Warriors.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Areas Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">
            Internship & Learning Opportunities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipAreas.map((area, index) => (
              <Card key={index} className="cyber-card h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-fit">{area.icon}</div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {skill}
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

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold terminal-text">Why Join 8 Bit Warriors?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold">Hands-on Experience</h3>
                    <p className="text-muted-foreground">
                      Work on real projects that make a difference and build your portfolio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold">Mentorship</h3>
                    <p className="text-muted-foreground">
                      Learn from experienced developers, designers, and industry professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold">Networking</h3>
                    <p className="text-muted-foreground">
                      Connect with like-minded individuals and build your professional network.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold">Skill Development</h3>
                    <p className="text-muted-foreground">
                      Enhance your technical and soft skills through workshops and projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-box rounded-lg p-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="8 Bit Warriors Team"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-24" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Application Form</h2>

            {isSubmitted ? (
              <Card className="cyber-card">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <CheckCircle className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Application Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest in joining 8 Bit Warriors. We've received your application and will get
                    back to you soon.
                  </p>
                  <Button className="cyber-button mt-4" onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="cyber-card">
                <CardContent className="p-8">
                  <form action={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" required className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="profile">LinkedIn/GitHub Profile</Label>
                        <Input
                          id="profile"
                          name="profile"
                          placeholder="https://linkedin.com/in/johndoe"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume Link (Google Drive, Dropbox, etc.)</Label>
                        <Input
                          id="resume"
                          name="resume"
                          placeholder="https://drive.google.com/file/d/..."
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills (comma separated)</Label>
                      <Input
                        id="skills"
                        name="skills"
                        placeholder="React, JavaScript, UI/UX Design, etc."
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests">Areas of Interest</Label>
                      <Input
                        id="interests"
                        name="interests"
                        placeholder="Web Development, AI, Cybersecurity, etc."
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="why">Why do you want to join 8 Bit Warriors?</Label>
                      <Textarea
                        id="why"
                        name="why"
                        placeholder="Tell us about your motivation and what you hope to achieve..."
                        className="min-h-[120px] bg-background/50"
                      />
                    </div>

                    <Button type="submit" className="cyber-button w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-text">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Is this a paid internship?</h3>
                <p className="text-muted-foreground">
                  Most of our internships are unpaid learning opportunities, but we do offer stipends for exceptional
                  performance and for specific roles that require more commitment.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">How long are the internships?</h3>
                <p className="text-muted-foreground">
                  Our standard internships run for 3 months, but we're flexible and can accommodate your schedule,
                  especially for students balancing academic commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Do I need prior experience?</h3>
                <p className="text-muted-foreground">
                  While some experience is helpful, we value enthusiasm and willingness to learn more than extensive
                  experience. We have roles suitable for various skill levels.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Can I intern remotely?</h3>
                <p className="text-muted-foreground">
                  Yes, most of our internships can be completed remotely, though we occasionally organize in-person
                  events and meetups for those who can attend.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">How much time commitment is required?</h3>
                <p className="text-muted-foreground">
                  We typically ask for 10-15 hours per week, but we're flexible and can work around your schedule,
                  especially during exam periods.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Will I receive a certificate?</h3>
                <p className="text-muted-foreground">
                  Yes, all interns receive a certificate of completion, and outstanding performers receive letters of
                  recommendation from our leadership team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

