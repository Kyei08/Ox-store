import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [type]: type === 'essential' ? true : !prev[type] // Essential cookies cannot be disabled
    }));
  };

  const savePreferences = () => {
    // Handle saving preferences
    console.log('Preferences saved:', preferences);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="essential" className="text-base font-semibold">Essential Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <Switch
                      id="essential"
                      checked={preferences.essential}
                      disabled={true}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="analytics" className="text-base font-semibold">Analytics Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <Switch
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={() => handlePreferenceChange('analytics')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="marketing" className="text-base font-semibold">Marketing Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Used to personalize ads and measure advertising effectiveness.
                      </p>
                    </div>
                    <Switch
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={() => handlePreferenceChange('marketing')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="preferences" className="text-base font-semibold">Preference Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Remember your settings and preferences for a better experience.
                      </p>
                    </div>
                    <Switch
                      id="preferences"
                      checked={preferences.preferences}
                      onCheckedChange={() => handlePreferenceChange('preferences')}
                    />
                  </div>
                  
                  <Button onClick={savePreferences} className="w-full">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">1. Essential Cookies</h4>
                    <p className="text-muted-foreground mb-2">
                      These cookies are necessary for the website to function and cannot be switched off in our systems.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Session management and authentication</li>
                      <li>Shopping cart functionality</li>
                      <li>Security and fraud prevention</li>
                      <li>Website accessibility features</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">2. Analytics Cookies</h4>
                    <p className="text-muted-foreground mb-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Google Analytics for website usage statistics</li>
                      <li>Page view tracking and user journey analysis</li>
                      <li>Performance monitoring and error reporting</li>
                      <li>A/B testing for website improvements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">3. Marketing Cookies</h4>
                    <p className="text-muted-foreground mb-2">
                      These cookies are used to track visitors across websites and deliver more relevant advertising.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Personalized advertising based on browsing behavior</li>
                      <li>Social media integration and sharing</li>
                      <li>Retargeting campaigns</li>
                      <li>Conversion tracking for advertising effectiveness</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">4. Preference Cookies</h4>
                    <p className="text-muted-foreground mb-2">
                      These cookies enable the website to remember information that changes the way it behaves or looks.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Language and region preferences</li>
                      <li>Theme and display settings</li>
                      <li>Recently viewed items</li>
                      <li>Customized user interface elements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We may also use third-party services that set cookies on your device. These include:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing (Stripe, PayPal)</li>
                  <li><strong>Social Media:</strong> For social sharing and login functionality</li>
                  <li><strong>Customer Support:</strong> For live chat and help desk services</li>
                  <li><strong>Content Delivery:</strong> For faster content delivery and website performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Settings:</h4>
                    <p className="text-muted-foreground mb-2">
                      Most web browsers allow you to control cookies through their settings preferences.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Chrome: Settings → Privacy and security → Cookies</li>
                      <li>Firefox: Options → Privacy & Security → Cookies</li>
                      <li>Safari: Preferences → Privacy → Cookies</li>
                      <li>Edge: Settings → Cookies and site permissions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Opt-Out Tools:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Google Analytics opt-out browser add-on</li>
                      <li>Digital Advertising Alliance opt-out page</li>
                      <li>Network Advertising Initiative opt-out tool</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Consent</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. 
                  You can withdraw your consent at any time by changing your cookie preferences above or adjusting your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. Please check this page periodically for updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us:
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

export default Cookies;