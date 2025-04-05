"use server"

import nodemailer from "nodemailer"

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lead.8bitwarriors@gmail.com",
    pass: "your_app_password_here", // This would normally be an environment variable
  },
})

// Submit application form
export async function submitApplication(formData: FormData) {
  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const profile = formData.get("profile") as string
  const resume = formData.get("resume") as string
  const skills = formData.get("skills") as string
  const interests = formData.get("interests") as string
  const why = formData.get("why") as string

  // Create email content
  const mailOptions = {
    from: "lead.8bitwarriors@gmail.com",
    to: "lead.8bitwarriors@gmail.com",
    subject: `New Application: ${name}`,
    text: `
      New Application Submission
      
      Name: ${name}
      Email: ${email}
      LinkedIn/GitHub: ${profile || "Not provided"}
      Resume: ${resume || "Not provided"}
      Skills: ${skills || "Not provided"}
      Areas of Interest: ${interests || "Not provided"}
      
      Why they want to join:
      ${why || "Not provided"}
    `,
    html: `
      <h2>New Application Submission</h2>
      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>LinkedIn/GitHub:</strong> ${profile || "Not provided"}</p>
      <p><strong>Resume:</strong> ${resume || "Not provided"}</p>
      <p><strong>Skills:</strong> ${skills || "Not provided"}</p>
      <p><strong>Areas of Interest:</strong> ${interests || "Not provided"}</p>
      
      <h3>Why they want to join:</h3>
      <p>${why || "Not provided"}</p>
    `,
  }

  try {
    // In a real environment, we would use environment variables for email credentials
    // For demo purposes, we'll just simulate a successful submission
    // await transporter.sendMail(mailOptions)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to submit application")
  }
}

// Subscribe to newsletter
export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // Create email content
  const mailOptions = {
    from: "lead.8bitwarriors@gmail.com",
    to: "lead.8bitwarriors@gmail.com",
    subject: "New Newsletter Subscription",
    text: `
      New Newsletter Subscription
      
      Email: ${email}
    `,
    html: `
      <h2>New Newsletter Subscription</h2>
      
      <p><strong>Email:</strong> ${email}</p>
    `,
  }

  try {
    // In a real environment, we would use environment variables for email credentials
    // For demo purposes, we'll just simulate a successful submission
    // await transporter.sendMail(mailOptions)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to subscribe to newsletter")
  }
}

