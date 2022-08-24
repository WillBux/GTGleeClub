<script>
  import Merch from 'src/components/Merch.svelte'
  import Socials from 'src/components/Socials.svelte'
  import BeAGroupie from 'src/components/BeAGroupie.svelte'
  import UpcomingEvents from 'src/components/UpcomingEvents.svelte'
</script>

<section
  class="hero is-medium is-bold"
  style="background: url('banner.jpg') center; background-size: cover"
>
  <div class="hero-body" />
</section>

<section class="section">
  <div class="container">
    <h1 class="title">Georgia Tech Glee Club</h1>
    <p class="subtitle">
      The Georgia Tech Glee Club formed as an all-male group in 1906, making it
      the oldest student organization on campus. Composed of graduate and
      undergraduate students, the members of the group represent all of the
      Institute's colleges. In recent years, the Glee Club has performed at
      prestigious events both at Georgia Tech and throughout the Atlanta
      community and has traveled to locations such as New York City, Hawaii, and
      the UK, spreading what it means to be a Ramblin' Wreck and a helluva
      engineer!
    </p>
  </div>
</section>

<UpcomingEvents />
<BeAGroupie />
<Merch />
<Socials />
