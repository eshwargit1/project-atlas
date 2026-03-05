import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const members = [
  {
    name: "Sharvesh S",
    id: "3512310024",
    role: "Developer & Researcher",
  },
  {
    name: "Sibiraj S",
    id: "3512310025",
    role: "Developer & Researcher",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent uppercase tracking-widest">Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Meet the Team</h2>
          <p className="text-muted-foreground mt-4">3rd Year, B.Tech — Information Technology</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-2xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 glass rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-mono">{member.id}</p>
              <p className="text-sm text-muted-foreground mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
