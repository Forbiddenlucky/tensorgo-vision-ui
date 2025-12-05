import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
              <span className="font-semibold text-sm text-primary-foreground">AK</span>
            </div>
            <div>
              <p className="font-medium">Abhishek Kushwaha</p>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
          </div>

          {/* Center Text */}
          <p className="text-sm text-muted-foreground">
            Designed for TensorGo
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-md border border-border bg-card hover:bg-secondary transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abhishek Kushwaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
