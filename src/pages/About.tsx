import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { Mail, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

const About = () => {
  const team = [
    { name: 'Dhiman Bhattacharjee', role: 'CEO & Co-Founder' },
    { name: 'Krishnakumar KR', role: 'COO & Co-founder' },
    { name: 'Avinash Tompe', role: 'CTO & Co-Founder' },
    { name: 'Kaushal Devda', role: 'Product Lead' },
    { name: 'Akhilesh Kamate', role: 'Support Lead' },
    { name: 'Ashish Kumar', role: 'Tech Lead' }, 
    { name: 'Rakesh Ranjan', role: 'UI/UX Lead' },
    { name: 'Sandesh Kirave', role: 'QA Lead' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Finexus: Your AI-Powered Technology Partner in Digital Lending Transformation
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            In a world where financial technology is the bridge between borrowers and lenders, we're your trailblazers, carving new paths with AI agents and pioneering innovative solutions. We don't adapt to change; we drive it. We are Finexus Inc., and we're rewriting the rules of lending.
          </p>
          <p className="text-lg font-semibold text-primary">
            Finexus Inc. isn't just a name, it's a promise of AI-driven transformation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            To redefine the financial landscape through cutting-edge technology and unprecedented software solutions.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">Breaking the Mold</h2>
            <p className="text-gray-600">
              We don't believe in one-size-fits-all solutions, especially in the complex realm of finance. At Finexus Inc, we craft tailor-made software solutions to tackle the unique challenges that financial organizations face. We don't believe in Uniformity we believe in excellence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">On the Cusp of Innovation</h2>
            <p className="text-gray-600">
              At Finexus Inc, our dedicated team is committed to pushing the boundaries of what's achievable in the financial software industry. We're not just quick to adopt change; we're the catalysts of it.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your Trusted Partner</h2>
          <p className="text-gray-600">
            Our commitment is unwavering: to build enduring relationships with our clients. Your success is our success. When you choose Finexus Inc, you're not just engaging a service provider; you're forging a partnership with a team dedicated to ensuring your project's triumph.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-secondary">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-600 mt-8 italic">
            "Our team is a diverse mix of talents, united by a shared passion for innovation and customer-centric solutions."
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Get in Touch</h2>
          <h3 className="text-xl font-semibold text-center mb-8">Ready to Embark on a Journey of Financial Innovation?</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Schedule a Demo</h4>
              <p className="text-gray-600 mb-4">
                Experience innovation firsthand. Book a live demo with us to witness the transformation our solutions can bring to your financial organization.
              </p>
              <Button variant="default">Book a Demo</Button>
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Let's Talk</h4>
              <p className="text-gray-600 mb-4">
                Questions or ideas? We're all ears. Reach out to us at contact@finexusinc.com we're eager to hear from you.
              </p>
              <Button variant="default">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
