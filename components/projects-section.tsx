"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      korean: "전자상거래 플랫폼",
      description:
        "Modern e-commerce website with React and MySQL backend featuring user authentication and payment integration.",
      koreanDescription:
        "사용자 인증 및 결제 통합 기능을 갖춘 React와 MySQL 백엔드를 사용한 현대적인 전자상거래 웹사이트입니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      category: "Web Development",
      koreanCategory: "웹 개발",
      technologies: ["React", "JavaScript", "MySQL", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      korean: "포트폴리오 웹사이트",
      description: "Elegant portfolio website with modern design principles, responsive layout, and smooth animations.",
      koreanDescription:
        "현대적인 디자인 원칙, 반응형 레이아웃, 부드러운 애니메이션을 갖춘 우아한 포트폴리오 웹사이트입니다.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
      category: "Web Development",
      koreanCategory: "웹 개발",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      korean: "브랜드 아이덴티티 디자인",
      description: "Complete brand identity package including logo design, color palette, and marketing materials.",
      koreanDescription: "로고 디자인, 색상 팔레트, 마케팅 자료를 포함한 완전한 브랜드 아이덴티티 패키지입니다.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center",
      category: "Design",
      koreanCategory: "디자인",
      technologies: ["Figma", "Photoshop", "Canva"],
      liveUrl: "#",
    },
    {
      id: 4,
      title: "3D Product Visualization",
      korean: "3D 제품 시각화",
      description:
        "Interactive 3D product models created for e-commerce platforms with realistic lighting and materials.",
      koreanDescription: "현실적인 조명과 재질을 가진 전자상거래 플랫폼용 인터랙티브 3D 제품 모델입니다.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      category: "3D Modeling",
      koreanCategory: "3D 모델링",
      technologies: ["Blender"],
      liveUrl: "#",
    },
    {
      id: 5,
      title: "University Dashboard",
      korean: "대학교 대시보드",
      description:
        "Student management dashboard with data visualization and real-time updates for university administration.",
      koreanDescription: "대학 행정을 위한 데이터 시각화 및 실시간 업데이트 기능을 갖춘 학생 관리 대시보드입니다.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      category: "Web Development",
      koreanCategory: "웹 개발",
      technologies: ["React", "MySQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Social Media Campaign",
      korean: "소셜 미디어 캠페인",
      description: "Complete social media marketing campaign with content creation and performance analytics.",
      koreanDescription: "콘텐츠 제작 및 성과 분석을 포함한 완전한 소셜 미디어 마케팅 캠페인입니다.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=center",
      category: "Marketing",
      koreanCategory: "마케팅",
      technologies: ["Canva", "Photoshop", "PR"],
      liveUrl: "#",
    },
  ]

  const categories = [
    { name: "All", korean: "전체" },
    { name: "Web Development", korean: "웹 개발" },
    { name: "Design", korean: "디자인" },
    { name: "3D Modeling", korean: "3D 모델링" },
    { name: "Marketing", korean: "마케팅" },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">My Projects</h2>
            <p className="text-2xl korean-text text-secondary font-medium mt-2">내 프로젝트</p>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my creative work spanning web development, design, and digital experiences
          </p>
          <p className="text-lg korean-text text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-3">
            웹 개발, 디자인, 디지털 경험을 아우르는 창작 작품 쇼케이스
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeFilter === category.name ? "default" : "outline"}
              onClick={() => setActiveFilter(category.name)}
              className={`px-6 py-3 font-medium tracking-wide transition-all duration-300 ${
                activeFilter === category.name
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                  : "border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:shadow-md"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm">{category.name}</span>
                <span className="korean-text text-xs opacity-80">{category.korean}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-gradient-to-br from-card/95 via-card/90 to-primary/5 backdrop-blur-md border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 pattern-korean-wave relative shadow-lg"
            >
              <CardContent className="p-8 relative z-10">
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs text-primary border-primary/30 bg-primary/5">
                    <span>{project.category}</span>
                    <span className="ml-1 korean-text">{project.koreanCategory}</span>
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm korean-text text-secondary font-medium">{project.korean}</p>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm mb-2">
                    {project.description}
                  </p>
                  <p className="korean-text text-muted-foreground/80 leading-relaxed line-clamp-2 text-xs bg-accent/5 p-2 rounded border-l-2 border-accent/30">
                    {project.koreanDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs border-0 shadow-sm ${
                        index % 3 === 0
                          ? "bg-primary/10 text-primary"
                          : index % 3 === 1
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>Live Demo</span>
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent shadow-md"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-12 border-2 border-primary-foreground/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16 pattern-dancheong"></div>
            <div className="relative z-10 text-primary-foreground">
              <h3 className="text-3xl font-serif font-semibold mb-2">Interested in working together?</h3>
              <p className="text-xl korean-text font-medium mb-6">함께 일하는 것에 관심이 있으신가요?</p>
              <p className="mb-4 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
                I'm always excited to take on new challenges and create amazing digital experiences. Let's discuss your
                next project!
              </p>
              <p className="korean-text mb-8 max-w-xl mx-auto text-base leading-relaxed opacity-80">
                저는 항상 새로운 도전을 받아들이고 놀라운 디지털 경험을 만드는 것에 흥미를 느낍니다. 다음 프로젝트에
                대해 논의해봅시다!
              </p>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get In Touch</span>
                <span className="ml-2 korean-text text-sm opacity-90">연락하기</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
