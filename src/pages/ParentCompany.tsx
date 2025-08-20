import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, Award } from "lucide-react";

const Company = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="/" className="flex items-center gap-2">
            
            <span className="text-lg font-semibold">Leap Developments Ltd.</span>
          </a>
          <a href="/">
            <Button variant="outline" size="sm">Back to App</Button>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Established 2021
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Leap Developments Ltd.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pioneering the future of business automation through artificial intelligence and innovative mobile solutions.
          </p>
        </section>

        {/* Company Info Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-border/60 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To simplify business operations through intelligent automation, making professional bookkeeping accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Privacy & Security</h3>
              </div>
              <p className="text-muted-foreground">
                We implement enterprise-grade security measures to protect your financial data with end-to-end encryption.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Innovation</h3>
              </div>
              <p className="text-muted-foreground">
                Leveraging cutting-edge OCR technology and AI to revolutionize how businesses handle receipts and bookkeeping.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Company Details */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-border/60 bg-card/50 backdrop-blur">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Legal Name</h4>
                      <p className="text-muted-foreground">Leap Developments Ltd.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Founded</h4>
                      <p className="text-muted-foreground">2021</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Industry</h4>
                      <p className="text-muted-foreground">Financial Technology & Business Automation</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Headquarters</h4>
                      <p className="text-muted-foreground">Canada</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Our Products</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">zenyAI Mobile App</h4>
                      <p className="text-muted-foreground">AI-powered OCR bookkeeping solution for iOS and Android</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Core Features</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Intelligent receipt scanning</li>
                        <li>• Automated data extraction</li>
                        <li>• Real-time expense tracking</li>
                        <li>• Cloud synchronization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>For business inquiries and support</p>
            <p className="font-medium">admin@leapholdings.ca</p>
          </div>
          <div className="mt-8">
            <a href="/">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
                Try zenyAI App
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/4ba0d2ec-0ca0-4680-8dc3-2ec35b99e0f7.png"
                alt="zenyAI Technologies logo"
                className="h-6 w-6"
              />
              <span className="font-semibold">Leap Developments Ltd.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Leap Developments Ltd. All rights reserved.</p>
              <a href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Company;