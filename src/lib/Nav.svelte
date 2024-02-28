<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<nav aria-label="Main navigation">
  <ul class="menu">
    <li class:active={$page.url.pathname === `${base}/`}>
      <a href={`${base}/`}>+Inspiration</a>
    </li>
    <li class:active={$page.url.pathname === `${base}/about`}>
      <a href={`${base}/about`}>About</a>
    </li>
    <li class:active={$page.url.pathname === `${base}/contact`}>
      <a href={`${base}/contact`}>Contact</a>
    </li>
  </ul>
</nav>


<style>
  li {
    font-size: 22px;
  }
  @media (max-width: 500px) {
		li > a {
			font-size: 3.5vw !important;
		}
	}
  nav {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: -10px;
  }
  .menu {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    gap: 2rem; /* This sets a space between the menu items */
    margin: 0; /* Remove default margin */
  }
  .menu li a {
    text-decoration: none; /* Removes underline from links */
    color: var(--text-color, black); /* Sets the text color, with a fallback */
    font-weight: var(--text-weight, normal); /* Sets the font weight, with a fallback */
    position: relative; /* Position relative to allow absolute positioning of pseudo-elements */
    padding-bottom: 0.1rem; /* Provide space for the underline */
    display: inline-block;
    font-size: 18px;
  }

  /* NAV FOCUS+ACTIVE STUFF */
  .menu li.active a,
  .menu li a:focus {
    color: rgb(12, 161, 254); 
    transition: color 0.1s ease-in-out;
  }

  .menu li.active a::after {
    content: '';
    display: block;
    margin: auto; /* Center the pseudo-element */
    height: 3.25px; /* Thickness of your underline */
    width: 100%; /* Full width of the text */
    background-color:rgb(12, 161, 254);  /* Color of your underline */
  }

  .menu li a:focus {
  background-color: transparent; /* Ensure no background color is applied */
  outline: none; /* Removes the default outline */
  box-shadow: none; /* Ensures no shadow is applied */
}

.menu li a:hover {
  color: rgb(12, 161, 254); 
}


</style>