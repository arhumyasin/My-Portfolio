"use client";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-2">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ animationDelay: "200ms" }}
          >
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div
          className="bg-card border-zinc-900 border-2 rounded-lg shadow-sm p-6 md:p-8 max-w-xl mx-auto ring-transition"
          style={{ animationDelay: "300ms" }}
        >
          <div className="space-y-6 text-center">

            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2">
                <Mail size={18} /> Email
              </h3>
              <a
                href="mailto:arhumvista@gmail.com"
                className="text-blue-600 hover:underline text-sm break-all"
              >
                arhumvista@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2">
                <Phone size={18} /> Phone
              </h3>
              <a
                href="tel:+923000000000"
                className="text-blue-600 hover:underline text-sm"
              >
                +92 329-1130061
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
