import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/integrations/backend/client";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactEmail(formData);

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, feedback, or partnership inquiries—get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="p-10 shadow-xl backdrop-blur-md border-primary/10 animate-in fade-in zoom-in-50 duration-700">
            <h2 className="text-3xl font-semibold mb-8">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendHorizontal className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/10 bg-background/60 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@safetextai.com</p>
                  <p className="text-muted-foreground">support@safetextai.com</p>
                </div>
              </div>
            </Card>

           {/* LinkedIn */}
<Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/10 bg-background/60 backdrop-blur-sm">
  <div className="flex items-start gap-4">
    <div className="p-4 rounded-xl bg-primary/10">
      <Linkedin className="w-7 h-7 text-primary" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
      <p className="text-muted-foreground">Stay connected with us</p>

      {/* Two links side by side */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/pranjal-goyal-339312320/"
          target="_blank"
          className="text-primary font-medium hover:underline"
        >
          Pranjal Goyal
        </a>

        <a
          href="https://www.linkedin.com/in/advait87/"
          target="_blank"
          className="text-primary font-medium hover:underline"
        >
          Advait Andhale
        </a>
      </div>
    </div>
  </div>
</Card>



            {/* Address */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/10 bg-background/60 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">IIT Gandhinagar</p>
                  <p className="text-muted-foreground">AB-13, CSE Block</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
