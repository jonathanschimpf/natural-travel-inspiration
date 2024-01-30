<script>
    import { onMount } from 'svelte';
  
    export let showModal;
    export let photo;
    export let close;
  
    let modalElement;
  
    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    });
  
    // Ensure modal is focused for key events to work
    $: if (showModal) {
      setTimeout(() => modalElement.focus());
    }
  
    // Function to close modal on Escape key press
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        close();
      }
    }
  </script>
  
  {#if showModal}
    <!-- Make the div focusable -->
    <!-- Assign an appropriate role for click events -->
    <div
      class="modal-backdrop"
      on:click={close}
      on:keydown={handleKeydown}
      tabindex="-1" 
      role="button" 
      aria-modal="true"
      aria-labelledby="modalTitle"
      bind:this={modalElement}
    >
      <!-- A role to indicate it's a passive document region -->
      <div
        class="modal-content"
        on:click|stopPropagation
        role="document"
      >
        <button
          class="modal-close"
          on:click={close}
          aria-label="Close modal"
        >×</button>
        <img src={photo.urls.regular} alt={photo.alt_description} />
        <p id="modalTitle">{photo.description || photo.alt_description}</p>
      </div>
    </div>
  {/if}
  
  <style>
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal-backdrop:focus {
    outline: none; /* Remove focus outline if desired */
  }
    .modal-content {
      position: relative;
      max-width: 80%;
      max-height: 80%;
      overflow: auto;
    }
    .modal-close {
      position: absolute;
      top: 0;
      right: 0;
      background: none;
      border: none;
      font-size: 2em;
      color: white;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  </style>
  