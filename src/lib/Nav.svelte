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
    gap: 1rem; /* SPACE BETWEEN MENU ITEMS */
    margin: 0; 
  }
  .menu li a {
    text-decoration: none; 
    color: #3A3A3A; 
    font-weight: var(--text-weight, normal); 
    position: relative; 
    padding-bottom: 0.1rem; /* UNDERLINE BREATHING ROOM */
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
    margin: auto; /* PSEUDO-ELEMENT CENTERED */
    height: 3.25px; /* UNDERLINE THICKNESS*/
    width: 100%; /* TEXT FULL WIDTH*/
    background-color:rgb(12, 161, 254);  /* UNDERLINE COLOR*/
  }

  .menu li a:focus {
  background-color: transparent; 
  outline: none; 
  box-shadow: none; 
}

.menu li a:hover {
  color: rgb(12, 161, 254); 
}


</style>