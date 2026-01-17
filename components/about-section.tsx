import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Camera, Layers } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function AboutSection() {
  const skills = [
    { name: "HTML", korean: "HTML", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "CSS", korean: "CSS", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "JavaScript", korean: "자바스크립트", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "React", korean: "리액트", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "Next.js", korean: "넥스트.js", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "TypeScript", korean: "타입스크립트", category: "Frontend", koreanCategory: "프론트엔드", icon: Code },
    { name: "MySQL", korean: "MySQL", category: "Backend", koreanCategory: "백엔드", icon: Database },
    { name: "Firebase", korean: "파이어베이스", category: "Backend", koreanCategory: "백엔드", icon: Database },
    { name: "PostgreSQL", korean: "포스트그레SQL", category: "Backend", koreanCategory: "백엔드", icon: Database },
    { name: "Figma", korean: "피그마", category: "Design", koreanCategory: "디자인", icon: Palette },
    { name: "Canva", korean: "캔바", category: "Design", koreanCategory: "디자인", icon: Palette },
    { name: "Photoshop", korean: "포토샵", category: "Design", koreanCategory: "디자인", icon: Camera },
    { name: "Blender", korean: "블렌더", category: "3D", koreanCategory: "3D", icon: Layers },
  ]

  const categories = [
    { name: "Frontend", korean: "프론트엔드" },
    { name: "Backend", korean: "백엔드" },
    { name: "Design", korean: "디자인" },
    { name: "3D", korean: "3D" },
  ]

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">About Me</h2>
            <p className="text-2xl korean-text text-secondary font-medium mt-2">소개</p>
          </div>
          <div className="w-16 h-1 bg-linearfrom-primary via-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that blend creativity with functionality
          </p>
          <p className="text-lg korean-text text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-3">
            창의성과 기능성을 결합한 디지털 경험을 만드는 것에 열정을 가지고 있습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <Card className="p-10 bg-linear-to-br from-card/95 via-card/90 to-primary/5 backdrop-blur-md border-2 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-primary/50 pattern-hanji relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-semibold text-primary mb-2">Hello! I'm Sarthak</h3>
                  <p className="text-xl korean-text text-secondary font-medium mb-3">안녕하세요! 저는 사르탁입니다</p>
                  <p className="text-muted-foreground font-medium text-lg">BCA Student at Chandigarh University</p>
                  <p className="korean-text text-base text-muted-foreground/80">찬디가르 대학교 BCA 학생</p>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I'm a passionate developer and designer currently pursuing my Bachelor of Computer Applications at
                    Chandigarh University. My journey in technology is driven by a love for creating beautiful,
                    functional digital experiences.
                  </p>

                  <p className="korean-text text-base text-muted-foreground/90 bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                    저는 찬디가르 대학교에서 컴퓨터 응용학 학사 과정을 공부하고 있는 열정적인 개발자이자 디자이너입니다.
                    아름답고 기능적인 디지털 경험을 만드는 것에 대한 사랑으로 기술 여정을 이어가고 있습니다.
                  </p>

                  <p>
                    With expertise spanning from frontend development to 3D modeling, I enjoy working on diverse
                    projects that challenge my creativity and technical skills. I'm particularly drawn to modern design
                    aesthetics and cutting-edge web technologies.
                  </p>

                  <p>
                    When I'm not coding, you'll find me exploring new design trends, creating digital art, or learning
                    about emerging technologies that can enhance user experiences.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-primary/20">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground font-medium">Projects</div>
                    <div className="text-xs korean-text text-muted-foreground/70">프로젝트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Learning</div>
                    <div className="text-xs korean-text text-muted-foreground/70">학습 년수</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-accent mb-1">10+</div>
                    <div className="text-sm text-muted-foreground font-medium">Technologies</div>
                    <div className="text-xs korean-text text-muted-foreground/70">기술</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-10 bg-linear-to-br from-card/95 via-card/90 to-secondary/5 backdrop-blur-md border-2 border-secondary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-secondary/50 pattern-korean-wave relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-semibold text-secondary mb-2">Technical Skills</h3>
                  <p className="text-xl korean-text text-primary font-medium">기술 능력</p>
                </div>

                <div className="space-y-8">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-primary tracking-wide">{category.name}</h4>
                        <p className="text-sm korean-text text-secondary font-medium">{category.korean}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skills
                          .filter((skill) => skill.category === category.name)
                          .map((skill) => {
                            const IconComponent = skill.icon
                            return (
                              <Badge
                                key={skill.name}
                                variant="secondary"
                                className="px-5 py-3 bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md"
                              >
                                <IconComponent className="w-4 h-4 mr-3 text-primary group-hover:text-secondary transition-colors" />
                                <div className="flex flex-col">
                                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                                  <span className="korean-text text-xs text-muted-foreground">{skill.korean}</span>
                                </div>
                              </Badge>
                            )
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-linear-to-br from-primary via-primary/90 to-secondary shadow-2xl border-2 border-primary-foreground/20 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16 pattern-dancheong"></div>
              <CardContent className="p-0 relative z-10 text-primary-foreground">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center border border-primary-foreground/30">
                    <Code className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold mb-1">Bachelor of Computer Applications</h4>
                    <p className="korean-text text-lg font-medium mb-1">컴퓨터 응용학 학사</p>
                    <p className="text-primary-foreground/90 text-lg">Chandigarh University</p>
                    <p className="korean-text text-sm text-primary-foreground/70">찬디가르 대학교</p>
                    <p className="text-sm text-primary-foreground/80 font-medium mt-2">Currently Pursuing • 재학 중</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
