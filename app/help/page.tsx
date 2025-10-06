import { Search, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQHelpCenter() {
  const faqData = [
    {
      id: "create-course",
      question: "How do I create a new course or class?",
      answer:
        "Go to the dashboard and in the sidebar you will find courses from which you will find a create course button at the top right corner.",
    },
    {
      id: "upload-materials",
      question: "How do I upload teaching materials?",
      answer:
        "In each course, you’ll find an option to upload files such as PDFs, slides, videos, or links. Students will be able to view or download them directly from the course page.",
    },
    {
      id: "track-progress",
      question: "Can I track my students’ progress?",
      answer: "No, it is coming soon.",
    },
    {
      id: "assignments",
      question: "How do I give assignments or quizzes?",
      answer:
        "Currently, you can't give assignments or quizzes on the platform. It is coming soon.",
    },
    {
      id: "communication",
      question: "How do I communicate with my students?",
      answer:
        "The platform currently doesn't have a messaging tool. It is coming soon. Meanwhile, you can use the email or phone number to communicate with your students.",
    },
    {
      id: "mobile-app",
      question: "Can I use the platform on my phone?",
      answer: "Yes! The platform works on both desktop and mobile browsers.",
    },
    {
      id: "technical-help",
      question: "What if I need technical help?",
      answer:
        "If you encounter issues, visit the Help section in your dashboard or contact the volunteer group’s support team.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-green-900 font-bold mb-4 sm:mb-6 text-balance">
            How can we help you?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
            Find answers to common questions or get in touch with our support
            team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
            <Input
              placeholder="Search for help articles, guides, or topics..."
              className="border-gray-200 focus-visible:ring-0 focus:border-green-400 focus-visible:ring-green-400 focus-visible:ring-offset-0 pl-10 sm:pl-12 py-4 sm:py-7 text-sm sm:text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-green-900">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Quick answers to questions you might have about our platform.
            </p>
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-green-200 last:border-b-0 bg-white/20"
                  >
                    <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-6 text-left hover:no-underline hover:bg-accent/50 transition-colors">
                      <span className="text-sm sm:text-base lg:text-lg font-medium text-foreground pr-2 sm:pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-8 sm:py-12 lg:py-16 px-4 bg-muted/30 text-green-900"
      >
        <div className="container max-w-4xl">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-green-900">
              Get in Touch
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              {"Can't find what you're looking for? We're here to help."}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="w-full">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h4 className="text-lg sm:text-xl text-green-900 font-semibold text-foreground mb-4 sm:mb-6">
                  Contact Information
                </h4>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1 text-sm sm:text-base">
                        Bemnet Zewdu
                      </h5>
                      <p className="text-muted-foreground mb-2 text-xs sm:text-sm">
                        Monday - Friday, 9 AM - 6 PM EST
                      </p>
                      <a
                        href="tel:+2519-29110489"
                        className="text-primary underline text-sm sm:text-base"
                      >
                        +2519 29110489
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1 text-sm sm:text-base">
                        Ahadu Sefefe
                      </h5>
                      <p className="text-muted-foreground mb-2 text-xs sm:text-sm">
                        Monday - Friday, 9 AM - 6 PM EST
                      </p>
                      <a
                        href="tel:+251-904-955-945"
                        className="text-primary underline text-sm sm:text-base"
                      >
                        +251 904955945
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Contact Methods */}
            <Card className="w-full">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h4 className="text-lg sm:text-xl text-green-900 font-semibold text-foreground mb-4 sm:mb-6">
                  Other Ways to Reach Us
                </h4>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1 text-sm sm:text-base">
                        Email Support
                      </h5>
                      <p className="text-muted-foreground mb-2 text-xs sm:text-sm">
                        Get help via email
                      </p>
                      <a
                        href="mailto:support@4hlms.com"
                        className="text-primary underline text-sm sm:text-base"
                      >
                        support@4hlms.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
