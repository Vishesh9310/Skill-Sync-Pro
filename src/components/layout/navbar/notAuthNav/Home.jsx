import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🧠 SkillSync Pro</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Your all-in-one platform for skill tracking, project portfolio, career growth, and productivity.
        </p>
        <div className="mt-8">
          <a
            href="https://skill-sync-pro.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
          >
            🚀 Live Demo
          </a>
        </div>
        <p className="mt-4 text-sm text-blue-200">
          Demo Login: <strong>admin@site.com</strong> / <strong>admin123</strong>
        </p>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">📌 Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Skill Tracker with progress bar",
            "Task CRUD with status",
            "Project Portfolio with Repo Links",
            "Certification Upload & Skill Mapping",
            "Learning Roadmap Tracker",
            "Notes/Blog with Rich Text Editor",
            "Role-based Auth (Student/Admin)",
            "JWT Protected Routes",
            "Mobile Responsive & PWA-ready"
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-700">✅ {feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">⚙️ Tech Stack</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-gray-700">Frontend</h3>
            <p>React.js + JavaScript</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Styling</h3>
            <p>Tailwind CSS</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">State Management</h3>
            <p>Context API + useReducer</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Forms</h3>
            <p>react-hook-form + Yup</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Auth</h3>
            <p>JWT, Role-based</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Hosting</h3>
            <p>Vercel</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🛠️ Open Source & Still Growing</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          This is an active project with continuous updates, including AI-powered suggestions, team mode, resume generation, and more.
        </p>
        <a
          href="https://github.com/Vishesh9310/Skill-Sync-Pro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          ⭐ View on GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>Developed by <span className="font-semibold">Vishesh</span> • SkillSync Pro © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
