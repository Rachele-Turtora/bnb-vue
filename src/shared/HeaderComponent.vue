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

		searchByIcon() {
			this.suggerimenti = [];
			this.address = this.search;
			this.getFilteredApartments();
		},

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
			<div class="row align-items-center justify-content-center">
				<div class="col-6 col-lg-3 order-1 order-lg-1 ">
					<a class="navbar-brand d-flex justify-content-start align-items-start" href="#">
						<img class="logo" src="../../public/boolbnb.svg" alt="" />
					</a>
				</div>
				<div class="col-sm-10 col-lg-6 order-3 order-lg-2">
					<div
						class="search-box d-flex align-items-center justify-content-between border border-secondary-subtle px-3 py-2 my-3">

						<div class="address d-flex align-items-center p-2">
							<div class="clear-icon" @click="clear()">
								<font-awesome-icon :icon="['fas', 'xmark']" />
							</div>
							<input type="text" id="input-box" placeholder="Indirizzo" autocomplete="off"
								@keyup="searchApartments()" v-model="search" class="ms-3">
						</div>
						<div class="search d-flex align-items-center justify-content-center" @click="searchByIcon()">
							<font-awesome-icon :icon="['fas', 'search']" />
						</div>
						<div class="result-box rounded" v-if="suggerimenti.length">
							<ul>
								<li v-for="(suggerimento, index) in suggerimenti" @click="selectInput(index)">
									<span class="me-3"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
									{{ suggerimento }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-6 col-lg-3 order-2 order-lg-3">
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
	border-radius: 50px;
	position: relative;

	.search {
		width: 40px;
		height: 40px;
		color: white;
		background-color: $primary;
		border-radius: 50%;
	}
}

.result-box {
	position: absolute;
	top: 80px;
	left: 60px;
	background-color: white;

	ul {
		padding: 15px 0;

		li {
			list-style-type: none;
			border-radius: 3px;
			padding: 15px 50px 15px 20px;
			cursor: pointer;

			&:hover {
				background-color: rgba(0, 217, 166, 0.5);
			}
		}
	}
}

.row {
	padding: 10px 20px;
}

input {
	flex: 1;
	height: 40px;
	background: transparent;
	border: 0;
	outline: 0;
	font: 18px;
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
