import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_hc4ln8j",
        "template_ep8ubtl",
        form.current,
        "vUOUFZyGTALK5iBfn"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        () => {
          setLoading(false);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full" />

      <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let’s work together.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Have a project idea, internship opportunity, or freelance work?
            Send me a message and let’s build something amazing.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-[#0F172A]
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-[#0F172A]
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                bg-[#0F172A]
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                resize-none
                focus:border-cyan-400
                transition
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                bg-gradient-to-r
                from-cyan-400
                to-pink-500
                text-black
                px-10
                py-4
                rounded-2xl
                font-bold
                hover:scale-105
                transition
                duration-300
                shadow-lg
                shadow-cyan-500/20
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mt-6
                bg-green-500/20
                border
                border-green-400/30
                text-green-300
                px-6
                py-4
                rounded-2xl
              "
            >
              Message sent successfully 🚀
            </motion.div>
          )}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              w-[340px]
              h-[340px]
              rounded-[40px]
              bg-gradient-to-br
              from-cyan-500/20
              to-pink-500/20
              border
              border-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-[120px]
              shadow-2xl
            "
          >
            🚀
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              absolute
              top-10
              -left-10
              bg-pink-500
              px-5
              py-3
              rounded-2xl
              font-semibold
              shadow-xl
            "
          >
            Available for work
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              bottom-10
              -right-10
              bg-cyan-400
              text-black
              px-5
              py-3
              rounded-2xl
              font-semibold
              shadow-xl
            "
          >
            Let’s Connect
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}