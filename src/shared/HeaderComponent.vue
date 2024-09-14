<script>
// import:
import { store } from "../store";
import RegisterButton from "../components/RegisterButton.vue";
import axios from 'axios';

export default {
	nome: "Header",
	components: {
		RegisterButton
	},
	data() {
		return {
			store,
			search: '',
			suggerimenti: [],
			address: "",
			position: null
		};
	},
	methods: {

		async selectInput(index) {
			this.search = this.suggerimenti[index];
			this.suggerimenti = [];
			this.address = this.search;

			this.getFilteredApartments();
		},

		searchApartments() {

			const url = this.store.api.tomtomUrl + encodeURIComponent(this.search) + ".json";

			const params = {
				key: "hqfK54fHRUrLOi7htWUP65d2wejFf1hU",
				limit: 6
			};

			axios.get(url, { params })
				.then(response => {
					this.suggerimenti = response.data.results.map(result => result.address.freeformAddress);
				})
		},

		clear() {
			this.suggerimenti = [];
			this.search = "";
			this.store.api.filteredApartments = [];
		},

		getFilteredApartments() {
			const url = this.store.api.baseUrl + this.store.api.endpoints.filteredApartmentsList;

			const params = {
				city: encodeURIComponent(this.search),
				distance: 20
			}

			axios.get(url, { params })
				.then(response => {
					this.store.api.filteredApartments = response.data.results
				})
		}

	}
};
</script>

<template>
	<header class="shadow">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-3 d-none d-lg-flex">
					<a class="navbar-brand d-flex justify-content-start align-items-start" href="#">
						<img class="logo" src="../../public/boolbnb.svg" alt="" />
					</a>
				</div>
				<div class="col-lg-6">
					<div class="search-box">

						<div class="d-flex align-items-center p-3">
							<input type="text" id="input-box" placeholder="scrivi l'inidizzo" autocomplete="off"
								@keyup="searchApartments()" v-model="search">
							<div class="clear-icon" @click="clear()">
								<font-awesome-icon :icon="['fas', 'xmark']" class="ms-2" />
							</div>
						</div>
					</div>
					<div class="result-box" v-if="suggerimenti.length">
						<ul>
							<li v-for="(suggerimento, index) in suggerimenti" @click="selectInput(index)">
								{{ suggerimento }}
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3">
					<RegisterButton />
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

header {
	font-size: 20px;
	position: sticky;
	top: 0;
	background-color: whitesmoke;

	.logo {
		width: 150px;
	}

	ul {
		padding: 0;
		margin: 10px;

		li {
			list-style-type: none;
		}
	}

	a {
		color: $tertiary;
		text-decoration: none;

		&:hover {
			color: $primary;
			font-weight: 600;
		}
	}

	.btn-login {
		border: 1px solid $primary;
		color: $primary;
		padding: 5px 10px;
		border-radius: 20px;

		&:hover {
			background-color: $primary;
			color: white;
		}
	}
}

.search-box {
	width: 100%;
	background-color: aliceblue;
}

.result-box ul {
	border-top: 1px solid;
	padding: 15px 10px;
}

.row {
	padding: 10px 20px;
}

input {
	flex: 1;
	height: 50px;
	background: transparent;
	border: 0;
	outline: 0;
	font: 18px;
}

.result-box ul li {
	list-style-type: none;
	border-radius: 3px;
	padding: 15px 10px;
	cursor: pointer;
}

.result-box ul li:hover {
	background-color: aqua;
}

.row button {
	background-color: transparent;
	border: 0;
	outline: 0;
}

.clear-icon {
	cursor: pointer;
	padding: 10px;
	display: flex;
	align-items: center;
}
</style>
