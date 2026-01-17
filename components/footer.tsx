"use client"
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", korean: "소개", href: "#about" },
    { name: "Projects", korean: "프로젝트", href: "#projects" },
    { name: "Blog", korean: "블로그", href: "#blog" },
    { name: "Contact", korean: "연락처", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      korean: "깃허브",
      href: "https://github.com/INSANE-RYAN",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      korean: "링크드인",
      href: "https://www.linkedin.com/in/sarthak-gupta-a7544628b/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      korean: "인스타그램",
      href: "https://www.instagram.com/_____sarthak_20/",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "guptasarthak7890@gmail.com",
      href: "mailto:guptasarthak7890@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 9588795122",
      href: "tel:+919588795122",
    },
    {
      icon: MapPin,
      text: "Chandigarh, India",
      korean: "찬디가르, 인도",
      href: "https://maps.google.com/?q=Chandigarh,India",
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-primary/20 relative overflow-hidden">
      <AnimatedBackground variant="subtle" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-primary mb-2">Sarthak</h3>
              <p className="text-xl korean-text text-secondary font-medium">사르탁 • 창의적 개발자</p>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-md">
              BCA Student at Chandigarh University passionate about creating innovative digital experiences through code
              and design.
            </p>
            <p className="korean-text text-muted-foreground/80 text-sm leading-relaxed max-w-md">
              찬디가르 대학교 BCA 학생으로, 코드와 디자인을 통해 혁신적인 디지털 경험을 만드는 것에 열정을 가지고
              있습니다.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-primary/20 hover:border-primary/40"
                    aria-label={`${social.label} • ${social.korean}`}
                  >
                    <IconComponent className="w-4 h-4 text-primary" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-primary mb-4">Quick Links</h4>
            <p className="korean-text text-secondary text-sm mb-4">빠른 링크</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <span className="korean-text text-xs text-muted-foreground/70">{link.korean}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-primary mb-4">Get In Touch</h4>
            <p className="korean-text text-secondary text-sm mb-4">연락하기</p>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-sm">{item.text}</span>
                        {item.korean && <p className="korean-text text-xs text-muted-foreground/70">{item.korean}</p>}
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">© {currentYear} Sarthak. All rights reserved.</p>
              <p className="korean-text text-muted-foreground/70 text-xs mt-1">
                © {currentYear} 사르탁. 모든 권리 보유.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in India</span>
              <span className="korean-text text-xs">인도에서 제작</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
