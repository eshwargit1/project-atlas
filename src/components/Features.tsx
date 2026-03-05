import { motion } from "framer-motion";
import { Globe, Brain, ShieldCheck, BarChart3, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Learning Core",
    description: "BERT + ResNet50 multimodal architecture for comprehensive analysis.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Detect misinformation across diverse languages and regions.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable AI",
    description: "Transparent predictions with visual explanations of model decisions.",
  },
  {
    icon: BarChart3,
    title: "Real-time Monitoring",
    description: "Future-ready architecture for live social media analysis.",
  },
  {
    icon: Zap,
    title: "High Accuracy",
    description: "Multimodal fusion significantly outperforms text-only methods.",
  },
  {
    icon: Layers,
    title: "Deepfake Ready",
    description: "Extensible framework for video deepfake detection capabilities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent uppercase tracking-widest">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Key Features</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all hover:glow-primary"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
