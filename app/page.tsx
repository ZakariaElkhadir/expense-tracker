import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { PieChartIcon as ChartPieIcon, CreditCardIcon, PiggyBankIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <ChartPieIcon className="w-8 h-8" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">Welcome to Expense Tracker</CardTitle>
          <CardDescription className="text-gray-600 mt-2">Manage your finances with ease</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-700">
            Track your expenses, set budgets, and achieve your financial goals with our easy-to-use platform.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <FeatureItem icon={<CreditCardIcon className="w-6 h-6" />} title="Track Expenses" />
            <FeatureItem icon={<PiggyBankIcon className="w-6 h-6" />} title="Set Budgets" />
          </div>
          <Testimonial />
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Link href="/login" className="w-full">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 transform hover:scale-105">
              Login
            </Button>
          </Link>
          <Link href="/register" className="w-full">
            <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300">
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}

function FeatureItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
      {icon}
      <span className="font-medium text-gray-700">{title}</span>
    </div>
  )
}

function Testimonial() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-700 italic">"This app has completely transformed how I manage my finances. Highly recommended!"</p>
      <p className="text-gray-600 font-medium mt-2">- Sarah D.</p>
    </div>
  )
}

