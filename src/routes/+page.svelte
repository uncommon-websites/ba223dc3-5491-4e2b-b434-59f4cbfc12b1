<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Logos from '$lib/components/Logos.svelte';
  import WhyAFVentures from '$lib/components/WhyAFVentures.svelte';
  import Products from '$lib/components/Products.svelte';
  import Founders from '$lib/components/Founders.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import BottomCTA from '$lib/components/BottomCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
</svelte:head>

<div class="min-h-screen bg-[#f5f5f5] font-sans selection:bg-black selection:text-white">
  <Navbar />
  <Hero />
  <Logos />
  <WhyAFVentures />
  <Products />
  <Founders />
  <FAQ />
  <BottomCTA />
  <Footer />
</div>

