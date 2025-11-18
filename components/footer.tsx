import { Leaf } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link className="w-14 h-14" href="/">
                <img src="/logo.png" />
              </Link>
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf size={20} className="text-primary-foreground" />
              </div> */}
              <span className="font-bold text-lg">GreenTravel</span>
            </div>
            <p className="text-background/70 text-sm">
              Sustainable tourism for a better Morocco.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Communities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Impact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>
            &copy; 2025 GreenTravel.ma. All rights reserved. Committed to
            sustainable tourism in Morocco.
          </p>
        </div>
      </div>
    </footer>
  );
}
