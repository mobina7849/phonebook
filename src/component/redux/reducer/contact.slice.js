import { createSlice } from "@reduxjs/toolkit";
//slice ha haman reducer hastand
const initialState=[{ id: 0,
    userProfile: "https://avatars.dicebear.com/api/avataaars/y.svg",
    name: "nahid",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "12",
    country: "iran",
    favorite: false,
  },
  {
    id: 1,
    userProfile: "https://avatars.dicebear.com/api/avataaars/your.svg",
    name: "reza",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "34",
    country: "aragh",
    favorite: true,
  },
  {
    id: 2,
    userProfile: "https://picsum.photos/20",
    name: "ali",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "67",
    country: "turkey",
    favorite: false,
  },
  {
    id: 3,
    userProfile: "https://picsum.photos/20",
    name: "shahin",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "54",
    country: "rom",
    favorite: true,
  }]

  export const ContactSlice=createSlice({
    name:'contacts',
    initialState,
    reducers:{
        addContact:(state,action)=>{
            state.push(action.payload)
    },
        removeContact:(state,action)=>{
            //state=[...state].filter(item=>item.id!==action.payload.id)
            const index=state.findIndex(item=>item.id===action.payload)
            state.splice(index,1)
    },
        updateContact:(state,action)=>{
           // state=state.map(contact=>contact.id===action.payload ?action.payload :contact)
            //state=[...state.map(contact=>contact.id===action.payload.id ?action.payload :contact)]
           // console.log(action.payload)
           const index=state.findIndex(item=>item.id===action.payload.id)
            state[index]=action.payload

    },
        checkContact:(state,action)=>{
           // state= state.map(contact=>contact.id === action.payload ?{...contact,favorite:!contact.favorite} :contact)
            //state=[...state.map(contact=>contact.id===action.payload.id ?{...contact,favorite:!contact.favorite} :contact)]
            //const index=state.findIndex(item=>item.id===action.payload)
            //state[index]=favorite=!contact.favorite
           // state.map=state(contact=>contact.id===action.payload.id ?{...contact,favorite:!contact.favorite} :contact)
           //console.log(action.payload)
           const index=state.findIndex(item=>item.id===action.payload)
            state[index].favorite=!state[index].favorite

        },
  }
});
//done done actions ro export mikonim
  export const{addContact,removeContact,updateContact,checkContact}=ContactSlice.actions
  export default ContactSlice.reducer