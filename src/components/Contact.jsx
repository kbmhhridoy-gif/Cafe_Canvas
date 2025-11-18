import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE — Details + Map */}
        <div>
          <h3 className="text-3xl font-extrabold">Contact & Reservations</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Have a question or want to reserve a table? Contact us anytime —
            we’ll respond within 24 hours.
          </p>

          <div className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
            <div>
              <strong>Address:</strong> 123 Brew Street
            </div>
            <div>
              <strong>Hours:</strong> Mon–Fri 8am–8pm | Sat–Sun 9am–9pm
            </div>
            <div>
              <strong>Phone:</strong> +880-1234-567890
            </div>
          </div>

          <div className="mt-6 w-full h-64 rounded-xl overflow-hidden shadow">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.90218248638!2d90.3910039153635!3d23.75088539459614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b2f6f1a6f7%3A0x5f6a6f6a6f6a6f6a!2sDhaka!5e0!3m2!1sen!2sbd!4v1610000000000"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
              setTimeout(() => setSent(false), 4000)
            }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow grid grid-cols-1 gap-4"
          >
            <h4 className="text-xl font-bold mb-2">Send a Message</h4>

            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            />

            <input
              required
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            />

            <textarea
              required
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 h-32"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold"
            >
              Send Message
            </button>

            {sent && (
              <div className="text-green-600 dark:text-green-400">
                Thanks — we received your message!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
