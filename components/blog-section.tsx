"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Development: Building Elegant User Experiences",
      korean: "현대 웹 개발: 우아한 사용자 경험 구축",
      excerpt:
        "Exploring how clean design principles and thoughtful development practices can create exceptional digital experiences that users love.",
      koreanExcerpt:
        "깔끔한 디자인 원칙과 사려 깊은 개발 관행이 사용자가 사랑하는 뛰어난 디지털 경험을 어떻게 만들 수 있는지 탐구합니다.",
      category: "Design",
      koreanCategory: "디자인",
      date: "2024-01-15",
      readTime: "5 min read",
      koreanReadTime: "5분 읽기",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "My Journey Learning React: From Beginner to Building Real Projects",
      korean: "React 학습 여정: 초보자에서 실제 프로젝트 구축까지",
      excerpt:
        "A personal reflection on learning React, the challenges I faced, and the projects that helped me grow as a developer.",
      koreanExcerpt:
        "React 학습에 대한 개인적인 성찰, 직면한 도전, 그리고 개발자로서 성장하는 데 도움이 된 프로젝트들에 대해 이야기합니다.",
      category: "Development",
      koreanCategory: "개발",
      date: "2024-01-10",
      readTime: "7 min read",
      koreanReadTime: "7분 읽기",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "The Art of 3D Modeling: Creating Realistic Product Visualizations",
      korean: "3D 모델링의 예술: 현실적인 제품 시각화 만들기",
      excerpt:
        "Tips and techniques for creating stunning 3D product models using Blender, from basic modeling to advanced materials.",
      koreanExcerpt:
        "기본 모델링부터 고급 재질까지, Blender를 사용하여 멋진 3D 제품 모델을 만드는 팁과 기법을 소개합니다.",
      category: "3D Art",
      koreanCategory: "3D 아트",
      date: "2024-01-05",
      readTime: "6 min read",
      koreanReadTime: "6분 읽기",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Building a Personal Brand as a Student Developer",
      korean: "학생 개발자로서 개인 브랜드 구축하기",
      excerpt:
        "How I'm building my personal brand while studying at Chandigarh University and the lessons I've learned along the way.",
      koreanExcerpt:
        "찬디가르 대학교에서 공부하면서 개인 브랜드를 구축하는 방법과 그 과정에서 배운 교훈들을 공유합니다.",
      category: "Career",
      koreanCategory: "커리어",
      date: "2023-12-28",
      readTime: "4 min read",
      koreanReadTime: "4분 읽기",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Database Design Best Practices: MySQL Tips for Beginners",
      korean: "데이터베이스 설계 모범 사례: 초보자를 위한 MySQL 팁",
      excerpt: "Essential MySQL concepts and best practices I wish I knew when starting out with database development.",
      koreanExcerpt: "데이터베이스 개발을 시작할 때 알았으면 좋았을 필수 MySQL 개념과 모범 사례들을 소개합니다.",
      category: "Development",
      koreanCategory: "개발",
      date: "2023-12-20",
      readTime: "8 min read",
      koreanReadTime: "8분 읽기",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Minimalist Design Philosophy: Less is More in Digital Interfaces",
      korean: "미니멀리스트 디자인 철학: 디지털 인터페이스에서 적은 것이 더 많은 것",
      excerpt:
        "Understanding how minimalist design principles can create more focused, accessible, and elegant user experiences.",
      koreanExcerpt:
        "미니멀리스트 디자인 원칙이 어떻게 더 집중적이고 접근 가능하며 우아한 사용자 경험을 만들 수 있는지 이해해봅시다.",
      category: "Design",
      koreanCategory: "디자인",
      date: "2023-12-15",
      readTime: "5 min read",
      koreanReadTime: "5분 읽기",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center",
    },
  ]

  const categories = [
    { name: "All", korean: "전체" },
    { name: "Design", korean: "디자인" },
    { name: "Development", korean: "개발" },
    { name: "3D Art", korean: "3D 아트" },
    { name: "Career", korean: "커리어" },
  ]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const formatKoreanDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <section id="blog" className="py-24 bg-background relative overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">My Blog</h2>
            <p className="text-2xl korean-text text-secondary font-medium mt-2">내 블로그</p>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights, experiences, and lessons learned on my journey as a developer and designer
          </p>
          <p className="text-lg korean-text text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-3">
            개발자이자 디자이너로서의 여정에서 얻은 통찰, 경험, 교훈을 공유합니다
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category.name
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

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden bg-gradient-to-br from-card/95 via-card/90 to-secondary/5 backdrop-blur-md border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl pattern-korean-wave relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-0 relative z-10">
                <div className="flex flex-col">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs text-secondary border-secondary/30 bg-secondary/5">
                        <span>{post.category}</span>
                        <span className="ml-1 korean-text">{post.koreanCategory}</span>
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-base korean-text text-primary font-medium">{post.korean}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-muted-foreground leading-relaxed line-clamp-1 mb-2">{post.excerpt}</p>
                      <p className="korean-text text-muted-foreground/80 leading-relaxed line-clamp-1 text-sm">
                        {post.koreanExcerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>Sarthak</span>
                          <span className="ml-1 korean-text text-xs">사르탁</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.date)}
                          </div>
                          <div className="korean-text text-xs">{formatKoreanDate(post.date)}</div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="korean-text text-xs">{post.koreanReadTime}</div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-12 text-primary-foreground shadow-2xl border-2 border-primary-foreground/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16 pattern-dancheong"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-semibold mb-2">Stay Updated</h3>
              <p className="text-xl korean-text font-medium mb-6">최신 소식 받기</p>
              <p className="mb-4 max-w-2xl mx-auto opacity-90 text-lg leading-relaxed">
                Subscribe to get notified about new blog posts and insights on development, design, and technology.
              </p>
              <p className="korean-text mb-8 max-w-xl mx-auto opacity-80 text-base leading-relaxed">
                개발, 디자인, 기술에 대한 새로운 블로그 포스트와 통찰을 받아보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email • 이메일 입력"
                  className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md"
                />
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  <span>Subscribe</span>
                  <span className="ml-1 korean-text text-sm">구독</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
