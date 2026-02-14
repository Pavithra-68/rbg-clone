export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full">
          Contact
        </span>

        <h1 className="text-4xl font-bold mb-6">
          Get in Touch With Us
        </h1>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-3 rounded"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
