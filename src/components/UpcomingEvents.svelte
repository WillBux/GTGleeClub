<script lang="ts">
  import { PublicEvent } from 'src/gql-operations'
  import { dateFormatter, fullDateTimeFormatter } from 'src/utils'
  import { datetimeToDayjs, gqlClient, now } from 'src/utils'

  let upcomingEvents: PublicEvent[] = []
  let selectedEvent: PublicEvent | null = null

  gqlClient
    .PublicEvents()
    .then((data) => {
      upcomingEvents = data.publicEvents.filter(
        (e) => datetimeToDayjs(e.startTime) > now()
      )
    })
    .catch((error) => {
      alert(`Failed to load upcoming events: ${error}`)
    })
</script>

<section class="section">
  <div id="container" class="container">
    <h1 class="title">Upcoming Events</h1>
    {#if upcomingEvents.length}
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="box">
            <table class="table is-fullwidth is-hoverable">
              <tbody>
                {#each upcomingEvents as event}
                  <tr
                    class:has-background-light={event.id === selectedEvent?.id}
                    style="cursor: {event.id != selectedEvent?.id
                      ? 'pointer'
                      : 'default'}"
                    on:click={() => (selectedEvent = event)}
                  >
                    <td>
                      <span class="has-text-weight-bold">{event.name}</span><br
                      />
                      <span>{dateFormatter(event.startTime.date)}</span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <div class="column">
          <div class="box">
            {#if selectedEvent}
              <div class="event">
                <h3 class="has-text-weight-bold is-size-5">
                  {selectedEvent.name}
                </h3>
                <p>{fullDateTimeFormatter(selectedEvent.startTime)}</p>
                <p class="location">{selectedEvent.location}</p>
                <br />
                <p>{selectedEvent.description}</p>
                <br />
                <p>
                  <a target="_blank" href={selectedEvent.invite}>
                    Put that in your calendar and smoke it.
                  </a>
                </p>
              </div>
            {:else}
              <p>
                Pick an event from the left side to check out its deets and, in
                doing so, become very cool and awesome
              </p>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <p>
        We don't have anything coming up, but check back closer to when the
        semester is going to start.
      </p>
    {/if}
  </div>
</section>
