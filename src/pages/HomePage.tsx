import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Sparkles, Zap, FileText, BarChart3, Bot } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Create Intelligent Forms with AI Assistance
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Gen Forms AI helps you build smart forms that adapt to your users, collect data efficiently, and
                  provide valuable insights.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/form-builder">
                  <Button size="lg" className="gap-1">
                    Start Building <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg bg-muted/30 border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-muted/30 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything you need to build intelligent forms
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our platform combines the power of AI with intuitive design tools to help you create forms that convert.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI-Powered</CardTitle>
                <CardDescription>
                  Leverage AI to create smart forms that adapt to user inputs and provide real-time suggestions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Drag & Drop</CardTitle>
                <CardDescription>
                  Intuitive drag-and-drop interface makes form creation simple and efficient.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Gain insights from form submissions with detailed analytics and reporting.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Create forms in minutes, not hours
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our streamlined process makes form creation faster and more efficient than ever before.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                1
              </div>
              <h3 className="text-xl font-bold">Choose a Template</h3>
              <p className="mt-2 text-muted-foreground">
                Start with one of our pre-designed templates or create a form from scratch.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                2
              </div>
              <h3 className="text-xl font-bold">Customize with AI</h3>
              <p className="mt-2 text-muted-foreground">
                Use our AI tools to enhance your form with smart fields and validation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                3
              </div>
              <h3 className="text-xl font-bold">Publish & Collect</h3>
              <p className="mt-2 text-muted-foreground">
                Share your form and start collecting responses with real-time analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by businesses worldwide</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                See what our customers have to say about Gen Forms AI.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-base">Sarah Johnson</CardTitle>
                    <CardDescription>Marketing Director</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Gen Forms AI has transformed how we collect customer feedback. The AI suggestions have increased our
                  completion rates by 40%."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-base">Michael Chen</CardTitle>
                    <CardDescription>Product Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The analytics provided by Gen Forms AI have given us invaluable insights into our user behavior and
                  preferences."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-base">Emily Rodriguez</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "As a small business, I needed something easy to use but powerful. Gen Forms AI delivers exactly that
                  and more."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to transform your forms?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of businesses using Gen Forms AI to create smarter forms and collect better data.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/form-builder">
                <Button size="lg" className="gap-1">
                  Get Started Free <Zap className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

