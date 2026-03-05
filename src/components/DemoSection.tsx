import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Image, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";

const DemoSection = () => {
  const [newsText, setNewsText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { verdict: "real" | "fake"; confidence: number; textScore: number; imageScore: number }>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!newsText.trim()) return;
    setIsAnalyzing(true);
    setResult(null);

    // Simulated analysis
    setTimeout(() => {
      const isFake = newsText.toLowerCase().includes("shocking") || newsText.toLowerCase().includes("unbelievable") || Math.random() > 0.5;
      setResult({
        verdict: isFake ? "fake" : "real",
        confidence: Math.round((75 + Math.random() * 20) * 10) / 10,
        textScore: Math.round((60 + Math.random() * 35) * 10) / 10,
        imageScore: imageFile ? Math.round((55 + Math.random() * 40) * 10) / 10 : 0,
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const reset = () => {
    setNewsText("");
    setImageFile(null);
    setImagePreview(null);
    setResult(null);
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 grid-dots opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Interactive</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Try the Demo</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Paste a news article and optionally upload an image to analyze it for misinformation.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            {/* Text input */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <FileText className="w-4 h-4 text-primary" />
                News Article Text
              </label>
              <textarea
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                placeholder="Paste a news headline or article here..."
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none font-mono text-sm"
              />
            </div>

            {/* Image input */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Image className="w-4 h-4 text-accent" />
                Associated Image (Optional)
              </label>
              {imagePreview ? (
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                  <button onClick={() => { setImageFile(null); setImagePreview(null); }} className="absolute top-2 right-2 px-3 py-1 rounded bg-background/80 text-xs font-medium hover:bg-background transition-colors">Remove</button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-3 h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/40 transition-colors">
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Click to upload image</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!newsText.trim() || isAnalyzing}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary font-semibold text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Loader2 className="w-5 h-5 opacity-0" />}
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </button>
              <button onClick={reset} className="px-6 py-3 rounded-lg border border-border bg-secondary/50 font-medium text-secondary-foreground hover:bg-secondary transition-colors">
                Reset
              </button>
            </div>

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 overflow-hidden"
                >
                  <div className={`rounded-xl p-6 border ${result.verdict === "fake" ? "border-destructive/30 bg-destructive/5" : "border-primary/30 bg-primary/5"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {result.verdict === "fake" ? (
                        <AlertTriangle className="w-8 h-8 text-destructive" />
                      ) : (
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      )}
                      <div>
                        <div className={`text-2xl font-bold ${result.verdict === "fake" ? "text-destructive" : "text-primary"}`}>
                          {result.verdict === "fake" ? "Likely Fake" : "Likely Real"}
                        </div>
                        <div className="text-sm text-muted-foreground">Confidence: {result.confidence}%</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="text-xs font-mono text-muted-foreground mb-1">Text Score</div>
                        <div className="text-xl font-bold font-mono">{result.textScore}%</div>
                        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-primary transition-all" style={{ width: `${result.textScore}%` }} />
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="text-xs font-mono text-muted-foreground mb-1">Image Score</div>
                        <div className="text-xl font-bold font-mono">{result.imageScore > 0 ? `${result.imageScore}%` : "N/A"}</div>
                        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-accent transition-all" style={{ width: `${result.imageScore}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
