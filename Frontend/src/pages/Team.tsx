import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { instructor, ta } from "./_team_helpers";

const Team = () => {
  const teamMembers = [
    {
      name: "Advait Andhale",
      college: "Indian Institute of Technology Gandhinagar",
      year: "Student",
      course: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Advait",
      socials: {
        linkedin: "https://www.linkedin.com/in/advait87/",
        github: "https://github.com/....",
        email: "mailto:advait.andhale@iitgn.ac.in",
      },
    },
    {
      name: "Bhakti Prasad Swain",
      college: "Indian Institute of Technology Gandhinagar",
      year: "Student",
      course: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhakti",
      socials: {
        linkedin: "https://www.linkedin.com/in/bhakti-prasad-swain-5026372a7/",
        github: "...",
        email: "mailto:bhakti.swain@iitgn.ac.in",
      },
    },
    {
      name: "Laxmidhar Panda",
      college: "Indian Institute of Technology Gandhinagar",
      year: "Student",
      course: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laxmidhar",
      socials: {
        linkedin: "https://www.linkedin.com/in/laxmidhar-panda-172993203/",
        github: "https://github.com/....",
        email: "mailto:24110185@iitgn.ac.in",
      },
    },
    {
      name: "Pranjal Goyal",
      college: "Indian Institute of Technology Gandhinagar",
      year: "Student",
      course: "Computer Science & Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pranjal",
      socials: {
        linkedin: "https://www.linkedin.com/in/pranjal-goyal-339312320/",
        github: "https://github.com/....",
        email: "mailto:pranjal.goyal@iitgn.ac.in",
      },
    },
    {
      name: "Karna Pardheev Sai",
      college: "Indian Institute of Technology Gandhinagar",
      year: "Student",
      course: "Dual Major in Computer Science & Chemical Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karna",
      socials: {
        linkedin: "https://www.linkedin.com/in/pardheev-sai-karna-a47906223/",
        github: "https://github.com/....",
        email: "mailto:saikarna@iitgn.ac.in",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Meet Our Team</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              The people behind Intelligent Text Analyzer — instructors, researchers, and students.
            </p>
          </div>

          {/* Featured: Instructor & TA */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-background">
              <div className="flex gap-6 items-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-28 h-28 rounded-full border-2 border-primary/20 shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold">{instructor.name}</h2>
                  <p className="text-sm text-primary font-medium">{instructor.title}</p>
                  <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside">
                    {instructor.education.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Email: <span className="font-mono">{instructor.email}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    <a href={instructor.website} className="text-primary underline">
                      Website
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-6 items-center">
                <img
                  src={ta.image}
                  alt={ta.name}
                  className="w-28 h-28 rounded-full border-2 border-primary/20 shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold">{ta.name}</h2>
                  <p className="text-sm text-primary font-medium">{ta.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{ta.short}</p>
                  <div className="mt-3 flex gap-3">
                    <a href={ta.socials.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Students grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full border-2 border-primary/20 shadow"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.course}</p>
                  <p className="text-sm text-muted-foreground">{member.college}</p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href={member.socials.github}
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      aria-label="GitHub profile"
                    >
                      <Github className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={member.socials.email}
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;