"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
export function ContactSection() {
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
subject: "",
message: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  // 👇 PHONE VALIDATION INGA
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(formData.phone)) {
    toast.error("Invalid Phone Number", {
      description: "Please enter a valid 10-digit mobile number.",
    });

    setLoading(false);
    return;
  }

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success("Message Sent Successfully!", {
      description:
        "Thank you for contacting GERD Trust. We will get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    toast.error("Failed to Send Message!", {
      description: "Please try again later.",
    });
  }

  setLoading(false);
};


return ( <section className="py-24 bg-white" id="contact"> <div className="container mx-auto px-4 md:px-6"> <div className="text-center mb-16 max-w-3xl mx-auto"> <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary">
Get in Touch </h2>

```
      <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />

      <p className="text-slate-600 text-lg">
        Have questions about our programs or want to collaborate? We'd love
        to hear from you.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Contact Details */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-2xl border"
        >
          <div className="flex items-start gap-4">
            <MapPin className="text-brand-primary" />
            <div>
              <h4 className="font-bold mb-2">Our Office</h4>
              <p className="text-sm text-slate-600">
                530/1 Vaarpattu
                <br />
                Ponnamaravathy Taluk
                <br />
                Pudukkottai District
                <br />
                Tamil Nadu 622403
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-2xl border"
        >
          <div className="flex items-start gap-4">
            <Phone className="text-brand-primary" />
            <div>
              <h4 className="font-bold mb-2">Phone & WhatsApp</h4>
              <p className="text-sm text-slate-600">
                +91 9363682599
                <br />
                +91 8610609748
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-2xl border"
        >
          <div className="flex items-start gap-4">
            <Mail className="text-brand-primary" />
            <div>
              <h4 className="font-bold mb-2">Email</h4>
              <p className="text-sm text-slate-600">
                gugantrustngo@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Form + Map */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-brand-primary mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border rounded-xl p-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-brand-primary text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="rounded-3xl overflow-hidden border h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=Ponnamaravathy,Pudukkottai,Tamil%20Nadu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            title="GERD Trust Location"
          />
        </div>
      </div>
    </div>
  </div>
</section>

);
}
