<script lang="ts">
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Songs from './pages/Songs.svelte'
  import Booking from './pages/Booking.svelte'
  import Contact from './pages/Contact.svelte'
  import Navbar from './components/Navbar.svelte'
  import UpcomingEvents from './components/UpcomingEvents.svelte'

  let hash = location.hash

  window.addEventListener('hashchange', (e) => {
    hash = e.newURL
  })
</script>

<div id="app">
  <Navbar />

  {#if hash.endsWith('about')}
    <About />
  {:else if hash.endsWith('events')}
    <UpcomingEvents />
  {:else if hash.endsWith('songs')}
    <Songs />
  {:else if hash.endsWith('booking')}
    <Booking />
  {:else if hash.endsWith('contact')}
    <Contact />
  {:else}
    <Home />
  {/if}
</div>
