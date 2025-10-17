import { ArrowRight, Award, Heart, Users, Sparkles } from 'lucide-react';
import { GlowingButton } from './ui/glowing-button';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Journey</span>
            <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-6">The Spannick Legacy: A Story of Passion, Heritage, and Excellence</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From the royal deserts of Rajasthan to becoming India's premier bespoke menswear fashion designers
            </p>
          </div>

          <div className="mb-16 fade-in-up">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-20 h-20 text-gold mx-auto mb-4" />
                  <p className="text-2xl font-serif text-gold">Est. 1994</p>
                  <p className="text-gray-300 mt-2">Born in Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="fade-in-left">
              <h2 className="text-3xl font-serif text-gold mb-4">Where Dreams Met Destiny</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                In the heart of Rajasthan, where vibrant colors dance in the desert wind and centuries-old traditions
                whisper through ancient palaces, a young Rajesh Luthra discovered his calling. Growing up in Jaipur,
                the Pink City renowned for its textile heritage and royal craftsmanship, he watched his grandfather's
                weathered hands transform simple fabric into magnificent garments that told stories of celebration,
                dignity, and dreams.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                It was 1994. While India was awakening to new possibilities, Rajesh held onto something timeless.
                He noticed that in the rush toward modernity, the art of personalized tailoring, the intimate
                relationship between craftsman and client, and the soul of Rajasthani textile artistry were fading.
                With just a small workshop in Jaipur, a handful of inherited sewing machines, and an unshakeable
                belief in the power of perfect fit, Spannick Designers by Luthra's was born.
              </p>
            </div>

            <div className="fade-in-right">
              <h2 className="text-3xl font-serif text-gold mb-4">The Name That Carries Our Promise</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                "Spannick" isn't just a name; it's a philosophy. Derived from the idea of spanning excellence across
                generations, it represents our commitment to bridge traditional Rajasthani craftsmanship with
                contemporary design sensibilities. Every stitch we make spans the distance between heritage and
                innovation, between the master tailors of yesteryear and the style-conscious gentlemen of today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="stat-card p-8">
                <Award className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-serif mb-2">Award-Winning Excellence</h3>
                <p className="text-gray-400">
                  Recognized as one of Rajasthan's finest bespoke menswear tailors, serving clients across India
                  and beyond with our signature wedding sherwanis, designer suits, and ethnic wear.
                </p>
              </div>
              <div className="stat-card p-8">
                <Heart className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-serif mb-2">Crafted with Love</h3>
                <p className="text-gray-400">
                  Over 5,000 satisfied clients who trusted us with their most important moments - weddings,
                  celebrations, and milestone events across Rajasthan, Delhi, Mumbai, and international destinations.
                </p>
              </div>
            </div>

            <div className="fade-in-up">
              <h2 className="text-3xl font-serif text-gold mb-4">The Turning Point: A Groom's Tears</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                In 1998, a young groom walked into our Jaipur atelier, heartbroken. His wedding was in three weeks,
                and the designer he'd commissioned had delivered a sherwani that didn't fit his vision or his body.
                He felt defeated before his most important day. Rajesh stayed up three consecutive nights, his team
                working by lamplight, recreating not just a garment but this young man's dream.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                On his wedding day, when the groom saw himself in that golden sherwani - hand-embroidered with
                traditional Rajasthani motifs, fitted to absolute perfection - he cried. Not from sadness, but from
                feeling truly seen, truly honored. His mother held Rajesh's hand and said, "You didn't just make
                clothes. You made my son feel like a king."
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                That moment defined everything Spannick Designers would become. We weren't in the clothing business.
                We were in the dream-fulfilling business. We were preserving the dignity of important moments.
              </p>
            </div>

            <div className="fade-in-right">
              <h2 className="text-3xl font-serif text-gold mb-4">Rajasthan's Finest: Our Craftsmanship Heritage</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our roots in Rajasthan aren't just geographical; they're spiritual. Rajasthan, India's largest state,
                has been the epicenter of textile excellence for centuries. From the intricate bandhani work of
                Jodhpur to the regal embroidery traditions of Udaipur, from Jaipur's block printing heritage to the
                mirror work artistry that adorns royal collections worldwide - we carry this legacy in every garment.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                As the best fashion designers from Rajasthan specializing in men's wedding wear, formal suits, and
                ethnic collections, we employ master craftsmen who learned their trade through generations of family
                tradition. Our tailors come from the same communities that once dressed Rajasthan's maharajas.
                Today, they dress modern princes - entrepreneurs, professionals, grooms, and gentlemen who understand
                that true luxury isn't about price tags, but about artistry, fit, and the confidence of wearing
                something made exclusively for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-lg p-8 my-12">
              <Users className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-2xl font-serif mb-4">Our Clients, Our Family</h3>
              <p className="text-gray-300 leading-relaxed">
                From Bollywood celebrities to business tycoons, from destination weddings in Udaipur to corporate
                boardrooms in Delhi, from traditional Rajasthani weddings to contemporary fashion shows - Spannick
                Designers has dressed India's most discerning gentlemen. But our proudest moments aren't the famous
                names; they're the fathers who return with their sons, the grooms who become our lifelong clients,
                and the referrals that come with the words, "They'll take care of you like family."
              </p>
            </div>

            <div className="fade-in-left">
              <h2 className="text-3xl font-serif text-gold mb-4">The Spannick Difference: Why We're Rajasthan's Choice</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-gold">Bespoke Precision:</strong> Every measurement taken seven times,
                  every fitting personally supervised, every garment a masterpiece of custom tailoring that fits
                  your body like a second skin.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-gold">Rajasthani Heritage:</strong> Authentic craftsmanship techniques
                  passed down through generations, from hand embroidery to traditional construction methods that
                  make our sherwanis and ethnic wear unmatched in quality.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-gold">Premium Fabrics:</strong> Sourced from the finest textile mills
                  in India and Europe, each fabric selected for its drape, durability, and ability to showcase our
                  tailoring excellence.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-gold">Timeless Design:</strong> Balancing Rajasthan's rich aesthetic
                  heritage with contemporary fashion trends, creating wedding wear, formal suits, and ethnic
                  collections that transcend fleeting trends.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-gold">Personal Service:</strong> From your first consultation in our
                  Jaipur atelier to the final fitting, you work directly with master tailors who understand that
                  you're not just buying clothes - you're investing in memories.</p>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <h2 className="text-3xl font-serif text-gold mb-4">30 Years Later: Still Family, Still Passionate</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Today, Spannick Designers by Luthra's operates from our flagship atelier in Jaipur, with clients
                visiting us from across Rajasthan - from Udaipur's lake palaces to Jodhpur's blue city, from
                Jaisalmer's golden fort to Bikaner's cultural heart, and from major cities across India including
                Delhi, Mumbai, Bangalore, and beyond.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Rajesh's children now work alongside him, the third generation learning the same values that started
                this journey: that every client deserves to feel extraordinary, that perfection is worth pursuing,
                and that true luxury is being understood and honored. Our workshop still smells of fine fabric and
                possibility. Our mirrors still reflect transformation.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                We've dressed over 5,000 weddings, tailored countless business suits that closed important deals,
                and created ethnic wear that made festivals more colorful and celebrations more memorable. But the
                number we're proudest of isn't the clients served or the garments crafted. It's the fact that 95%
                of our business comes from referrals and returning clients. Because in Rajasthan, trust isn't given
                lightly, and loyalty is earned through decades of consistency.
              </p>
            </div>

            <div className="fade-in-right">
              <h2 className="text-3xl font-serif text-gold mb-4">Your Story Begins Here</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether you're a groom searching for the perfect wedding sherwani that honors tradition while
                embracing your personal style, a professional seeking bespoke suits that command respect in the
                boardroom, or someone who appreciates the artistry of perfectly tailored ethnic wear for
                celebrations - Spannick Designers is where your vision becomes reality.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                We're not just Rajasthan's best fashion designers for menswear. We're storytellers who use fabric
                and thread instead of words. We're dream fulfilers who understand that what you wear to life's
                important moments becomes part of your memory, your legacy, your story.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                From our family to yours, from Rajasthan's heritage to your wardrobe, from 1994 to today and beyond
                - Spannick Designers by Luthra's invites you to experience what three decades of passion, precision,
                and personalized service truly means.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-serif text-xl text-gold mt-8 text-center">
                Because every gentleman deserves to wear his story with pride.
              </p>
            </div>

            <div className="text-center mt-16">
              <a
                href="https://spannickbyluthras.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowingButton variant="primary" className="group inline-flex">
                  Start Your Journey with Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline-block" size={20} />
                </GlowingButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
