import { createSlice } from "@reduxjs/toolkit";




// const cartSlice = createSlice({
//     name: "cart",
//     initalState:[],
//     amount:0,
//     total:0,
//     reducers: {
//         addcart: (state,action)=>{
//                         state.products.push(action.payload)
//                     },
//         removecart: (state,action)=>{
//                      return  state.filter( (item)=>item.id !== action.payload)
                        
//                     },
//         increaseAmount: (state, {payload}) =>{
//             const item = state.products.find((item)=>item.name === payload.name);
//             item.amount++
//         },
//         decreaseAmount: (state, {payload})=>{
//             const items = state.products.find((item)=>item.name === payload.name);
//           items.amount--
//         },
//         removeItem: (state,{payload})=>{
//             state.products = state.products.filter((item)=>item.name !== payload.name)

//         },
//         updateTotal: (state)=>{
//             let amount = 0;
//             let total = 0;
//             state.products.forEach(item =>{
//                 amount += item.amount;
//                 total += item.amount * item.price;
//             });
//             state.amount = amount;
//             state.total = total;
//         }
//     }
// })

const initialState = {
    amount:0,
    total: 0,
    products: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
   
 
    reducers:{
        // addcart: (state,action)=>{
        //     state.products.push(action.payload)
        // },

        addcart(state, action) {
            const newItem = action.payload
      
            //check item is already exits
            const exitsItem = state.products.find((item) => item.id === newItem.id)
      
            if (exitsItem) {
              exitsItem.quantity++
              exitsItem.totalPrice += newItem.price
            } else {
              state.products.push({
                id: newItem.id,
                category:newItem.category,
                image:newItem.image,
                description:newItem.description,
                price: newItem.price,
                quantity: 1,
                title: newItem.title,
                totalPrice: newItem.price,
                
               
              })
              state.totalQuantity++
            }
          },

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
       



        increaseAmount: (state, {payload}) =>{
                        const cartItem = state.products.find((item)=>item.id === payload.id);
                      cartItem.amount =  cartItem.amount+1;
                    },
                    decreaseAmount: (state, {payload})=>{
                        const items = state.products.find((item)=>item.name === payload.name);
                      items.amount--
                    },
                    removeItem: (state,{payload})=>{
                        state.products = state.products.filter((item)=>item.name !== payload.name)
            
                    },
                    updateTotal: (state)=>{
                        let amount = 0;
                        let total = 0;
                        state.products.forEach(item =>{
                            amount += item.amount;
                            total += item.amount * item.price;
                        });
                        state.amount = amount;
                        state.total = total;
                    }

}
})



export const {addcart, removecart, increaseAmount, decreaseAmount, removeItem, updateTotal} = cartSlice.actions;
export default cartSlice.reducer;