import { motion } from "framer-motion";
import { FileText, Image, Combine, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Text Analysis",
    description: "BERT extracts contextual word embeddings from news articles, capturing semantic meaning and linguistic patterns indicative of misinformation.",
    color: "primary",
  },
  {
    icon: Image,
    title: "Image Analysis",
    description: "ResNet50 processes associated images, extracting visual features to detect manipulated or misleading visual content.",
    color: "accent",
  },
  {
    icon: Combine,
    title: "Feature Fusion",
    description: "Text and image features are fused through a deep neural network, creating a comprehensive multimodal representation.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Classification",
    description: "The fused features are passed through dense layers to classify the article as Real or Fake with explainable confidence scores.",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 grid-dots opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0" />
              )}

              <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.color === "primary" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">STEP {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
