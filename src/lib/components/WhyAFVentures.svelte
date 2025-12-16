<script>
  import SectionLabel from './SectionLabel.svelte';
</script>

<section class="bg-[#f5f5f5] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Why AF Ventures" />
    </div>
    
    <div class="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 class="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-6">
          We invest early and support founders beyond capital
        </h2>
        <p class="text-gray-500 leading-relaxed">
          AF Ventures provides selective deployment, strategic guidance, and network access to early-stage startups building on Hyperliquid. We build long-term value through hands-on support and aligned incentives.
        </p>
      </div>
      
      <div class="flex gap-12 items-end pb-2">
        <div class="flex flex-col gap-1">
            <span class="text-2xl font-serif text-gray-900 mb-1">5+</span>
            <span class="text-xs text-gray-400">portfolio companies</span>
        </div>
        <div class="flex flex-col gap-1">
            <span class="text-2xl font-serif text-gray-900 mb-1">Early</span>
            <span class="text-xs text-gray-400">stage focus</span>
        </div>
      </div>
    </div>
  </div>
</section>
