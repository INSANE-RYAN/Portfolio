import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
      <AnimatedBackground variant="hero" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <span className="text-muted-foreground text-lg font-light tracking-wider">안녕하세요 • Hello, I'm</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 animate-slide-up">
          <span className="text-primary tracking-tight">Sarthak</span>
        </h1>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-2xl md:text-3xl korean-text text-secondary font-medium tracking-wide">사르탁</span>
        </div>

        <p
          className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light tracking-wide animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Creative Developer & Designer
        </p>

        <p
          className="text-lg korean-text text-accent mb-6 font-medium tracking-wide animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          창의적인 개발자 & 디자이너
        </p>

        <p
          className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          BCA Student at Chandigarh University passionate about creating beautiful, functional digital experiences
          through thoughtful design and clean code
        </p>

        <p
          className="text-base korean-text text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          찬디가르 대학교 BCA 학생으로, 아름답고 기능적인 디지털 경험을 창조하는 것에 열정을 가지고 있습니다
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View My Work</span>
            <span className="ml-2 korean-text text-sm opacity-80">작품 보기</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
          >
            <span>Download CV</span>
            <span className="ml-2 korean-text text-sm opacity-80">이력서</span>
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/INSANE-RYAN"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/10"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarthak-gupta-a7544628b"
            className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-secondary/10"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="mailto:guptasarthak7890@gmail.com"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-accent/10"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-5 h-5 text-accent mx-auto opacity-60" />
        </div>
      </div>
    </section>
  )
}
