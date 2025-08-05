import React, { useEffect, useState } from 'react';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <div
        className={`text-center mb-12 transition-all duration-700 ease-out transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600 tracking-tight">🧠 SkillSync Pro</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A productivity-first React app for <span className="font-semibold text-blue-500">Skill Tracking</span>,
          <span className="font-semibold text-blue-500"> Career Growth</span>, and <span className="font-semibold text-blue-500">Project Management</span> – all in one intuitive platform.
        </p>
        <a
          href="https://skill-sync-pro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-5 rounded shadow hover:bg-blue-700 transition"
        >
          🚀 Live Demo
        </a>
        <p className="mt-2 text-sm text-gray-500">Login with <strong>admin@site.com / admin123</strong></p>
      </div>

      {/* Mission Section */}
      <div className="mb-16 bg-blue-50 p-6 rounded-lg shadow transition-all duration-700 ease-out transform hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-2">🎯 Our Mission</h2>
        <p className="text-gray-700">
          Empower individuals and teams to master in-demand skills, manage career goals, and document learning journeys in a meaningful, organized, and enjoyable way.
        </p>
      </div>

      {/* Features */}
      <div className="mb-16 transition-all duration-700 ease-out transform hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">📌 Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✅ Skill Tracker with progress bar</li>
          <li>✅ Add/Edit/Delete Tasks with status</li>
          <li>✅ Project Portfolio with GitHub links</li>
          <li>✅ Certification Upload & Skill Mapping</li>
          <li>✅ Learning Roadmap Tracker</li>
          <li>✅ Notes/Blog with Rich Text Editor</li>
          <li>✅ Role-based Auth (Student/Admin)</li>
          <li>✅ JWT Protected Routes</li>
          <li>✅ Fully Responsive + PWA-ready</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">⚙️ Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-1">
            <li><strong>Frontend:</strong> React.js + JavaScript</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>State Management:</strong> Context API + useReducer</li>
            <li><strong>Forms:</strong> react-hook-form + Yup</li>
          </ul>
          <ul className="space-y-1">
            <li><strong>Charts:</strong> Recharts / Chart.js</li>
            <li><strong>Auth:</strong> JWT, Role-based</li>
            <li><strong>Storage:</strong> localStorage</li>
            <li><strong>Hosting:</strong> Vercel</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16 transition-all duration-700 ease-out transform hover:scale-[1.01]">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">👥 Meet the Creator</h2>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-lg font-semibold">Vishesh</p>
          <p className="text-gray-600">Full Stack Developer passionate about creating practical solutions and sharing learning journeys.</p>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">📦 Installation</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm text-gray-700">
          {`git clone https://github.com/Vishesh9310/Skill-Sync-Pro.git
cd Skill-Sync-Pro
npm install
npm run dev`}
        </pre>
      </div>

      {/* Upcoming Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">🧩 Upcoming Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Resume Generator (PDF export)</li>
          <li>AI-based skill suggestions (OpenAI API)</li>
          <li>Team Mode (collaborators & HR view)</li>
          <li>Notifications & Activity Log</li>
          <li>Admin Analytics Dashboard</li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">💡 Learning Outcomes</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✅ React & Routing (react-router-dom)</li>
          <li>✅ State Management (Context + useReducer)</li>
          <li>✅ UI & UX with TailwindCSS</li>
          <li>✅ Forms & Validation (react-hook-form + Yup)</li>
          <li>✅ Auth with JWT & Protected Routes</li>
          <li>✅ Animations using Framer Motion</li>
        </ul>
      </div>

    </section>
  );
};

export default About;