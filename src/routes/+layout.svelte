<header>
	<div><a href="/" id="nav-brand"><strong>Kodujemy w biurze</strong></a></div>
	<div>
		<nav>
			<a href="/podstawy-javascript">podstawy JavaScript</a>
		</nav>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<hr />
	<p>&copy; 2023 Vadim Gierko</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;

		background-color: rgb(253, 253, 253);

		position: fixed;
		left: 0;
		right: 0;
		padding: 0 1em;

		width: auto;
		height: 40px;
	}

	#nav-brand {
		text-decoration: none;
		font-size: large;
	}

	a {
		color: white;
	}

	a:hover {
		color: rgba(255, 255, 255, 0.7);
	}

	main {
		margin-top: 40px;
		flex-grow: 1;
	}

	footer {
		text-align: center;
	}

	@media (prefers-color-scheme: dark) {
		header {
			background-color: rgb(43, 43, 43);
		}
	}

	/* Styles for screens with a minimum width of 1200px (typical desktop) */
	@media screen and (min-width: 1200px) {
		/* Your desktop-specific CSS styles here */
		header {
			max-width: 1140px;
			margin: 0 auto;
		}
	}

	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) and (max-width: 1199px) {
		/* Your laptop-specific CSS styles here */
		header {
			max-width: 970px;
			margin: 0 auto;
		}
	}

	/* Styles for screens with a maximum width of 991px (typical mobile) */
	@media screen and (max-width: 991px) {
		/* Your mobile-specific CSS styles here */
		header {
			max-width: 90%;
			margin: 0 auto;
		}
	}
</style>
