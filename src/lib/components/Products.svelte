<script>
  import SectionLabel from './SectionLabel.svelte';
</script>

<section class="bg-[#f5f5f5] px-6 py-24 border-t border-gray-200">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="What We Offer" />
    </div>
    
    <div class="lg:col-span-9">
      <div class="mb-16">
        <h2 class="font-serif text-4xl md:text-5xl text-gray-900 mb-2">
          More than capital
        </h2>
        <h2 class="font-serif text-4xl md:text-5xl text-gray-400">
          Strategic support for founders
        </h2>
      </div>

      <div class="grid gap-0 border-t border-gray-200">
        <!-- Item 1 -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Investment</div>
            <h3 class="text-2xl font-medium text-gray-900">Early-Stage Capital</h3>
          </div>
          <div class="md:col-span-8">
            <p class="text-gray-500 leading-relaxed">
              We invest early in exceptional founders building on Hyperliquid, providing the capital you need to bring your vision to life. Our selective deployment ensures we can dedicate meaningful resources to each portfolio company.
            </p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Network</div>
            <h3 class="text-2xl font-medium text-gray-900">Strategic Connections</h3>
          </div>
          <div class="md:col-span-8">
            <p class="text-gray-500 leading-relaxed">
              Gain access to our extensive network of founders, investors, and ecosystem partners. We facilitate introductions, partnerships, and opportunities that accelerate your growth within the Hyperliquid ecosystem.
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Guidance</div>
            <h3 class="text-2xl font-medium text-gray-900">Hands-On Support</h3>
          </div>
          <div class="md:col-span-8">
            <p class="text-gray-500 leading-relaxed">
              From product strategy to go-to-market execution, we provide ongoing strategic guidance. Our team works closely with founders to navigate challenges and capitalize on opportunities in the rapidly evolving DeFi landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
