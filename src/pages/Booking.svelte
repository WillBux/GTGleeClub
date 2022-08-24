<script lang="ts">
  import TextInput from 'src/components/forms/TextInput.svelte'
  import TextareaInput from 'src/components/forms/TextareaInput.svelte'

  import { gqlClient } from 'src/utils'
  import { NewGigRequest } from 'src/gql-operations'
  import {
    dateType,
    emailType,
    phoneType,
    stringType,
    timeType,
  } from 'src/input'

  let loading = false
  let submitted = false
  let request: NewGigRequest = {
    name: '',
    organization: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    comments: '',
    location: '',
    startTime: {
      date: '',
      time: '',
    },
  }

  function submitRequest() {
    loading = true
    gqlClient
      .SubmitGigRequest({ request })
      .then(() => {
        loading = false
        submitted = true
      })
      .catch((err) => {
        loading = false
        alert(
          'Ummm something went wrong behind the scenes. ' +
            `Email us and tell us: ${err}`
        )
      })
  }
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Book the Glee Club</h1>
    <p class="subtitle">
      Interested in having the Georgia Tech Glee Club perform at your next
      stadium tour/bar mitzvah/book club meeting? Fill out the form below and
      someone will be in touch with you as soon as possible (when ME 2110
      homework is done. Well...done enough, anyway).
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <form on:submit|preventDefault={submitRequest}>
      <h2 class="is-size-2">Contact Info</h2>
      <TextInput
        type={stringType}
        value={request.organization}
        onInput={(organization) => (request.organization = organization)}
        title="Organization"
        placeholder="Arlen Book Club"
        helpText="What is your organization or group? Or is it just you? (This is a no-judgement zone)"
        required
      />
      <TextInput
        type={stringType}
        value={request.contactName}
        onInput={(contactName) => (request.contactName = contactName)}
        title="Contact Name"
        placeholder="George Burdell"
        helpText="It's probably you, but maybe not?"
        required
      />
      <TextInput
        type={phoneType}
        value={request.contactPhone}
        onInput={(contactPhone) => (request.contactPhone = contactPhone)}
        title="Contact Phone Number"
        placeholder="678-867-5309"
        helpText="We don't necessarily need a phone number, but it's nice."
      />
      <TextInput
        type={emailType}
        value={request.contactEmail}
        onInput={(contactEmail) => (request.contactEmail = contactEmail)}
        title="Contact Email"
        placeholder="gburdell3@gatech.edu"
        helpText="We really need an email though like for real for real."
        required
      />

      <h2 class="is-size-2">Event Info</h2>
      <TextInput
        type={stringType}
        value={request.name}
        onInput={(name) => (request.name = name)}
        title="Name of Event"
        placeholder={'"Smith Wedding," "Raising of Beelzebub on this Winter Solstice"'}
        helpText="Name or short description of the event."
        required
      />
      <TextInput
        type={dateType}
        value={request.startTime.date}
        onInput={(date) => (request.startTime.date = date)}
        title="Date of Event"
        helpText="When is this again?"
        required
      />
      <TextInput
        type={timeType}
        value={request.startTime.time}
        onInput={(time) => (request.startTime.time = time)}
        title="Time of Event"
        helpText="When will we be performing? Not set in stone, but give us an idea."
        required
      />
      <TextInput
        type={stringType}
        value={request.location}
        onInput={(location) => (request.location = location)}
        title="Location of Event"
        helpText="Where dis"
        required
      />
      <TextareaInput
        value={request.comments}
        onInput={(comments) => (request.comments = comments)}
        title="Comments"
        placeholder="Never read the comments"
        helpText="Comments, questions, concerns, exhaustive details, hopes and dreams, etc."
      />

      <div class="field">
        <button
          class="button is-primary"
          class:is-loading={loading}
          disabled={submitted}
        >
          {#if submitted}
            You did it! Yay!
          {:else}
            BLOOP IT!
          {/if}
        </button>

        {#if submitted}
          <p>
            Oopsie did you eff it up? No worries, just
            <a
              href="mailto:gleeclub_officers@lists.gatech.edu?subject={request.name} Follow Up"
            >
              email the officers
            </a>
            to clarify any points in your booking request.
          </p>
        {/if}
      </div>
    </form>
  </div>
</section>
