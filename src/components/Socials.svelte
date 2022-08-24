<script lang="ts">
  const links = [
    {
      icon: 'fa-twitter',
      link: 'http://www.twitter.com/GTglee',
      name: 'Twitter',
    },
    {
      icon: 'fa-youtube',
      link: 'http://www.youtube.com/user/gtgleeclub?feature=creators_cornier-http%3A//s.ytimg.com/yt/img/creators_corner/YouTube/40x40_yt_white.png',
      name: 'YouTube',
    },
    {
      icon: 'fa-facebook-square',
      link: 'https://www.facebook.com/GTgleeclub/',
      name: 'Facebook',
    },
    {
      icon: 'fa-instagram',
      link: 'https://www.instagram.com/gtglee/',
      name: 'Instagram',
    },
    {
      icon: 'fa-spotify',
      link: 'https://open.spotify.com/artist/5Tz9oXCro8bRGSvfZmZyAY?si=jw3Tp_0fTgu4_G0vyMAC_A',
      name: 'Spotify',
    },
  ]
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Like and Subscribe</h1>
    <ul>
      {#each links as link}
        <li>
          <i class="fab {link.icon}" />
          <a target="_blank" href={link.link}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
