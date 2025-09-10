import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, 
                  or contact us for support.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Name, email address, and phone number</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely by third parties)</li>
                      <li>Account preferences and settings</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Usage Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Pages visited and time spent on our site</li>
                      <li>Search queries and browsing behavior</li>
                      <li>Device information and IP addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process transactions and send related information</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our website and develop new features</li>
                  <li>Detect and prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With service providers who help us operate our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                  <li>With your consent or at your direction</li>
                  <li>With other users when you make purchases or sales (limited to transaction details)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p>• SSL encryption for data transmission</p>
                  <p>• Secure data storage with encryption at rest</p>
                  <p>• Regular security audits and monitoring</p>
                  <p>• Limited access to personal information on a need-to-know basis</p>
                  <p>• Regular security training for our employees</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Types of Cookies:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand site usage</li>
                      <li>Preference cookies to remember your settings</li>
                      <li>Marketing cookies for personalized advertising</li>
                    </ul>
                  </div>
                  
                  <p className="text-muted-foreground">
                    You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  You have certain rights regarding your personal information:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your account and personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. 
                  We may retain certain information for legitimate business purposes or as required by law, even after you close your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                  If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. International Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. 
                  Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: privacy@marketplace.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Market Street, San Francisco, CA 94105</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;