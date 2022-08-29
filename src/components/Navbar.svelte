<script lang="ts">
  let burgerIsActive = false
  let hash = location.hash

  const links = [
    { path: 'about', name: 'About' },
    { path: 'songs', name: 'Songs' },
    { path: 'events', name: 'Events' },
    { path: 'booking', name: 'Booking' },
    { path: 'contact', name: 'Contact' },
  ]

  window.addEventListener('hashchange', (e) => {
    hash = e.newURL
    burgerIsActive = false
  })
</script>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <span class="icon is-small" style="width: 3vw">
        <i class="fas fa-home" />
      </span>
    </a>

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      class:is-active={burgerIsActive}
      on:click={() => (burgerIsActive = !burgerIsActive)}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class="navbar-menu" class:is-active={burgerIsActive}>
    <div class="navbar-start">
      {#each links as link}
        <a
          class="navbar-item"
          class:is-active={hash.endsWith(link.path)}
          href="/#/{link.path}"
        >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</nav>
