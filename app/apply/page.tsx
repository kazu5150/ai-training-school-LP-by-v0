import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Apply() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">無料カウンセリングを申し込む</h2>
        <img src="https://picsum.photos/800/400" alt="Apply Image" className="mx-auto mb-8" />
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
        <div className="text-center mt-8">
          <Link href="/" className="text-primary hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </section>
  )
} 