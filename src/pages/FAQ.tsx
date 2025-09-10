import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "Buying",
      questions: [
        {
          question: "How do I place an order?",
          answer: "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to create an account and provide payment and shipping information."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
        }
      ]
    },
    {
      category: "Selling",
      questions: [
        {
          question: "How do I start selling?",
          answer: "Create a seller account, verify your identity, and start listing your products. We'll guide you through the process step by step."
        },
        {
          question: "What are the selling fees?",
          answer: "We charge a small percentage of each sale plus payment processing fees. Check our seller terms for detailed fee structure."
        },
        {
          question: "How do I get paid?",
          answer: "Payments are processed automatically and deposited to your linked bank account or PayPal within 3-5 business days after the buyer receives their item."
        }
      ]
    },
    {
      category: "Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-7 business days. Express shipping options are available for faster delivery."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 200 countries worldwide. International shipping times and costs vary by destination."
        },
        {
          question: "What if my package is lost or damaged?",
          answer: "We provide shipping insurance on all orders. Contact our support team immediately if your package is lost or arrives damaged."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "Most items can be returned within 30 days of delivery for a full refund. Items must be in original condition with tags attached."
        },
        {
          question: "How do I return an item?",
          answer: "Go to your order history, select the item you want to return, and follow the return instructions. We'll provide a prepaid return label for most items."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our marketplace
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search FAQs</CardTitle>
              <CardDescription>Type keywords to find specific answers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {filteredFAQ.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No FAQs found matching your search.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredFAQ.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Still need help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex gap-4">
                <a href="/contact" className="text-primary hover:underline">Contact Support</a>
                <a href="/help" className="text-primary hover:underline">Help Center</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;