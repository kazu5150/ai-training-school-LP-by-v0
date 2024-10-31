import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function Courses() {
  return (
    <section className="py-24">
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
        <div className="text-center mt-8">
          <Link href="/" className="text-primary hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </section>
  )
} 