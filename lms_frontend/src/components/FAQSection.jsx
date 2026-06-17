import { useState } from "react";

const faqs = [
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, certificates are awarded after successful course completion.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes, courses are self-paced and accessible anytime.",
  },
  {
    question: "Are courses beginner-friendly?",
    answer:
      "Absolutely. Most courses start with fundamentals and progress gradually.",
  },
  {
    question: "How long do I have access to a course?",
    answer:
      "You will have access for the duration specified by the course or subscription plan.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-3">
            Find answers to common questions.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 font-semibold flex justify-between items-center"
              >
                {faq.question}

                <span>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQSection;