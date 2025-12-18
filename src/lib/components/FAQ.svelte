<script lang="ts">
  import { slide } from 'svelte/transition';
  
  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqs: FAQItem[] = [
    { question: "What stage companies does AF Ventures invest in?", answer: "AF Ventures focuses on early-stage startups building on the Hyperliquid ecosystem. We typically invest in pre-seed and seed rounds, providing capital when it matters most to get your project off the ground." },
    { question: "What makes AF Ventures different from other investors?", answer: "We combine deep expertise in the Hyperliquid ecosystem with hands-on support. Beyond capital, we provide strategic guidance, network access, and ongoing operational support to help founders succeed." },
    { question: "How can I pitch my project to AF Ventures?", answer: "The best way to connect is to get in touch through our website. We review all submissions and respond to founders whose projects align with our investment thesis in the Hyperliquid ecosystem." },
    { question: "What do you look for in founders?", answer: "We look for exceptional founders with deep technical expertise, clear vision, and strong founder-market fit. We value builders who are committed to the long-term success of the Hyperliquid ecosystem." },
    { question: "Do you lead rounds or co-invest?", answer: "We're flexible and can lead rounds or participate as co-investors depending on the opportunity. Our focus is on providing value to founders, whether that's leading the round or joining alongside other aligned investors." },
    { question: "What kind of support do portfolio companies receive?", answer: "Portfolio companies receive strategic guidance, introductions to key ecosystem partners, go-to-market support, and access to our network of founders and investors. We work closely with each company to address their specific needs." },
    { question: "How active are you post-investment?", answer: "We take a hands-on approach with our portfolio companies. We're available for regular check-ins, strategic discussions, and problem-solving. The level of engagement is tailored to each founder's needs and preferences." }
  ];

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="bg-[#f5f5f5] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-4">
      <h2 class="font-serif text-4xl text-gray-900 mb-6">
        Frequently asked questions
      </h2>
      <a href="https://forms.gle/CaouXnwix5AWgmqy5" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-900 border-b border-gray-300 pb-0.5 hover:border-black transition-colors">Get in touch</a>
    </div>
    
    <div class="lg:col-span-8">
      <div class="border-t border-gray-200">
        {#each faqs as faq, i}
          <div class="border-b border-gray-200">
            <button 
              class="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              on:click={() => toggle(i)}
            >
              <span class="text-lg text-gray-800">{faq.question}</span>
              <span class="text-2xl font-light text-gray-400 ml-4">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {#if openIndex === i}
              <div transition:slide class="pb-6 text-gray-500 leading-relaxed">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
