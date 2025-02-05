import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary neon-glow">
              CyberScop
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Your source for futuristic tech news</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </Link>
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CyberScop News. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

