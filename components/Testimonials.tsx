import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assume GSAP and ScrollTrigger are registered globally or in a layout effect.
// If not, uncomment: gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  rating: number; // e.g., 5 for 5 stars
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Absolutely divine! The classic roll was warm, fluffy, and perfectly spiced. Best I've ever had!",
    name: "Alice Wonderland",
    rating: 5,
  },
  {
    quote: "The Lemon Zest roll was a delightful surprise! So fresh and zesty, perfect with my morning coffee.",
    name: "Bob The Builder",
    rating: 5,
  },
  {
    quote: "CandelaRolls made our family brunch unforgettable. Everyone loved the variety, especially the Garlic Cheese swirl!",
    name: "Charlie Chaplin",
    rating: 4,
  },
  {
    quote: "I ordered the Cream Cheese Delight for a party, and it was a huge hit! So decadent and satisfying.",
    name: "Diana Prince",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || testimonialsData.length === 0) return;

    // Ensure GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error("GSAP or ScrollTrigger not loaded. Please ensure they are imported and registered.");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    testimonialRefs.current = testimonialRefs.current.slice(0, testimonialsData.length); // Adjust array size

    const testimonialElements = testimonialRefs.current.filter(el => el !== null) as HTMLDivElement[];

    // GSAP to manage the carousel effect
    const tl = gsap.timeline({
        repeat: -1, // Infinite loop
        yoyo: false, // No yoyo effect, just cycle through
        defaults: { duration: 1, ease: "power2.inOut" },
        onRepeat: () => {
          // Optional: Log repeat or trigger other events
        }
    });

    // Initial setup: Hide all but the first testimonial
    gsap.set(testimonialElements, { opacity: 0, x: 50 });
    if (testimonialElements.length > 0) {
        gsap.set(testimonialElements[0], { opacity: 1, x: 0 });
    }

    // Build the timeline for the carousel animation
    // For each testimonial, fade out the current one, fade in the next
    testimonialElements.forEach((_, index) => {
        if (index === 0) return; // The first one is already visible
        
        // Fade out previous, fade in current
        tl.to(testimonialElements[index - 1], { opacity: 0, x: -50 }, index); 
        tl.to(testimonialElements[index], { opacity: 1, x: 0 }, index);
    });

    // After the last testimonial fades in, fade out the last and fade in the first to complete the loop
    if (testimonialElements.length > 1) {
        tl.to(testimonialElements[testimonialElements.length - 1], { opacity: 0, x: -50 }, testimonialElements.length);
        tl.to(testimonialElements[0], { opacity: 1, x: 0 }, testimonialElements.length);
    }

    // ScrollTrigger for when the section comes into view
    ScrollTrigger.create({
        trigger: slider,
        start: "top center",
        end: "bottom center",
        onEnter: () => tl.play(), // Play animation when section enters viewport
        onEnterBack: () => tl.play(), // Play animation when scrolling back up
        onLeave: () => tl.pause(), // Pause animation when section leaves viewport
        onLeaveBack: () => tl.pause(), // Pause animation when scrolling back up
        markers: false, // Set to true for debugging
    });

    return () => {
        // Clean up GSAP timeline and ScrollTrigger
        tl.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-6 h-6 fill-current ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      );
    }
    return <div className="flex mb-2">{stars}</div>;
  };

  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div ref={sliderRef} className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                ref={el => testimonialRefs.current[index] = el}
                className="min-w-full flex-shrink-0 p-8 testimonial-slide"
                // Initially hidden, opacity/transform handled by GSAP
                style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%' }}
              >
                <blockquote className="text-2xl italic font-medium text-center leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  {renderStars(testimonial.rating)}
                  <p className="text-lg font-semibold">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
