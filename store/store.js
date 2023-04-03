import create from 'zustand';

export const useStore = create((set) => ({
    //cart
    cart:{
        food:[]
    },

    //add food in cart
    addFood: (data) => set((state) => ({
        cart:{
            food:[...state.cart.food, data]
        }
    })),

    //remove food from cart
    removeFood :(index)=>
    set((state)=>
    ({
        cart:{
            food:state.cart.food.filter((_,i)=>i!==index)
        }
    })
    ),

    //reset cart
    resetCart:()=>
    set(()=>({
        cart:{
            food:[]
        }
    }))
})
)
