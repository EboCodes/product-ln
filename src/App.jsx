import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="bg-[#0a1128] text-white font-[Poppins]">
      <Toaster position="top-center" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs tracking-widest uppercase bg-white/10 border border-white/10 px-3 py-1 rounded-full mb-4">
              New Launch • Limited Edition
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFD700] leading-tight">
              Introducing the Future of Comfort
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl">
              Experience luxury like never before with our brand-new product -
              crafted for people who demand the best in design and performance.
            </p>

            {/* Social proof badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <Badge>⭐ 4.9/5 Rated</Badge>
              <Badge>🎁 500+ Pre-orders</Badge>
              <Badge>🛡️ 30-Day Guarantee</Badge>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#order"
                className="inline-block bg-[#FFD700] text-[#0a1128] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#FFC300] transition text-center w-full sm:w-auto"
              >
                Get Yours Now
              </a>
              <a
                href="#highlights"
                className="text-[#FFD700]/90 hover:text-[#FFD700] text-center w-full sm:w-auto"
              >
                See why it’s special →
              </a>
            </div>
          </motion.div>

          {/* Image (floating) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src="a.png"
              alt="Product"
              className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section
        id="highlights"
        className="py-16 sm:py-20 bg-[#0c1637] px-6 lg:px-20 text-center"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why You’ll Love It
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              icon: <IconShield />,
              title: "Premium Quality",
              desc: "Built with top-tier materials for long-lasting comfort and durability.",
            },
            {
              icon: <IconSparkles />,
              title: "Elegant Design",
              desc: "A sculpted silhouette that turns heads without saying a word.",
            },
            {
              icon: <IconFeather />,
              title: "Featherlight Feel",
              desc: "All-day ease with a surprisingly light, balanced build.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 sm:p-8 bg-[#0a1128] rounded-2xl shadow-lg border border-white/5 hover:shadow-[#FFD700]/30 hover:border-[#FFD700]/30 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 sm:py-20 px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="a.png"
          alt="Lifestyle"
          className="rounded-2xl shadow-2xl border border-white/10 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
            Designed for Your Everyday Activities
          </h2>
          <p className="mt-6 text-gray-300 text-sm sm:text-base">
            Whether at home, in the office, or on the move - it blends into your
            world seamlessly. Premium finish, precise engineering, effortless
            comfort.
          </p>
          <a
            href="#order"
            className="mt-8 inline-block bg-[#FFD700] text-[#0a1128] font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-[#FFC300] transition w-full sm:w-auto text-center"
          >
            Pre-Order Today
          </a>
        </motion.div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Offer + Countdown + Order Form + FAQ */}
      <section
        id="order"
        className="py-16 sm:py-20 px-6 lg:px-20 text-center bg-gradient-to-r from-[#FFD700] to-[#FFC300] text-[#0a1128]"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Special Launch Offer
        </motion.h2>

        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-6">
          50% OFF — Limited Time
        </span>

        <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Be among the first to own it at an exclusive price. When the timer hits
          zero, the offer ends.
        </p>

        <Countdown targetDate="2025-09-15T23:59:59" />

          <motion.form
  className="mt-12 max-w-xl mx-auto bg-[#0a1128] p-8 rounded-2xl shadow-xl border border-white/10 text-left"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const toastId = toast.loading("Placing your order...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxZLkpqtE5TnlUWyBvLD_U3KkfBuBtHIlFop--WoaSlE8-LR50paM97emt0AhvPKw6mCA/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // bypass CORS
        }
      );

      toast.success("✅ Order placed successfully!", { id: toastId });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Network error. Please try again.", { id: toastId });
    }
  }}
>
  <div className="grid sm:grid-cols-2 gap-4">
    {/* Full Name */}
    <div>
      <label className="block mb-2 text-gray-300 text-sm">Full Name</label>
      <input
        name="name"
        required
        type="text"
        placeholder="e.g. Jane Doe"
        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400"
      />
    </div>
    {/* Email */}
    <div>
      <label className="block mb-2 text-gray-300 text-sm">Email</label>
      <input
        name="email"
        required
        type="email"
        placeholder="you@example.com"
        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400"
      />
    </div>
    {/* Phone */}
    <div>
      <label className="block mb-2 text-gray-300 text-sm">Phone</label>
      <input
        name="phone"
        required
        type="tel"
        placeholder="+234 812 345 6789"
        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400"
      />
    </div>
    {/* Quantity */}
    <div>
      <label className="block mb-2 text-gray-300 text-sm">Quantity</label>
      <select
        name="quantity"
        defaultValue="1"
        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 text-white"
      >
        {[1, 2, 3, 4, 5].map((q) => (
          <option key={q} value={q}>
            {q}
          </option>
        ))}
      </select>
    </div>
    {/* Delivery Address */}
    <div className="sm:col-span-2">
      <label className="block mb-2 text-gray-300 text-sm">
        Delivery Address
      </label>
      <input
        name="address"
        required
        type="text"
        placeholder="Street, city, state"
        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400"
      />
    </div>
  </div>

  <button
    type="submit"
    className="mt-6 w-full bg-[#FFD700] text-[#0a1128] font-bold py-4 rounded-lg hover:bg-[#FFC300] transition"
  >
    Place Order
  </button>

  <p className="mt-3 text-xs text-gray-400 text-center">
    Secured checkout • 30-day money-back guarantee
  </p>
