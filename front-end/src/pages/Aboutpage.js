import React from "react";

function Aboutpage() {
  return (
    <section className="w-full px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          About Our Platform
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our appointment booking platform is designed to make healthcare
          access simple, fast, and reliable. We connect patients with trusted
          doctors across multiple specialities, allowing you to book
          appointments without long hospital queues or unnecessary delays.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Using an intuitive speciality-based navigation system, users can
          easily find doctors such as General Physicians, Gynecologists,
          Dermatologists, Pediatricians, Neurologists, and Gastroenterologists.
          Each speciality is clearly highlighted, ensuring a smooth and
          user-friendly experience.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our platform focuses on transparency and trust by providing clear
          doctor profiles, experience details, and consultation fees. Whether
          you need a routine check-up or specialist care, we help you make
          informed decisions with confidence.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Built with modern web technologies like React and Tailwind CSS, our
          system delivers a fast, responsive, and seamless experience across
          all devices—so quality healthcare is always just a click away.
        </p>
      </div>
    </section>
  );
}

export default Aboutpage;
