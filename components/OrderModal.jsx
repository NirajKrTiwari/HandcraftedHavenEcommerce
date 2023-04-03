// This is for Order Details
import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import toast,{Toaster} from 'react-hot-toast';
import { useStore } from '../store/store';
import {useRouter} from 'next/router';
import { useDisclosure } from '@mantine/hooks';

export default function OrderModal({opened,setOpened,PaymentMethod}){
const router =useRouter();
const total= typeof window != 'undefined' && localStorage.getItem('total');
const theme = useMantineTheme();
const [FormData, setFormData] = useState({});
// const {close} = useDisclosure(false);
const foodname= typeof window != 'undefined' && localStorage.getItem('foodname');
let check=0;
function close()
{
  setOpened(false);
}

// const handleInput=(e)=>
// {

//     setFormData({...FormData,[e.target.name]:e.target.value})
// }

const resetCart=useStore((state)=>state.resetCart)
const [disabled, setDisabled] = useState(false);
const handleSubmit=async (e)=>
{
  
  // if(check==1){
    console.log("valid"+check);
    e.stopPropagation();
    e.preventDefault();
    setDisabled(true);
    const cancel="false";
    const id=await createOrder({...FormData,foodname,total,PaymentMethod,cancel});
    toast.success("Order Placed Successfully");
    resetCart();
    {
        typeof window != 'undefined' && localStorage.setItem('order',id);
    }
    router.push(`/order/${id}`)
  // }
  // else{
  //   toast.error("Invalid Mobile Number");
  // }
}

//mobile number validation

const handleInput=(e)=>
{
  // if(e.target.name=='phone')
  // {
  //   if(e.target.value.length==10)
  //   {
  //     check=1;
  //     console.log("valid"+check);
  //   }
  //   else{
  //     check=0;
  //     console.log(" not valid");
  //     return;
  //   }
  // }
  setFormData({...FormData,[e.target.name]:e.target.value})
}

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      // onClose={setOpened==null}
      onClose={close}
    >
      {/* Modal content */}
      <form action=""  className={css.formContainer}>
        <input onChange={handleInput} type="text" name='name' placeholder='Name' required />
        <input onChange={handleInput} type="number" name='phone' placeholder='Phone Number' required/>
        {/* <textarea name="address"  rows={3}></textarea> */}
        <select onChange={handleInput} name="address" id="address" placeholder='Address' required>
            <option value="" disabled selected hidden>Address...</option>
            <option value="Academic Block">Academic Block</option>
            <option value="Girl's Hostel">Girls Hostel</option>
            <option value="Boy's Hostel Block-1">Boys Hostel Block-1</option>
            <option value="Boy's Hostel Block-2">Boys Hostel Block-2</option>
            <option value="Boy's Hostel Block-3">Boys Hostel Block-3</option>
        </select>
        <span>You will Pay <span>Rs. {total}</span> on delivery</span>
        <button  onClick={handleSubmit} type='submit' className={css.btn}>Place Order</button>
      </form>
      <Toaster/>
    </Modal>
  );
}