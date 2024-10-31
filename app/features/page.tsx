import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Cpu, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Features() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">AIトレーニングスクールの特徴</h2>
        <img src="https://picsum.photos/800/400" alt="Features Image" className="mx-auto mb-8" />
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
        <div className="text-center mt-8">
          <Link href="/" className="text-primary hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </section>
  )
} 