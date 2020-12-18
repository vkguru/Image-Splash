import axios from "axios";

const state = {
  photos: []
};

const getters = {
  allPhotos: state => state.photos
};

const id = "kkuoQFP-8_Rfec480oIax6jx9vuQl5VRm6eREDV6fwU";

const actions = {
  async fetchPhotos({ commit }) {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${id}`
    );

    commit("getPhotos", res.data);
    console.log(res.data);
  },
  async photoSearch({ commit }, title) {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page="1"&query=${title}`,
      {
        params: {
          client_id: id
        }
      }
    );

    commit("getPhotos", res.data.results);
    console.log(res.data.results);
  }
};

const mutations = {
  getPhotos: (state, photos) => (state.photos = photos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
