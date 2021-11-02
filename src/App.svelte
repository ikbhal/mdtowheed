<script>
import Jikr from "./Jikr.svelte";
import NamaazList from "./NamaazList.svelte";

</script>

<main>
	<h1>Md Towheed</h1>
	<p>Track Bath, Namaaz, Jikr, Quran, Arabic class, english</p>
	<p>Sports, Exercise, pullups, walk</p>
	<hr/>
	<Jikr/>
	<hr/>

	<NamaazList/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>