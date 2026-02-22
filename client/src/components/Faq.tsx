import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { faqData } from '../assets/dummy-data';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);
    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-3xl mx-auto px-4">

                <Title
                    title="FAQ"
                    heading="Frequently asked questions"
                    description="Everything you need to know about working with our agency. If you have more questions, feel free to reach out."
                />

                <div className="space-y-3">
                    {faqData.map((faq, i) => (
                        <motion.details
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-300");
                                }
                            }}
                            className="group bg-white/6 rounded-xl select-none"
                        >
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <h4 className="font-medium">{faq.question}</h4>
                                <ChevronDownIcon className="w-5 h-5 text-gray-300 group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="p-4 pt-0 text-sm text-gray-300 leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
};