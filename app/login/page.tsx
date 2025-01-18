'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PieChartIcon as ChartPieIcon } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Login attempted with:', email, password)
    router.push('/dashboard')
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <ChartPieIcon className="w-8 h-8" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">Login to Expense Tracker</CardTitle>
          <CardDescription className="text-gray-600 mt-2">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300">
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <div className="text-sm text-gray-600 text-center">
            Don't have an account?{' '}
            <Link href="/register" className="text-orange-500 hover:underline">
              Register here
            </Link>
          </div>
          <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline text-center">
            Forgot your password?
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}

