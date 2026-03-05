import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">FND</span>
            <span className="text-muted-foreground text-sm">| Fake News Detector</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#team" className="hover:text-foreground transition-colors">Team</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 FND Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
