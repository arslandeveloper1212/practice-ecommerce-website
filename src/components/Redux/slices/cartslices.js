import { createSlice } from "@reduxjs/toolkit";
import CartData from "../../Pages/CartData";


const initialState = {
    totalPrice:0,
    totalQuantity: 0,
    products: CartData,
    cart:[],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
   
 
    reducers:{
        addcart: (state,action)=>{
          let find = state.cart.findIndex((item)=>item.id === action.payload.id)
          if(find>=0){
            state.cart[find].quantity +=1;
          }else{
            state.cart.push(action.payload)
          }
            
        },

        getCartTotal: (state) => {
          let { totalQuantity, totalPrice } = state.cart.reduce(
            (cartTotal, cartItem) => {
              console.log("carttotal", cartTotal);
              console.log("cartitem", cartItem);
              const { price, quantity } = cartItem;
              console.log(price, quantity);
              const itemTotal = price * quantity;
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += quantity;
              return cartTotal;
            },
            {
              totalPrice: 0,
              totalQuantity: 0,
            }
          );
          state.totalPrice = parseInt(totalPrice.toFixed(2));
          state.totalQuantity = totalQuantity;
        },


        removeItem : (state,action)=>{
          state.cart = state.cart.filter((item)=>item.id !== action.payload)
        },

        increaseItemQuantity: (state,action)=>{
          state.cart= state.cart.map((item)=>{
            if(item.id === action.payload){
              return{...item, quantity: item.quantity+1};
            }
            return item;
          })
        },
        decreaseItemQuantity: (state,action)=>{
          state.cart= state.cart.map((item)=>{
            if(item.id === action.payload){
              return{...item, quantity: item.quantity-1};
            }
            return item;
          })
        },

        // addcart(state, action) {
        //     const newItem = action.payload
      
        //     //check item is already exits
        //     const exitsItem = state.cart.find((item) => item.id === newItem.id)
      
        //     if (exitsItem) {
        //       exitsItem.quantity++
        //       exitsItem.totalPrice += newItem.price
        //     } else {
        //       state.products.push({
        //         id: newItem.id,
        //         category:newItem.category,
        //         image:newItem.image,
        //         description:newItem.description,
        //         price: newItem.price,
        //         quantity: 1,
        //         title: newItem.title,
        //         totalPrice: newItem.price,
                
               
        //       })
        //       state.totalQuantity++
        //     }
        //   },

        // removecart: (state,action)=>{
        //  return  state.products.filter( (item)=>item.id !== action.payload)
            
        // },
       
        // removecart(state, action) {
        //     const id = action.payload
        //     const exitstingItem = state.products.find((item) => item.id === id)
        //     if (exitstingItem.quantity === 1) {
        //       state.products = state.products.filter((item) => item.id !== id)
        //       state.totalQuantity--
        //     } else {
        //       exitstingItem.quantity--
        //       exitstingItem.totalPrice -= exitstingItem.price
        //     }
        //   },
       



        // increaseAmount: (state, {payload}) =>{
        //             //     const items = state.products.find((item)=>item.id === payload.id);
        //             //   items.amount ++;
        //             // },
        //             state.value += 1
        //           },
        //             decreaseAmount: (state, {payload})=>{
        //                 const items = state.products.find((item)=>item.id === payload.id);
        //               items.amount--
        //             },
        //             removeItem: (state,{payload})=>{
        //                 state.products = state.products.filter((item)=>item.id !== payload.id)
            
        //             },
                    // updateTotal: (state)=>{
                    //     let amount = 0;
                    //     let total = 0;
                    //     state.products.forEach(item =>{
                    //         amount += item.amount;
                    //         total += item.amount * item.price;
                    //     });
                    //     state.amount = amount;
                    //     state.total = total;
                    // }

}
})



export const {addcart,getCartTotal, removeItem,increaseItemQuantity , decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;