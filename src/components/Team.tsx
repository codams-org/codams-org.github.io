import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import ceoPhoto from "@/assets/ceo-photo.jpg";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Led by experienced professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-md w-full hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-6">
                  <AvatarImage src={ceoPhoto} alt="CEO & Founder" />
                  <AvatarFallback>CF</AvatarFallback>
                </Avatar>
                
                <h3 className="text-2xl font-bold mb-2">Mukta Gupta</h3>
                <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Experience</h4>
                    <p className="text-sm">11+ years in Software Industry</p>
                  </div>
                  
                <a
                  href="https://www.linkedin.com/in/muktagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
