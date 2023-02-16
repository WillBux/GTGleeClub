<script lang="ts">
  import { gqlClient } from 'src/utils'
  import { PublicSong } from 'src/gql-operations'

  let songs: PublicSong[] = []

  gqlClient
    .PublicSongs()
    .then((data) => {
      songs = data.publicSongs
    })
    .catch((error) => {
      alert(`Failed to load our repertoire: ${error}`)
    })
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Our Current Rep</h1>
    <table class="table is-fullwidth" style="background-color: transparent">
      <tbody>
        {#each songs as song}
          <tr>
            {#if song.current}
                <td>{song.title}</td>
                <td>
                {#each song.videos as video}
                    <p>
                    <a target="_blank" href="https://youtu.be/{video.url}">
                        {video.title}
                    </a>
                    </p>
                {/each}
                </td>
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
