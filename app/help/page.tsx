import { Search, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
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
      id: "getting-started",
      question: "How do I get started as a teacher?",
      answer:
        "After creating your account, you can set up your teacher profile and request to join your volunteer group. Once approved, you’ll be able to create classes and invite learners.",
    },
    {
      id: "create-course",
      question: "How do I create a new course or class?",
      answer:
        "Go to your dashboard and select 'Create Course.' From there, you can add a title, description, and upload your lessons, resources, or assignments. You can also schedule sessions and add quizzes if needed.",
    },
    {
      id: "upload-materials",
      question: "How do I upload teaching materials?",
      answer:
        "In each course, you’ll find an option to upload files such as PDFs, slides, videos, or links. Learners will be able to view or download them directly from the course page.",
    },
    {
      id: "track-progress",
      question: "Can I track my learners’ progress?",
      answer:
        "Yes! Each course comes with a progress dashboard where you can see which lessons learners have completed, their quiz results, and overall engagement.",
    },
    {
      id: "assignments",
      question: "How do I give assignments or quizzes?",
      answer:
        "Within your course, select 'Add Assignment' or 'Add Quiz.' You can set deadlines, upload instructions, and review submissions once learners complete them.",
    },
    {
      id: "communication",
      question: "How do I communicate with my learners?",
      answer:
        "The platform includes discussion boards and messaging tools where you can answer questions, share updates, and encourage learners. Notifications ensure students don’t miss important announcements.",
    },
    {
      id: "mobile-app",
      question: "Can I use the platform on my phone?",
      answer:
        "Yes! The platform works on both desktop and mobile browsers. A mobile app is also available, so you can create lessons, check progress, and respond to learners on the go.",
    },
    {
      id: "technical-help",
      question: "What if I need technical help?",
      answer:
        "If you encounter issues, visit the Help section in your dashboard or contact the volunteer group’s support team. Guides and tutorials are also available to walk you through common tasks.",
    },
  ];

  return (
    <div>
      {/* Header */}

      {/* Hero Section */}
      <section className="">
        <div className="container">
          <h2 className="text-2xl md:text-3xl text-green-900 font-bold mb-6 text-balance">
            How can we help you?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Find answers to common questions, browse our documentation, or get
            in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for help articles, guides, or topics..."
              className="border-gray-200 focus-visible:ring-0 focus:border-green-400 focus-visible:ring-green-400 focus-visible:ring-offset-0 pl-12 py-7"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-green-900">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground text-lg">
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
                    <AccordionTrigger className="px-6 py-6 text-left hover:no-underline hover:bg-accent/50 transition-colors">
                      <span className="text-lg font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">
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
      <section id="contact" className="py-16 px-4 bg-muted/30 text-green-900">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-green-900">
              Get in Touch
            </h3>
            <p className="text-muted-foreground text-lg">
              {"Can't find what you're looking for? We're here to help."}
            </p>
          </div>

          {/* Contact Information */}
          <Card className="w-1/2">
            <CardContent className="p-8">
              <h4 className="text-xl text-green-900 font-semibold text-foreground mb-6">
                Contact Information
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Bemnet Zewdu
                    </h5>
                    <p className="text-muted-foreground mb-2">
                      Monday - Friday, 9 AM - 6 PM EST
                    </p>
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-primary underline"
                    >
                      +2519 29110489
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Ahadu Sefefe
                    </h5>
                    <p className="text-muted-foreground mb-2">
                      Monday - Friday, 9 AM - 6 PM EST
                    </p>
                    <a
                      href="tel:+251-904-955-945"
                      className="text-primary underline"
                    >
                      +251 904955945
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
