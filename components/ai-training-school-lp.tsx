'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Code, Cpu, GraduationCap } from "lucide-react"

export function AiTrainingSchoolLp() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
              ホーム
            </a>
            <a href="/features" className="text-sm font-medium transition-colors hover:text-primary">
              特徴
            </a>
            <a href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
              コース
            </a>
            <a href="/apply" className="text-sm font-medium transition-colors hover:text-primary">
              申し込み
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            AI時代をリードする人材になろう
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            最先端のAI技術を学び、未来のテクノロジーリーダーになるためのトレーニングスクールです。
          </p>
          <Button className="mt-8" size="lg">
            無料カウンセリングを予約
          </Button>
        </section>
      </main>
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 AIトレーニングスクール. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:underline">
              プライバシーポリシー
            </a>
            <a href="#" className="text-muted-foreground hover:underline">
              利用規約
            </a>
            <a href="#" className="text-muted-foreground hover:underline">
              お問い合わせ
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}