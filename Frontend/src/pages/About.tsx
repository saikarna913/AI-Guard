import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Advait Andhale",
      role: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Advait",
    },
    {
      name: "Pranjal Goyal",
      role: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pranjal",
    },
    {
      name: "Bhakti Prasad Swain",
      role: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhakti",
    },
    {
      name: "Laxmidhar Panda",
      role: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laxmidhar",
    },
      {
      name: "Karna Pardheev Sai",
      role: "Dual Major in Computer Science & Chemical Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karna",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4">About SafeText AI</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Building safer online communities through advanced AI-powered text classification
          </p>

          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              SafeText AI leverages cutting-edge machine learning models to help organizations 
              identify and moderate potentially harmful content. Our technology analyzes text 
              in real-time, providing accurate classifications to support safer digital spaces.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in transparency, accuracy, and ethical AI. Our models are continuously 
              improved to reduce bias and increase precision, ensuring fair and reliable 
              content moderation for everyone.
            </p>
          </Card>

          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                {/* bio removed by request; keeping image, name and role only */}
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
