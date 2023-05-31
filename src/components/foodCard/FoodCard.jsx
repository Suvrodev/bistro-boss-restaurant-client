import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {user}=useContext(AuthContext)
    const [,refetch]=useCart();
    const navigate=useNavigate()
    const location=useLocation()

    console.log(user)
    const {_id,image,recipe,name,price}=item

    const handleAddToCard=item=>{
      console.log(item)
      if(user){
        const orderItem={
          foodId:_id,
          name,image,price,
          userEmail:user.email
        }
        const url='http://localhost:5000/carts'
        fetch(url,{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(orderItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
                //Sweet Alert start
                refetch()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Data successfully add to cart',
                  showConfirmButton: false,
                  timer: 1500
                })
              //Sweet Alert end
          }
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Login First',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'> ${price} </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 mt-4
             border-orange-400 bg-slate-100 text-black">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;