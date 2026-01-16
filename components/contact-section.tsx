"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Option 1: Try to send via a form service (like Formspree, Netlify Forms, etc.)
      // For now, we'll use mailto as a reliable fallback

      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )

      // Create mailto link
      const mailtoLink = `mailto:sarthak.dev@example.com?subject=${subject}&body=${body}`

      // Simulate processing time for better UX
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Open email client
      window.location.href = mailtoLink

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 4000)
    } catch (error) {
      console.error("Error sending message:", error)
      setIsSubmitting(false)

      // Fallback: still open mailto
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:sarthak.dev@example.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      korean: "이메일",
      value: "sarthak.dev@example.com", // Updated email address
      href: "mailto:sarthak.dev@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      korean: "전화",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      korean: "위치",
      value: "Chandigarh, India",
      koreanValue: "찬디가르, 인도",
      href: "https://maps.google.com/?q=Chandigarh,India", // Added Google Maps link
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      korean: "깃허브",
      href: "https://github.com/sarthak",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      korean: "링크드인",
      href: "https://linkedin.com/in/sarthak",
    },
    {
      icon: Instagram,
      label: "Instagram",
      korean: "인스타그램",
      href: "https://instagram.com/sarthak",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">Get In Touch</h2>
            <p className="text-2xl korean-text text-secondary font-medium mt-2">연락하기</p>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's create something amazing together. I'm always excited to work on new projects
            and challenges.
          </p>
          <p className="text-lg korean-text text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-3">
            협업할 준비가 되셨나요? 함께 놀라운 것을 만들어봅시다. 저는 항상 새로운 프로젝트와 도전에 흥미를 느낍니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card/95 via-card/90 to-primary/5 backdrop-blur-md border-2 border-primary/30 shadow-2xl pattern-korean-wave relative overflow-hidden group h-fit">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2">Send me a message</h3>
                  <p className="text-lg korean-text text-secondary font-medium">메시지 보내기</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-serif font-semibold text-primary mb-2">Email Client Opened!</h4>
                    <p className="text-base korean-text text-secondary font-medium mb-3">
                      이메일 클라이언트가 열렸습니다!
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Your email client should open with the message pre-filled. Please send it from there!
                    </p>
                    <p className="korean-text text-muted-foreground/80 text-sm mt-2">
                      이메일 클라이언트에서 메시지를 확인하고 전송해 주세요!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary font-medium text-sm">
                          <span>Name</span>
                          <span className="ml-2 korean-text text-sm text-secondary">이름 *</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2 border-primary/20 focus:border-primary focus:ring-primary py-2.5 text-sm bg-background/50 backdrop-blur-sm"
                          placeholder="Your full name • 성명"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary font-medium text-sm">
                          <span>Email</span>
                          <span className="ml-2 korean-text text-sm text-secondary">이메일 *</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2 border-primary/20 focus:border-primary focus:ring-primary py-2.5 text-sm bg-background/50 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-primary font-medium text-sm">
                        <span>Subject</span>
                        <span className="ml-2 korean-text text-sm text-secondary">제목 *</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-2 border-primary/20 focus:border-primary focus:ring-primary py-2.5 text-sm bg-background/50 backdrop-blur-sm"
                        placeholder="What's this about? • 무엇에 관한 내용인가요?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary font-medium text-sm">
                        <span>Message</span>
                        <span className="ml-2 korean-text text-sm text-secondary">메시지 *</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-2 border-primary/20 focus:border-primary focus:ring-primary resize-none text-sm bg-background/50 backdrop-blur-sm"
                        placeholder="Tell me about your project or idea... • 프로젝트나 아이디어에 대해 알려주세요..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-sm font-medium disabled:opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                          <span>Opening Email Client...</span>
                          <span className="ml-2 korean-text text-sm">이메일 클라이언트 열기...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-4 h-4 mr-2" />
                          <span>Send Message</span>
                          <span className="ml-2 korean-text text-sm">메시지 전송</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/95 via-card/90 to-accent/5 backdrop-blur-md border-2 border-accent/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-accent mb-2">Availability</h3>
                  <p className="text-lg korean-text text-primary font-medium">가용성</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-base">Status</span>
                      <span className="korean-text text-muted-foreground/70 text-sm ml-2">상태</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
                      <div className="text-right">
                        <span className="text-primary font-medium text-base">Available for projects</span>
                        <p className="korean-text text-secondary text-sm">프로젝트 가능</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-base">Response time</span>
                      <span className="korean-text text-muted-foreground/70 text-sm ml-2">응답 시간</span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-medium text-base">Within 24 hours</span>
                      <p className="korean-text text-secondary text-sm">24시간 이내</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-base">Timezone</span>
                      <span className="korean-text text-muted-foreground/70 text-sm ml-2">시간대</span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-medium text-base">IST (UTC+5:30)</span>
                      <p className="korean-text text-secondary text-sm">인도 표준시</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card/95 via-card/90 to-secondary/5 backdrop-blur-md border-2 border-secondary/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-secondary mb-2">Contact Information</h3>
                  <p className="text-lg korean-text text-primary font-medium">연락처 정보</p>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <div key={item.label} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30 flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                            <p className="text-xs korean-text text-muted-foreground/70">{item.korean}</p>
                          </div>
                          {item.href === "#" ? (
                            <div>
                              <p className="text-primary font-medium text-base">{item.value}</p>
                              {item.koreanValue && (
                                <p className="korean-text text-secondary text-sm">{item.koreanValue}</p>
                              )}
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className="text-primary font-medium text-base hover:text-secondary transition-colors"
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground shadow-2xl border-2 border-primary-foreground/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-foreground/10 rounded-full -translate-y-12 translate-x-12 pattern-dancheong"></div>
              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2">Follow Me</h3>
                  <p className="text-lg korean-text font-medium">팔로우하기</p>
                </div>
                <p className="mb-3 opacity-90 text-base leading-relaxed">
                  Stay connected and follow my journey as I create, learn, and share insights about development and
                  design.
                </p>
                <p className="korean-text mb-6 opacity-80 text-sm leading-relaxed">
                  제가 창작하고, 배우고, 개발과 디자인에 대한 통찰을 공유하는 여정을 함께하세요.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors group border border-primary-foreground/30"
                        aria-label={`${social.label} • ${social.korean}`}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
