import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "json", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for common patterns
  const highlightCode = (code: string) => {
    // Escape HTML first
    let highlighted = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // JSON/JavaScript patterns
    highlighted = highlighted
      // Strings (both single and double quotes)
      .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="text-emerald-400">"$1"</span>')
      .replace(/'([^'\\]*(\\.[^'\\]*)*)'/g, '<span class="text-emerald-400">\'$1\'</span>')
      // Numbers
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-amber-400">$1</span>')
      // Booleans and null
      .replace(/\b(true|false|null)\b/g, '<span class="text-purple-400">$1</span>')
      // Property keys (before colon in JSON)
      .replace(/(&lt;[^&]*&gt;)/g, '<span class="text-cyan-400">$1</span>')
      // HTML/XML tags
      .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-rose-400">$2</span>')
      // Attributes
      .replace(/([\w-]+)(=)/g, '<span class="text-amber-300">$1</span>$2');

    return highlighted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-6 rounded-xl overflow-hidden border border-border/50 bg-[#1a1b26] shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1f2133] border-b border-border/30">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="text-xs text-muted-foreground font-mono">{title}</span>
          )}
          {language && !title && (
            <span className="text-xs text-muted-foreground font-mono uppercase">{language}</span>
          )}
        </div>
        
        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code 
            className="font-mono text-gray-300"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          />
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeBlock;
