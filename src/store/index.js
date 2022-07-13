import { createStore } from 'vuex';
import CategoriesList from './CategoriesList.json'
import Newbooks from './Newbooks.json'
import GiftCard from './GiftCard.json'
import Basket from './Basket.json'

export default createStore({
  state: {
    showpopup: false,
    Newbooks: Newbooks,
    CategoriesList: CategoriesList,
    GiftCard: GiftCard,
    Basket: Basket,
  },
  getters: {
    Newbooks(state) {
      return state.Newbooks
    },
    Basket(state) {
      return state.Basket
    },
    BasketLenght(state) {
      return state.Basket.length
    },
  },
  mutations: {
    addtocart(state,item){
      state.Basket.push(item);
      state.showpopup = true;
      setTimeout(() => {
      state.showpopup = false;
      }, 2000);
    },
    remove(state,id){
      let index = state.Basket.findIndex(item=>item.id==id);
      state.Basket.splice(index,1);
    }
  },
  actions: {
    addtocart(context,payload){
      context.commit('addtocart',payload)
    },
    remove(context,payload){
      context.commit('remove',payload)
    },
  },
  modules: {
  }
})
