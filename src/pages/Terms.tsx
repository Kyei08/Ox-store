import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  By accessing and using this marketplace website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access the materials on our marketplace for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-muted-foreground">
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Buying and Selling</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  Our marketplace facilitates transactions between buyers and sellers. As a platform, we do not take ownership of items listed for sale. 
                  All sales are conducted between individual users.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Seller Responsibilities:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Provide accurate item descriptions and photos</li>
                      <li>Honor all sales and ship items promptly</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Buyer Responsibilities:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Pay for items promptly after purchase</li>
                      <li>Communicate with sellers in good faith</li>
                      <li>Follow our return and refund policies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Items</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  The following items are prohibited from being listed or sold on our marketplace:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Illegal items or services</li>
                  <li>Counterfeit or replica items</li>
                  <li>Hazardous or dangerous materials</li>
                  <li>Adult content or services</li>
                  <li>Items that infringe on intellectual property rights</li>
                  <li>Weapons, ammunition, or explosives</li>
                  <li>Prescription drugs or medical devices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Payment and Fees</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  We charge fees for certain services provided through our marketplace. All fees are clearly disclosed before you incur them.
                </p>
                <p className="text-muted-foreground">
                  Payment processing is handled by secure third-party providers. We do not store your payment information on our servers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                  to understand our practices regarding the collection and use of your personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  In no event shall our marketplace or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                  the materials on our website, even if we or our authorized representative has been notified orally or in writing 
                  of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound 
                  by the then current version of these terms of service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: legal@marketplace.com</p>
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

export default Terms;