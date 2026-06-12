"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const volunteerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),

  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  email: z.string().email("Valid email address is required"),

  location: z.string().min(2, "Location is required"),

  skills: z.string().min(2, "Please mention your skills"),

  message: z.string().min(10, "Please provide a brief message"),
});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

export function VolunteerSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
  });

 const onSubmit = async (data: VolunteerFormValues) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_VOLUNTEER_TEMPLATE_ID!,
      {
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        location: data.location,
        skills: data.skills,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success("Application Submitted Successfully!", {
      description:
        "Thank you for volunteering with GERD Trust. Our team will contact you soon.",
    });

    setIsSuccess(true);

    reset();

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

  } catch (error) {
    console.error(error);

    toast.error("Failed to Submit Application!", {
      description: "Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="volunteer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-brand-primary">Become a Volunteer</h2>
            <div className="w-20 h-1 bg-brand-accent rounded-full mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Join hands with GERD Trust to make a real difference. Whether you can teach, provide medical assistance, or simply offer your time, we welcome your support.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Sign Up</h4>
                  <p className="text-slate-500 text-sm">Fill out the form with your details and areas of expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Orientation</h4>
                  <p className="text-slate-500 text-sm">Our team will contact you for a brief orientation session.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Make an Impact</h4>
                  <p className="text-slate-500 text-sm">Start participating in our community drives and programs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Thank You!</h3>
                <p className="text-slate-600 max-w-md">
                  Your volunteer application has been received. Our team will get in touch with you shortly.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline" 
                  className="mt-4"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">Full Name</label>
                  <Input {...register("fullName")} placeholder="John Doe" className="bg-gray-50 border-gray-200" />
                  {errors.fullName && <span className="text-xs text-red-500 mt-1">{errors.fullName.message}</span>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1 block">Phone Number</label>
                    <Input
  {...register("phoneNumber")}
  type="tel"
  inputMode="numeric"
  maxLength={10}
  placeholder="9876543210"
  className="bg-gray-50 border-gray-200"
/>
                    {errors.phoneNumber && <span className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</span>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1 block">Email Address</label>
                    <Input {...register("email")} type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200" />
                    {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">Location</label>
                  <Input {...register("location")} placeholder="City, State" className="bg-gray-50 border-gray-200" />
                  {errors.location && <span className="text-xs text-red-500 mt-1">{errors.location.message}</span>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">Skills / Expertise</label>
                  <Input {...register("skills")} placeholder="Teaching, Medical, Social Media, etc." className="bg-gray-50 border-gray-200" />
                  {errors.skills && <span className="text-xs text-red-500 mt-1">{errors.skills.message}</span>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">Message</label>
                  <Textarea {...register("message")} placeholder="How would you like to help?" rows={4} className="bg-gray-50 border-gray-200 resize-none" />
                  {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-12 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
