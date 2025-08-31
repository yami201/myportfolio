import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {

        } finally {
            setLoading(false);
        }


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className="pb-20">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto mt-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
            >
                <SectionHeader content="Let's Talk" />
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <label htmlFor="name" className="text-sm font-medium text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <label htmlFor="email" className="text-sm font-medium text-white">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <label htmlFor="message" className="text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message..."
                            rows="5"
                            className="mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </motion.div>

                    <motion.button
                        disabled={loading}
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-3 mt-4  text-black font-semibold rounded-xl shadow-md hover:from-white hover:to-gray-200 transition-all ${!loading ? "opacity-100 cursor-pointer bg-gradient-to-r from-white/80 to-white" : "opacity-50 cursor-not-allowed bg-white"}`}
                    >
                        {!loading ? "Send Message" : "Sending..."}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
