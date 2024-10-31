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
        <section id="features" className="py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">AIトレーニングスクールの特徴</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Cpu className="w-8 h-8 mb-2" />
                  <CardTitle>最新のAI技術</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>常に最新のAI技術とトレンドを学べるカリキュラム</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="w-8 h-8 mb-2" />
                  <CardTitle>実践的なプロジェクト</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>実際の問題を解決するプロジェクトベースの学習</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GraduationCap className="w-8 h-8 mb-2" />
                  <CardTitle>エキスパート講師陣</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>業界で活躍する専門家による直接指導</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="w-8 h-8 mb-2" />
                  <CardTitle>柔軟な学習スタイル</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>オンラインと対面を組み合わせた柔軟な学習環境</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="courses" className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">提供コース</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI基礎コース</CardTitle>
                  <CardDescription>AIの基本概念と応用を学ぶ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>機械学習の基礎</li>
                    <li>ディープラーニング入門</li>
                    <li>Python programming</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI応用コース</CardTitle>
                  <CardDescription>実践的なAIプロジェクトに取り組む</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>自然言語処理</li>
                    <li>コンピュータビジョン</li>
                    <li>強化学習</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AIビジネス戦略コース</CardTitle>
                  <CardDescription>AIをビジネスに活用する方法を学ぶ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>AIビジネスモデル</li>
                    <li>AI倫理と法律</li>
                    <li>AI導入戦略</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="apply" className="py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">無料カウンセリングを申し込む</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" placeholder="山田 太郎" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" placeholder="taro@example.com" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input id="phone" placeholder="090-1234-5678" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea id="message" placeholder="ご質問やご要望があればお書きください" />
                  </div>
                  <Button className="w-full" type="submit">
                    カウンセリングを申し込む
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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