</motion.form>

        {/* FAQ Accordion */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h3>
          <details className="mb-4 bg-white/10 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold">
              How long does delivery take?
            </summary>
            <p className="mt-2 text-sm text-gray-500">
              Delivery typically takes 3-7 business days depending on location.
            </p>
          </details>
          <details className="mb-4 bg-white/10 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold">
              Can I return it if I don’t like it?
            </summary>
            <p className="mt-2 text-sm text-gray-500">
              Yes, we offer a 30-day money-back guarantee.
            </p>
          </details>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 lg:px-20 bg-[#0a1128]/90 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ebocodes. All rights reserved.
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-300">
            <a href="#highlights" className="hover:text-[#FFD700]">
              FAQ
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#FFD700]">
              Contact
            </a>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {[
              { icon: faInstagram, link: "https://instagram.com/yourpage" },
              { icon: faTiktok, link: "https://tiktok.com/@yourpage" },
              { icon: faFacebook, link: "https://facebook.com/yourpage" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:border-[#FFD700] text-gray-300 hover:text-[#FFD700] transition"
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------------- Reusable bits ----------------------- */
function Badge({ children }) {
  return (
    <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs sm:text-sm">
      {children}
    </span>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm mb-2 text-gray-300">{label}</span>
      {children}
    </label>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      aria-label={label}
      href="#"
      className="w-9 h-9 grid place-items-center rounded-full border border-white/15 text-sm hover:border-[#FFD700] hover:text-[#FFD700] transition"
    >
      {children}
    </a>
  );
}

/* Simple inline SVG icons (no extra deps) */
function IconShield() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" className="text-[#FFD700]">
      <path
        fill="currentColor"
        d="M12 2l7 3v6c0 5-3.4 9.3-7 11c-3.6-1.7-7-6-7-11V5l7-3z"
      />
    </svg>
  );
}
function IconSparkles() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" className="text-[#FFD700]">
      <path
        fill="currentColor"
        d="M5 3l2 4l4 2l-4 2l-2 4l-2-4l-4-2l4-2l2-4zm14 2l1.5 3l3 1.5l-3 1.5L19 14l-1.5-3L14 9.5L17.5 8L19 5zM13 13l1.5 3l3 1.5l-3 1.5L13 22l-1.5-3L8 18.5L11.5 17L13 13z"
      />
    </svg>
  );
}
function IconFeather() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" className="text-[#FFD700]">
      <path
        fill="currentColor"
        d="M20.24 4.56c-2.34-2.34-6.14-2.34-8.48 0l-7.2 7.2l7.78 7.78l7.2-7.2c2.34-2.34 2.34-6.14 0-8.48zM8.1 17.32l-1.42-1.42l4.95-4.95l1.41 1.41l-4.94 4.96z"
      />
    </svg>
  );
}

/* Testimonials Carousel (Framer Motion drag) */
function TestimonialsCarousel() {
  const items = [
    {
      quote:
        "This product exceeded my expectations. It feels incredibly premium.",
      name: "Sarah W.",
    },
    {
      quote:
        "Worth every penny - it blends elegance with real everyday comfort.",
      name: "James T.",
    },
    {
      quote:
        "Elegant and functional - finally, something that looks as good as it works.",
      name: "Aisha K.",
    },
    {
      quote: "From unboxing to daily use, it screams quality. I’m impressed.",
      name: "Noah B.",
    },
  ];

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => setWidth(el.scrollWidth - el.clientWidth);
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#0c1637] px-6 lg:px-20">
      <motion.h2
        className="text-4xl font-bold text-[#FFD700] text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Early Users Are Saying
      </motion.h2>

      <motion.div
        ref={containerRef}
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
        >
          {items.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] sm:min-w-[360px] p-6 bg-[#0a1128] rounded-2xl shadow-lg border border-white/10"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <p className="italic text-gray-300 mb-4">“{t.quote}”</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-[#FFD700]">{t.name}</h4>
                <Stars />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-[#FFD700]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 20.201 4.665 24 6 15.596 0 9.748l8.332-1.73z"/>
        </svg>
      ))}
    </div>
  );
}
