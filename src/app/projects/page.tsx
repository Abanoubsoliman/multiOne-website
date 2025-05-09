import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {project.categories.map((category, categoryIndex) => (
                      <span
                        key={categoryIndex}
                        className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-secondary-900">{project.title}</h2>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary-600 font-semibold hover:text-primary-800"
                    >
                      View Case Study →
                    </Link>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-secondary-800"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Let's create something amazing together.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with advanced features and seamless user experience.",
    image: "/projects/ecommerce.jpg",
    categories: ["Web Development", "E-commerce"],
    slug: "ecommerce-platform",
    website: "https://example.com/ecommerce",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking application with real-time transactions.",
    image: "/projects/banking.jpg",
    categories: ["Mobile App", "FinTech"],
    slug: "mobile-banking-app",
    website: "https://example.com/banking",
  },
  {
    title: "Corporate Website",
    description:
      "A professional website for a leading technology company with modern design.",
    image: "/projects/corporate.jpg",
    categories: ["Web Development", "Design"],
    slug: "corporate-website",
    website: "https://example.com/corporate",
  },
  {
    title: "Food Delivery App",
    description:
      "A feature-rich food delivery application with real-time tracking.",
    image: "/projects/food-delivery.jpg",
    categories: ["Mobile App", "Food & Beverage"],
    slug: "food-delivery-app",
    website: "https://example.com/food-delivery",
  },
  {
    title: "Healthcare Platform",
    description:
      "An integrated healthcare platform connecting patients with doctors.",
    image: "/projects/healthcare.jpg",
    categories: ["Web Development", "Healthcare"],
    slug: "healthcare-platform",
    website: "https://example.com/healthcare",
  },
  {
    title: "Educational Portal",
    description:
      "An interactive learning platform with video courses and assessments.",
    image: "/projects/education.jpg",
    categories: ["Web Development", "Education"],
    slug: "educational-portal",
    website: "https://example.com/education",
  },
];

const stats = [
  {
    value: "200+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
]; 